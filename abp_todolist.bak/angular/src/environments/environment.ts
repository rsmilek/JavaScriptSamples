import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'abp_todolist',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44395/',
    redirectUri: baseUrl,
    clientId: 'abp_todolist_App',
    responseType: 'code',
    scope: 'offline_access abp_todolist',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44395',
      rootNamespace: 'abp_todolist',
    },
  },
} as Environment;
