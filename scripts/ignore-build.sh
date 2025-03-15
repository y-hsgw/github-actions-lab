#!/bin/bash
echo "Checking for changes in apps/web and package.json..."
git diff --name-only $CACHED_COMMIT_REF $COMMIT_REF apps/web ./package.json
if git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF apps/web ./package.json; then
  echo "No changes detected in apps/web or package.json, skipping build."
  exit 1  # 変更がない場合はビルドをスキップ
else
  echo "Changes detected, proceeding with build..."
  exit 0  # 変更がある場合はビルドを実行
fi
