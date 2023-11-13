import {
  AdvertisingSolutionIdModel,
  CampaignTargetPlatform
} from './types/Campaign';

const enumToRegex = <T extends { [k: string]: number | string }>(
  e: T
): string => Object.values(e).join('|');

export const salesforceOpportunityIdPattern = '006[a-zA-Z0-9]{12,15}';

export const advertisingSolutionIdPattern = enumToRegex(
  AdvertisingSolutionIdModel
);

export const targetPlatformsPattern = enumToRegex(CampaignTargetPlatform);
