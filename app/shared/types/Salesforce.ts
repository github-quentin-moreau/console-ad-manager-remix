import {
  AdvertisingSolutionIdModel,
  CampaignObjectiveModel,
  SyncStatus
} from './Campaign';
import { BillingModel } from './BillingModel';
import { AuctionType } from './AuctionType';
import { CreativeTypeFamily } from './CreativeTypeFamily';
import { OpportunityVersion } from './OpportunityVersion';

export type SalesforceOpportunityId = `006${string}`;
export type SalesforceOpportunityLineItemId = `00k${string}`;

export type SalesforceOpportunityLineItem = {
  id: SalesforceOpportunityLineItemId;
  name: string;
  objective: CampaignObjectiveModel;
  budget: number;
  freeBudget: number;
  startDate: number;
  endDate: number;
  salesforceGeo: string;
  salesforceCreatives?: string;
  billingModel?: BillingModel;
  billingModelRate?: number;
  billingEvent?: string;
  auctionType?: AuctionType;
  creativeTypeFamily?: CreativeTypeFamily;
  isGuaranteed?: boolean;
  advertisingSolutionId: AdvertisingSolutionIdModel;
};

// export enum SyncStatus {
//   NO_UPDATE = 'noUpdate',
//   TO_ADD = 'toAdd',
//   TO_UPDATE = 'toUpdate'
// }

export type Sortable<S> = {
  sortValue: S;
};

export type HydratedSalesforceOpportunityLineItemWithSyncStatus =
  SalesforceOpportunityLineItem & Sortable<SyncStatus>;

export type SalesforceOpportunity = {
  id: SalesforceOpportunityId;
  name: string;
  startDate: number;
  endDate: number;
  budget: number;
  freeBudget: number;
  officeName: string;
  lineItems: SalesforceOpportunityLineItem[];
  currency: string;
  timezone: string;
  advertiserId?: number;
  advertiserName?: string;
  agencyName?: string;
  isMoatUnsampled: boolean;
  version: OpportunityVersion;
};

export type SalesforceOpportunityLineItemSkeletonCreated = {
  id: SalesforceOpportunityLineItemId;
  campaignId: number;
};
