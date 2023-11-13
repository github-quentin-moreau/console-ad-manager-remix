import { BillingModel } from './BillingModel';
import { AuctionType } from './AuctionType';
import { CreativeTypeFamily } from './CreativeTypeFamily';

export enum CampaignObjectiveModel {
  TRAFFIC_ACQUISITION = 'traffic_acquisition',
  BRANDING = 'branding',
  CONVERSIONS = 'conversions'
}

export enum AdvertisingSolutionIdModel {
  Awareness = 'awareness',
  TrafficAcquisitionMixed = 'ta_mixed',
  TrafficAcquisitionVisits = 'ta_visits',
  TrafficAcquisitionClicks = 'ta_clicks',
  WebsiteConversions = 'website_conversions',
  SeamlessCommerce = 'seamless_commerce'
}

export const getCampaignObjectiveForAdvertisingSolutionId = (
  advertisingSolutionId: AdvertisingSolutionIdModel
): CampaignObjectiveModel => {
  switch (advertisingSolutionId) {
    case AdvertisingSolutionIdModel.Awareness:
      return CampaignObjectiveModel.BRANDING;
    case AdvertisingSolutionIdModel.TrafficAcquisitionClicks:
    case AdvertisingSolutionIdModel.TrafficAcquisitionMixed:
    case AdvertisingSolutionIdModel.TrafficAcquisitionVisits:
    case AdvertisingSolutionIdModel.SeamlessCommerce:
      return CampaignObjectiveModel.TRAFFIC_ACQUISITION;
    case AdvertisingSolutionIdModel.WebsiteConversions:
      return CampaignObjectiveModel.CONVERSIONS;
    default:
      throw new Error(
        `getObjectiveForAdvertisingSolutionId failed with advertisingSolutionId:${advertisingSolutionId}`
      );
  }
};

export const getUpperFunnelAdvertisingSolutionIds = (
  advertisingSolutionIds: AdvertisingSolutionIdModel[]
): AdvertisingSolutionIdModel[] => {
  return advertisingSolutionIds.filter((id) =>
    [AdvertisingSolutionIdModel.Awareness].includes(id)
  );
};
export const getMiddleFunnelAdvertisingSolutionIds = (
  advertisingSolutionIds: AdvertisingSolutionIdModel[]
): AdvertisingSolutionIdModel[] => {
  return advertisingSolutionIds.filter((id) =>
    [
      AdvertisingSolutionIdModel.TrafficAcquisitionClicks,
      AdvertisingSolutionIdModel.TrafficAcquisitionVisits,
      AdvertisingSolutionIdModel.TrafficAcquisitionMixed,
      AdvertisingSolutionIdModel.SeamlessCommerce
    ].includes(id)
  );
};
export const getLowerFunnelAdvertisingSolutionIds = (
  advertisingSolutionIds: AdvertisingSolutionIdModel[]
): AdvertisingSolutionIdModel[] => {
  return advertisingSolutionIds.filter((id) =>
    [AdvertisingSolutionIdModel.WebsiteConversions].includes(id)
  );
};

export enum CampaignTargetPlatform {
  TAM = 'TAM',
  MANAGER = 'Manager'
}

export type CampaignId = number;

export type ExistingCampaign = {
  campaignId: number;
  campaignName: string;
  officeId: number;
  officeName?: string | null;
  seatId?: number | null;
  seatName: string;
  objective: CampaignObjectiveModel;
  accessLevel: CampaignAccessLevel;
  details?: CampaignDetails;
  isCreatedBySalesforce?: boolean;
  advertisingSolutionId: AdvertisingSolutionIdModel;
};

export type CampaignDetails = {
  startDate: number;
  endDate: number;
  ioLines: IOLines[];
  budget: number;
  freeBudget: number;
  isMoatUnsampled: boolean;
};

export type IOLines = {
  name: string;
  budget: number;
  freeBudget: number;
  startDate: number;
  endDate: number;
  opportunityLineItemId: string;
  billingModel?: BillingModel;
  billingModelRate?: number;
  billingEvent?: string;
  auctionType?: AuctionType;
  creativeTypeFamily?: CreativeTypeFamily;
  isGuaranteed?: boolean;
};

export enum CampaignAccessLevel {
  NONE = 'NONE',
  VIEW = 'VIEW',
  MANAGE = 'MANAGE'
}

export enum SyncStatus {
  NEW = 'NEW',
  OUT_OF_DATE = 'OUT_OF_DATE',
  UP_TO_DATE = 'UP_TO_DATE',
  UNKNOWN = 'UNKNOWN'
}
