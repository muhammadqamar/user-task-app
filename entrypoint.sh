#!/bin/sh

set -e


# Env variables to translate here

# NEXTAUTH_SECRET
# KEYCLOAK_HOST
# KEYCLOAK_CLIENT_ID
# SERVER_URL
# KEYCLOAK_REALM
# KEYCLOAK_CLIENT_SECRET


if [ -z "${NEXTAUTH_SECRET}" ]; then
    echo "Provide the NEXTAUTH_SECRET env variable"
    exit 1
fi

if [ -z "${KEYCLOAK_HOST}" ]; then
    echo "Provide the KEYCLOAK_HOST env variable"
    exit 1
fi

if [ -z "${KEYCLOAK_CLIENT_ID}" ]; then
    echo "Provide the KEYCLOAK_CLIENT_ID env variable"
    exit 1
fi

if [ -z "${KEYCLOAK_CLIENT_SECRET}" ]; then
    echo "Provide the KEYCLOAK_CLIENT_SECRET env variable"
    exit 1
fi

if [ -z "${SERVER_URL}" ]; then
    echo "Provide the SERVER_URL env variable"
    exit 1
fi

if [ -z "${KEYCLOAK_REALM}" ]; then
    echo "Provide the KEYCLOAK_REALM env variable"
    exit 1
fi


export NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
export KEYCLOAK_HOST=${KEYCLOAK_HOST}
export KEYCLOAK_CLIENT_ID=${KEYCLOAK_CLIENT_ID}
export SERVER_URL=${SERVER_URL}
export KEYCLOAK_REALM=${KEYCLOAK_REALM}
export KEYCLOAK_CLIENT_SECRET=${KEYCLOAK_CLIENT_SECRET}

/entrypoint.sh
