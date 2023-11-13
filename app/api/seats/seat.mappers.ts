import * as grpc from '../../lib/rpc/api-domains_pb';
import { FeatureSettings } from '~/shared/types/FeatureSettings';

import { SeatType } from '~/shared/types/Seat';

export enum ServiceLevel {
  IO = 'io',
  MANAGED = 'managed',
  SELF_SERVED = 'self-served',
  INTERNAL = 'internal',
  CLIENT = 'client'
}

export enum SeatStatus {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
  PENDING_CLIENT_INPUT = 'pending_client_input',
  PENDING_TEADS_INPUT = 'pending_teads_input'
}

export { SeatType };

export enum ClientType {
  AGENCY = 'agency',
  ADVERTISER = 'advertiser'
}
export enum SeatMsaType {
  PAPER = 'paper',
  DIGITAL = 'digital'
}

export function msaTypeFromString(msa: SeatMsaType): grpc.teads.api.MsaType {
  switch (msa) {
    case SeatMsaType.DIGITAL:
      return grpc.teads.api.MsaType.MSA_TYPE_DIGITAL;
    case SeatMsaType.PAPER:
      return grpc.teads.api.MsaType.MSA_TYPE_PAPER;
  }
}

export const ServiceLevelMapper = {
  [grpc.teads.api.BuyerServiceLevel.BUYER_SERVICE_LEVEL_IO]: ServiceLevel.IO,
  [grpc.teads.api.BuyerServiceLevel.BUYER_SERVICE_LEVEL_MANAGED]:
    ServiceLevel.MANAGED,
  [grpc.teads.api.BuyerServiceLevel.BUYER_SERVICE_LEVEL_SELF_SERVED]:
    ServiceLevel.SELF_SERVED,
  [grpc.teads.api.BuyerServiceLevel.BUYER_SERVICE_LEVEL_INTERNAL]:
    ServiceLevel.INTERNAL,
  [grpc.teads.api.BuyerServiceLevel.BUYER_SERVICE_LEVEL_CLIENT]:
    ServiceLevel.CLIENT
};

export const ServiceLevel2BuyerServiceLevel = {
  [ServiceLevel.IO]: grpc.teads.api.BuyerServiceLevel.BUYER_SERVICE_LEVEL_IO,
  [ServiceLevel.MANAGED]:
    grpc.teads.api.BuyerServiceLevel.BUYER_SERVICE_LEVEL_MANAGED,
  [ServiceLevel.SELF_SERVED]:
    grpc.teads.api.BuyerServiceLevel.BUYER_SERVICE_LEVEL_SELF_SERVED,
  [ServiceLevel.INTERNAL]:
    grpc.teads.api.BuyerServiceLevel.BUYER_SERVICE_LEVEL_INTERNAL,
  [ServiceLevel.CLIENT]:
    grpc.teads.api.BuyerServiceLevel.BUYER_SERVICE_LEVEL_CLIENT
};

export const SeatStatusMapper = {
  [grpc.teads.api.BuyerSeatStatus.BUYER_SEAT_STATUS_ENABLED]:
    SeatStatus.ENABLED,
  [grpc.teads.api.BuyerSeatStatus.BUYER_SEAT_STATUS_DISABLED]:
    SeatStatus.DISABLED,
  [grpc.teads.api.BuyerSeatStatus.BUYER_SEAT_STATUS_PENDING_CLIENT_INPUT]:
    SeatStatus.PENDING_CLIENT_INPUT,
  [grpc.teads.api.BuyerSeatStatus.BUYER_SEAT_STATUS_PENDING_TEADS_INPUT]:
    SeatStatus.PENDING_TEADS_INPUT
};

export const SeatStatus2BuyerSeatStatus = {
  [SeatStatus.ENABLED]:
    grpc.teads.api.BuyerSeatStatus.BUYER_SEAT_STATUS_ENABLED,
  [SeatStatus.DISABLED]:
    grpc.teads.api.BuyerSeatStatus.BUYER_SEAT_STATUS_DISABLED,
  [SeatStatus.PENDING_CLIENT_INPUT]:
    grpc.teads.api.BuyerSeatStatus.BUYER_SEAT_STATUS_PENDING_CLIENT_INPUT,
  [SeatStatus.PENDING_TEADS_INPUT]:
    grpc.teads.api.BuyerSeatStatus.BUYER_SEAT_STATUS_PENDING_TEADS_INPUT
};

