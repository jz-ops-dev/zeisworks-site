#!/usr/bin/env bash
# Encode the homepage hero video + poster (CO-001 item 0.4).
#
# Usage:
#   scripts/encode-hero.sh path/to/original-intro.mp4
#
# Always run this against the ORIGINAL full-quality export, never against an
# already-compressed public/intro.mp4 — recompressing a compressed file
# degrades quality without saving much. The pre-CO-001 original is
# recoverable from git history: `git show 79377b6:public/intro.mp4 > original.mp4`.
#
# ffmpeg: uses $FFMPEG if set, otherwise `ffmpeg` on PATH. In an environment
# without ffmpeg, `npm i --no-save ffmpeg-static` and
# `export FFMPEG=$(node -p 'require("ffmpeg-static")')`.
#
# Outputs (into public/):
#   intro.mp4          H.264, audio stripped, CRF walked 26->28 until <= 1.2 MB
#   intro.webm         VP9, audio stripped (skipped if libvpx-vp9 unavailable)
#   intro-poster.webp  frame at t=2.5s, 1440px wide, quality walked until <= 60 KB
#   intro-poster.jpg   JPEG fallback for the same frame

set -euo pipefail

SRC="${1:?usage: scripts/encode-hero.sh path/to/original-intro.mp4}"
FFMPEG="${FFMPEG:-ffmpeg}"
OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/public"

MAX_MP4_BYTES=$((1200 * 1024))      # <= 1.2 MB
MAX_POSTER_BYTES=$((60 * 1024))     # <= 60 KB
POSTER_TIME=2.5                     # fully-connected network frame

filesize() { wc -c < "$1" | tr -d ' '; }

# The hero frame renders well under 1440 CSS px; 1280w keeps bitrate honest.
# Source is 1920x1080 — downscale. Keep this in sync if the source changes.
SCALE="scale=1280:-2"

# ── Poster ──────────────────────────────────────────────────────────────────
for q in 70 60 50 40; do
  "$FFMPEG" -y -hide_banner -loglevel error -ss "$POSTER_TIME" -i "$SRC" \
    -frames:v 1 -vf "scale=1440:-2" -c:v libwebp -quality "$q" \
    "$OUT_DIR/intro-poster.webp"
  [ "$(filesize "$OUT_DIR/intro-poster.webp")" -le "$MAX_POSTER_BYTES" ] && break
done
"$FFMPEG" -y -hide_banner -loglevel error -ss "$POSTER_TIME" -i "$SRC" \
  -frames:v 1 -vf "scale=1440:-2" -q:v 5 "$OUT_DIR/intro-poster.jpg"

# ── MP4 (H.264, no audio) ───────────────────────────────────────────────────
for crf in 26 27 28; do
  "$FFMPEG" -y -hide_banner -loglevel error -i "$SRC" \
    -an -c:v libx264 -crf "$crf" -preset slow -pix_fmt yuv420p \
    -vf "$SCALE" -movflags +faststart \
    "$OUT_DIR/intro.mp4"
  [ "$(filesize "$OUT_DIR/intro.mp4")" -le "$MAX_MP4_BYTES" ] && break
done

# ── WebM (VP9, no audio) — progressive enhancement ─────────────────────────
# (capture first: `grep -q` would SIGPIPE ffmpeg and trip pipefail)
ENCODERS="$("$FFMPEG" -hide_banner -encoders 2>/dev/null || true)"
if printf '%s' "$ENCODERS" | grep -q libvpx-vp9; then
  "$FFMPEG" -y -hide_banner -loglevel error -i "$SRC" \
    -an -c:v libvpx-vp9 -crf 36 -b:v 0 -vf "$SCALE" -row-mt 1 \
    "$OUT_DIR/intro.webm"
else
  echo "WARN: libvpx-vp9 not available — skipping intro.webm (MP4 + poster still meet the perf budget)" >&2
fi

# ── Assertions ──────────────────────────────────────────────────────────────
fail=0
mp4=$(filesize "$OUT_DIR/intro.mp4")
poster=$(filesize "$OUT_DIR/intro-poster.webp")
[ "$mp4" -le "$MAX_MP4_BYTES" ] || { echo "FAIL: intro.mp4 is ${mp4}B (> 1.2 MB)" >&2; fail=1; }
[ "$poster" -le "$MAX_POSTER_BYTES" ] || { echo "FAIL: intro-poster.webp is ${poster}B (> 60 KB)" >&2; fail=1; }
"$FFMPEG" -hide_banner -i "$OUT_DIR/intro.mp4" 2>&1 | grep -q "Stream.*Audio" && { echo "FAIL: intro.mp4 still has an audio track" >&2; fail=1; }

echo "intro.mp4:         ${mp4} bytes"
echo "intro-poster.webp: ${poster} bytes"
[ -f "$OUT_DIR/intro.webm" ] && echo "intro.webm:        $(filesize "$OUT_DIR/intro.webm") bytes"
echo "intro-poster.jpg:  $(filesize "$OUT_DIR/intro-poster.jpg") bytes"
exit "$fail"
