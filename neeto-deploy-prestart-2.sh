#!/bin/bash

echo "DATABASE_URL: $DATABASE_URL"

if [ -n "$DATABASE_URL" ]; then
    # Parse DATABASE_URL to extract components
    username=$(echo "$DATABASE_URL" | sed -n 's#postgres://\([^:]*\):.*@\([^:]*\):.*#\1#p')
    password=$(echo "$DATABASE_URL" | sed -n 's#postgres://[^:]*:\([^@]*\)@.*#\1#p')
    host=$(echo "$DATABASE_URL" | sed -n 's#postgres://[^@]*@\([^:]*\):.*#\1#p')
    port=$(echo "$DATABASE_URL" | sed -n 's#.*:\([0-9]*\)/.*#\1#p')
    database=$(echo "$DATABASE_URL" | sed -n 's#.*:\([0-9]*\)/\([^?]*\)?.*#\2#p')

    # Export variables for ToolJet
    export TOOLJET_USER="$username"
    export TOOLJET_PASS="$password"
    export TOOLJET_HOST="$host"
    export TOOLJET_PORT="$port"
    export TOOLJET_DB="$database"

    echo "TOOLJET_USER: $TOOLJET_USER"
    echo "TOOLJET_PASS: [HIDDEN]"
    echo "TOOLJET_HOST: $TOOLJET_HOST"
    echo "TOOLJET_PORT: $TOOLJET_PORT"
    echo "TOOLJET_DB: $TOOLJET_DB"
else
    echo "DATABASE_URL is not set. Exiting."
    exit 1
fi