export const SeatTypeMapper = {
  [grpc.teads.api.BuyerSeatType.BUYER_SEAT_TYPE_AGENCY]: SeatType.AGENCY,
  [grpc.teads.api.BuyerSeatType.BUYER_SEAT_TYPE_ADVERTISER]: SeatType.ADVERTISER
};

export const MsaTypeMapper = {
  [grpc.teads.api.MsaType.MSA_TYPE_PAPER]: SeatMsaType.PAPER,
  [grpc.teads.api.MsaType.MSA_TYPE_DIGITAL]: SeatMsaType.DIGITAL
};

export const ClientTypeMapper = {
  [grpc.teads.api.BuyerSeatType.BUYER_SEAT_TYPE_AGENCY]: ClientType.AGENCY,
  [grpc.teads.api.BuyerSeatType.BUYER_SEAT_TYPE_ADVERTISER]:
    ClientType.ADVERTISER
};

export function seatFeatureFromString(
  feature: FeatureSettings
): grpc.teads.api.SeatFeature {
  switch (feature) {
    case FeatureSettings.ACCURACY_LEVELS:
      return grpc.teads.api.SeatFeature.SEAT_FEATURE_ACCURACY_LEVELS;
    case FeatureSettings.AGENCY_FEE:
      return grpc.teads.api.SeatFeature.SEAT_FEATURE_AGENCY_FEE;
    case FeatureSettings.ALLOW_CUSTOM_AUDIENCE_ALTICE_US:
      return grpc.teads.api.SeatFeature.SEAT_FEATURE_CUSTOM_AUDIENCE_ALTICE_US;
    case FeatureSettings.CAN_USE_REMARKETING_SEGMENTS:
      return grpc.teads.api.SeatFeature
        .SEAT_FEATURE_REMARKETING_SEGMENTATION_ACCESS;
    case FeatureSettings.CAN_SET_MULTIPLE_PIXELS:
      return grpc.teads.api.SeatFeature.SEAT_FEATURE_MULTIPLE_PIXELS;
    case FeatureSettings.CAN_SHARE_WITH_ADVERTISERS:
      return grpc.teads.api.SeatFeature.SEAT_FEATURE_SHARE_WITH_ADVERTISERS;
    case FeatureSettings.CAN_USE_CUSTOM_CREATIVES_FOR_PERF:
      return grpc.teads.api.SeatFeature
        .SEAT_FEATURE_CUSTOM_CREATIVES_FOR_PERFORMANCE;
    case FeatureSettings.HAS_LUMEN_ACCESS:
      return grpc.teads.api.SeatFeature.SEAT_FEATURE_LUMEN;
    case FeatureSettings.ALLOW_CUSTOM_AUDIENCE_THIRD_PARTY_DATA:
      return grpc.teads.api.SeatFeature
        .SEAT_FEATURE_CUSTOM_AUDIENCE_THIRD_PARTY_DATA_ACCESS;
    case FeatureSettings.ALLOW_CUSTOM_AUDIENCE_SKP:
      return grpc.teads.api.SeatFeature.SEAT_FEATURE_CUSTOM_AUDIENCE_SKP;
    case FeatureSettings.ALLOW_CUSTOM_AUDIENCE_CROSSIX:
      return grpc.teads.api.SeatFeature.SEAT_FEATURE_CUSTOM_AUDIENCE_CROSSIX;
    case FeatureSettings.ALLOW_CUSTOM_AUDIENCE_ALTICE_FR:
      return grpc.teads.api.SeatFeature.SEAT_FEATURE_CUSTOM_AUDIENCE_ALTICE_FR;
    case FeatureSettings.CAN_USE_CPV_BILLING_MODEL:
      return grpc.teads.api.SeatFeature.SEAT_FEATURE_CPV;
    case FeatureSettings.ALLOW_PLAYER_MODE_SELECTION_FOR_BRANDFORMANCE:
      return grpc.teads.api.SeatFeature
        .SEAT_FEATURE_PLAYER_MODE_SELECTION_FOR_BRANDFORMANCE;
    case FeatureSettings.ALLOW_PLAYER_MODE_SELECTION_FOR_BRANDING:
      return grpc.teads.api.SeatFeature
        .SEAT_FEATURE_PLAYER_MODE_SELECTION_FOR_BRANDING;
  }
}
