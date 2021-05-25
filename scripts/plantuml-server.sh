#!/bin/sh

if ! command -v fswatch &> /dev/null
then
    echo "You need to install fswatch with 'brew install fswatch'"
    exit 1
fi

fswatch -o uml | xargs -n1 -I{} ./scripts/build-plantuml.sh
