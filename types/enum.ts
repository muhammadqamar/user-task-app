export enum NEXT_AUTH_STATUS  {
    SUCCESS = 'authenticated',
    LOADING = 'loading',
}

export type keycloakconfigType = {
    serverUrl?: string,
    tenantId?: string,
}