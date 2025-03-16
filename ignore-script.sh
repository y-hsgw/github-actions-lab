#!/bin/bash
echo "CACHED_COMMIT_REF: $CACHED_COMMIT_REF"
echo "COMMIT_REF: $COMMIT_REF"
git diff --quiet "$CACHED_COMMIT_REF" "$COMMIT_REF" -- apps/web
result=$?
echo "Git diff result: $result"
exit $result