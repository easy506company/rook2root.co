#!/bin/bash
# run from the root of the project

set -e

REPOS=(
  "git@github.com:rook2root/exploits-library.git"
  "git@github.com:rook2root/ethical-playbook.git"
)
DIR=temp

mkdir -p "$DIR"

for REPO in "${REPOS[@]}"; do
  NAME=$(basename "$REPO" .git)
  TARGET="$DIR/$NAME"
  if [ -d "$TARGET/.git" ]; then
    echo "Updating $NAME..."
    git -C "$TARGET" pull origin main
  else
    echo "Cloning $NAME..."
    git clone --branch main "$REPO" "$TARGET"
  fi

  # Merge assets folder (do not replace, just merge contents)
  if [ -d "$TARGET/assets" ]; then
    echo "Merging assets from $NAME..."
    mkdir -p public/assets
    rsync -a "$TARGET/assets/" public/assets/
  fi

  # Merge strategies folder into contents/strategies (do not replace, just merge contents)
  if [ -d "$TARGET/strategies" ]; then
    echo "Merging strategies from $NAME into contents/strategies..."
    mkdir -p contents/strategies
    rsync -a "$TARGET/strategies/" contents/strategies/
  fi

  # Copy playbook folder to contents
  if [ -d "$TARGET/playbook" ]; then
    echo "Copying playbook from $NAME to contents..."
    mkdir -p contents/playbook
    cp -r "$TARGET/playbook/." contents/playbook/
  fi

  # Copy *-routes-config.ts to lib
  for ROUTE_FILE in "$TARGET"/*-routes-config.ts; do
    if [ -f "$ROUTE_FILE" ]; then
      echo "Copying $(basename "$ROUTE_FILE") from $NAME to lib..."
      cp "$ROUTE_FILE" lib/
    fi
  done
done