import * as dotenv from 'dotenv';

dotenv.config(); // Load .env file into process.env

export const userAgent = {
  'User-Agent': `nodejs ${process.versions.node} - service-console-ad-manager`
};
const sandbox = process.env['SANDBOX_NAME'] || 'qa3';
const defaultValuesKey = 'sandbox';
const defaultValues = {
  sandbox: {
    API_PROXY_PORT_8080_SCHEME: `http`,
    API_PROXY_PORT_8080_TCP_ADDR: `api-proxy.${sandbox}.sandbox.teads.net`,
    API_PROXY_PORT_8080_TCP_PORT: 80,

    API_DOMAINS_PORT_9000_TCP_ADDR: `api-domains.${sandbox}.sandbox.teads.net`,
    API_DOMAINS_PORT_9000_TCP_PORT: 80,

    LOGIN_PORT_8080_SCHEME: `http`,
    LOGIN_PORT_8080_TCP_ADDR: `login.${sandbox}.sandbox.teads.net`,
    LOGIN_PORT_8080_TCP_PORT: 80,

    OAUTH_PORT_8081_SCHEME: `http`,
    OAUTH_PORT_8081_TCP_ADDR: `oauth.${sandbox}.sandbox.teads.net`,
    OAUTH_PORT_8081_TCP_PORT: 80,

    MANAGER_HOST_SCHEME: `http`,
    MANAGER_HOST_NAME: `manager.${sandbox}.sandbox.teads.net`,
    MANAGER_HOST_PORT: 80,

    NODE_ENV: `${sandbox}`,
    TAM_URL: `http://buying-interface.${sandbox}.sandbox.teads.net`
  },
  prod: {
    NODE_ENV: 'production'
  }
};

export const environment = {
  ENVIRONMENT:
    process.env['NODE_ENV'] || defaultValues[defaultValuesKey]['NODE_ENV'],
  API_PROXY_PORT_8080_SCHEME:
    process.env['API_PROXY_PORT_8080_SCHEME'] ||
    defaultValues[defaultValuesKey]['API_PROXY_PORT_8080_SCHEME'],
  API_PROXY_PORT_8080_TCP_ADDR:
    process.env['API_PROXY_PORT_8080_TCP_ADDR'] ||
    defaultValues[defaultValuesKey]['API_PROXY_PORT_8080_TCP_ADDR'],
  API_PROXY_PORT_8080_TCP_PORT:
    process.env['API_PROXY_PORT_8080_TCP_PORT'] ||
    defaultValues[defaultValuesKey]['API_PROXY_PORT_8080_TCP_PORT'],

  API_DOMAINS_PORT_9000_TCP_ADDR:
    process.env['API_DOMAINS_PORT_9000_TCP_ADDR'] ||
    defaultValues[defaultValuesKey]['API_DOMAINS_PORT_9000_TCP_ADDR'],
  API_DOMAINS_PORT_9000_TCP_PORT:
    process.env['API_DOMAINS_PORT_9000_TCP_PORT'] ||
    defaultValues[defaultValuesKey]['API_DOMAINS_PORT_9000_TCP_PORT'],

  LOGIN_PORT_8080_SCHEME:
    process.env['LOGIN_PORT_8080_SCHEME'] ||
    defaultValues[defaultValuesKey]['LOGIN_PORT_8080_SCHEME'],
  LOGIN_PORT_8080_TCP_ADDR:
    process.env['LOGIN_PORT_8080_TCP_ADDR'] ||
    defaultValues[defaultValuesKey]['LOGIN_PORT_8080_TCP_ADDR'],
  LOGIN_PORT_8080_TCP_PORT:
    process.env['LOGIN_PORT_8080_TCP_PORT'] ||
    defaultValues[defaultValuesKey]['LOGIN_PORT_8080_TCP_PORT'],

  OAUTH_PORT_8081_SCHEME:
    process.env['OAUTH_PORT_8081_SCHEME'] ||
    defaultValues[defaultValuesKey]['OAUTH_PORT_8081_SCHEME'],
  OAUTH_PORT_8081_TCP_ADDR:
    process.env['OAUTH_PORT_8081_TCP_ADDR'] ||
    defaultValues[defaultValuesKey]['OAUTH_PORT_8081_TCP_ADDR'],
  OAUTH_PORT_8081_TCP_PORT:
    process.env['OAUTH_PORT_8081_TCP_PORT'] ||
    defaultValues[defaultValuesKey]['OAUTH_PORT_8081_TCP_PORT'],

  MANAGER_HOST_SCHEME:
    process.env['MANAGER_HOST_SCHEME'] ||
    defaultValues[defaultValuesKey]['MANAGER_HOST_SCHEME'],
  MANAGER_HOST_NAME:
    process.env['MANAGER_HOST_NAME'] ||
    defaultValues[defaultValuesKey]['MANAGER_HOST_NAME'],
  MANAGER_HOST_PORT:
    process.env['MANAGER_HOST_PORT'] ||
    defaultValues[defaultValuesKey]['MANAGER_HOST_PORT'],

  API_V1: 'v1',
  API_V2: 'v2',
  TAM_URL: process.env['TAM_URL'] || defaultValues[defaultValuesKey]['TAM_URL']
};
