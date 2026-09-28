#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

npm run build
aws s3 sync build/ s3://bsu.gd/type/ --exclude ".DS_Store"
aws cloudfront create-invalidation --distribution-id E2VRSTP38CDQZS --paths "/type" "/type/*" > /dev/null

echo "Deployed: https://bsu.gd/type/"
