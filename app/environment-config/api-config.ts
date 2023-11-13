import { environment, userAgent } from './environment';

export const apiV1 = () => {
  return `${environment.API_PROXY_PORT_8080_SCHEME}://${environment.API_PROXY_PORT_8080_TCP_ADDR}:${environment.API_PROXY_PORT_8080_TCP_PORT}/${environment.API_V1}`;
};

export const apiV2 = () => {
  return `${environment.API_PROXY_PORT_8080_SCHEME}://${environment.API_PROXY_PORT_8080_TCP_ADDR}:${environment.API_PROXY_PORT_8080_TCP_PORT}/${environment.API_V2}`;
};

export const tokenInfoUrl = (token: String) => {
  return `${environment.OAUTH_PORT_8081_SCHEME}://${environment.OAUTH_PORT_8081_TCP_ADDR}:${environment.OAUTH_PORT_8081_TCP_PORT}/oauth/token_info?token=${token}`;
};

export const apiDomainsUrl = () => {
  return `${environment.API_DOMAINS_PORT_9000_TCP_ADDR}:${environment.API_DOMAINS_PORT_9000_TCP_PORT}`;
};

export const teadsAuthHeader = (token: string) => {
  return {
    Authorization: `Bearer ${token}`,
    ...userAgent
  };
};

export const changeEntityUrl = (newEntityId: number) => {
  return `${environment.OAUTH_PORT_8081_SCHEME}://${environment.OAUTH_PORT_8081_TCP_ADDR}:${environment.OAUTH_PORT_8081_TCP_PORT}/oauth/context/${newEntityId}`;
};

export const oauthCreateProfileUrl = () =>
  `${environment.OAUTH_PORT_8081_SCHEME}://${environment.OAUTH_PORT_8081_TCP_ADDR}:${environment.OAUTH_PORT_8081_TCP_PORT}/profile/create?client_id=tam&response_type=token`;
