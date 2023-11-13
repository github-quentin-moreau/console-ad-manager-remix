import TeadsGrpcClient from '@teads/grpc';
import { teads as AdManager } from './api-domains_pb';
import { apiDomainsUrl } from '~/environment-config/api-config';

export const createTeadsGrpcClient = () =>
  new TeadsGrpcClient({
    serviceName: 'api-domains',
    serviceAddress: apiDomainsUrl(),
    queryService: AdManager.api.QueryService,
    commandService: AdManager.api.CommandService
  });

export const buildSecurityContext = (
  profileId: number,
  entityId: number
): AdManager.api.ISecurityContext => {
  return {
    entityId: entityId,
    profileId: profileId
  };
};

export const buildAccountId = (
  profileId: number,
  entityId: number
): AdManager.api.GetAccountRequest.IAccountId => {
  return {
    entityId: entityId,
    profileId: profileId
  };
};
