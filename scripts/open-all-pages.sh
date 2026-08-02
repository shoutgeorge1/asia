#!/usr/bin/env bash
# Open all Asia Growth Vision review pages in the system browser.
# Usage (on your Mac/desktop): ./scripts/open-all-pages.sh
set -euo pipefail
BASE="${1:-https://asia-wagyu-growth.vercel.app}"
PAGES=(
  "/"
  "/dashboard"
  "/tech-audit"
  "/bypass"
  "/system-map"
  "/lifecycle"
  "/landing"
  "/landing/vip"
  "/landing/gifting"
)
open_url() {
  if command -v open >/dev/null 2>&1; then
    open "$1"
  elif command -v xdg-open >/dev/null 2>&1; then
    xdg-open "$1"
  else
    echo "$1"
  fi
}
for p in "${PAGES[@]}"; do
  open_url "${BASE}${p}"
  sleep 0.2
done
echo "Opened ${#PAGES[@]} pages from ${BASE}"
