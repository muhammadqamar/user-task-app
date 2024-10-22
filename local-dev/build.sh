#!/bin/sh

set -e

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
CONTEXT_DIR=$(cd "$SCRIPT_DIR/.." && pwd)

cd "${CONTEXT_DIR}"

npm install
npm run build
docker build -t littlehorse/lh-user-tasks-ui:latest .