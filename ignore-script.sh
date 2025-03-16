#!/bin/bash
echo "CACHED_COMMIT_REF: $CACHED_COMMIT_REF"
echo "COMMIT_REF: $COMMIT_REF"

echo git diff --name-only "$CACHED_COMMIT_REF" "$COMMIT_REF"

CHANGES=$(git diff --name-only "$CACHED_COMMIT_REF" "$COMMIT_REF" | grep "^apps/web/")


if [ -z "$CHANGES" ]; then
  echo "No changes in apps/api-1 directory, skipping build"
  exit 0
else
  echo "Changes detected in apps/api-1 directory:"
  echo "$CHANGES"
  exit 1
fi