import { CampaignObjectiveModel, CampaignId } from './Campaign';

export type CreateCampaignSkeletonResponse = {
  objective: CampaignObjectiveModel;
  campaignId: CampaignId;
  opportunityLineItemIds: string[];
};
