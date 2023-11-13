import * as grpc from '../../lib/rpc/api-domains_pb';
import {
  MsaTypeMapper,
  SeatMsaType, SeatStatusMapper,
  SeatType,
  SeatTypeMapper,
  ServiceLevel,
  ServiceLevelMapper
} from "~/api/seats/seat.mappers";

export class GetSeatInfo {
  readonly id: number;
  readonly entityId: number;
  readonly officeId: number;
  readonly seatType: SeatType;
  readonly name: string;
  readonly officeName: string;
  readonly serviceLevel: ServiceLevel;
  readonly msaType: SeatMsaType;
  readonly status: string;
  readonly fee: number;
  readonly createdAt: Date;
  readonly audit: Array<SeatAudit>;
  readonly statusFlags: SeatStatusFlags;
  readonly salesforceAccountId: string;
  readonly salesforceContractId: string;
  readonly salesforceSeatId: string;
  readonly buyerId: number;
  readonly canUseAccuracyLevels: boolean;
  readonly hasAgencyFeeAccess: boolean;
  readonly allowCustomAudienceThirdPartyData: boolean;
  readonly allowCustomAudienceAlticeUs: boolean;
  readonly canShareWithAdvertisers: boolean;
  readonly canSetMultiplePixels: boolean;
  readonly canUseCustomCreativesForPerf: boolean;
  readonly hasLumenAccess: boolean;
  readonly allowCustomAudienceSkp: boolean;
  readonly allowCustomAudienceCrossix: boolean;
  readonly allowCustomAudienceAlticeFr: boolean;
  readonly canUseRemarketingSegments: boolean;
  readonly canUseCpvBillingModel: boolean;
  readonly allowPlayerModeSelectionForBrandformance: boolean;
  readonly allowPlayerModeSelectionForBranding: boolean;

  constructor({
                id,
                entityId,
                officeId,
                seatType,
                name,
                officeName,
                serviceLevel,
                msaType,
                status,
                fee,
                createdAt,
                audit,
                statusFlags,
                salesforceAccountId,
                salesforceContractId,
                salesforceSeatId,
                buyerId,
                canUseAccuracyLevels,
                hasAgencyFeeAccess,
                allowCustomAudienceThirdPartyData,
                allowCustomAudienceAlticeUs,
                canShareWithAdvertisers,
                canSetMultiplePixels,
                canUseCustomCreativesForPerf,
                hasLumenAccess,
                allowCustomAudienceSkp,
                allowCustomAudienceCrossix,
                allowCustomAudienceAlticeFr,
                canUseRemarketingSegments,
                canUseCpvBillingModel,
                allowPlayerModeSelectionForBrandformance,
                allowPlayerModeSelectionForBranding
              }: {
    id: number;
    entityId: number;
    officeId: number;
    seatType: SeatType;
    name: string;
    officeName: string;
    serviceLevel: ServiceLevel;
    msaType: SeatMsaType;
    status: string;
    fee: number;
    createdAt: Date;
    audit: Array<SeatAudit>;
    statusFlags: SeatStatusFlags;
    salesforceAccountId: string;
    salesforceContractId: string;
    salesforceSeatId: string;
    buyerId: number;
    canUseAccuracyLevels: boolean;
    hasAgencyFeeAccess: boolean;
    allowCustomAudienceThirdPartyData: boolean;
    allowCustomAudienceAlticeUs: boolean;
    canShareWithAdvertisers: boolean;
    canSetMultiplePixels: boolean;
    canUseCustomCreativesForPerf: boolean;
    hasLumenAccess: boolean;
    allowCustomAudienceSkp: boolean;
    allowCustomAudienceCrossix: boolean;
    allowCustomAudienceAlticeFr: boolean;
    canUseRemarketingSegments: boolean;
    canUseCpvBillingModel: boolean;
    allowPlayerModeSelectionForBrandformance: boolean;
    allowPlayerModeSelectionForBranding: boolean;
  }) {
    this.id = id;
    this.entityId = entityId;
    this.officeId = officeId;
    this.seatType = seatType;
    this.name = name;
    this.officeName = officeName;
    this.serviceLevel = serviceLevel;
    this.msaType = msaType;
    this.status = status;
    this.fee = fee;
    this.createdAt = createdAt;
    this.audit = audit;
    this.statusFlags = statusFlags;
    this.salesforceAccountId = salesforceAccountId;
    this.salesforceContractId = salesforceContractId;
    this.salesforceSeatId = salesforceSeatId;
    this.buyerId = buyerId;
    this.canUseAccuracyLevels = canUseAccuracyLevels;
    this.hasAgencyFeeAccess = hasAgencyFeeAccess;
    this.allowCustomAudienceThirdPartyData = allowCustomAudienceThirdPartyData;
    this.allowCustomAudienceAlticeUs = allowCustomAudienceAlticeUs;
    this.canShareWithAdvertisers = canShareWithAdvertisers;
    this.canSetMultiplePixels = canSetMultiplePixels;
    this.canUseCustomCreativesForPerf = canUseCustomCreativesForPerf;
    this.hasLumenAccess = hasLumenAccess;
    this.allowCustomAudienceSkp = allowCustomAudienceSkp;
    this.allowCustomAudienceCrossix = allowCustomAudienceCrossix;
    this.allowCustomAudienceAlticeFr = allowCustomAudienceAlticeFr;
    this.canUseRemarketingSegments = canUseRemarketingSegments;
    this.canUseCpvBillingModel = canUseCpvBillingModel;
    this.allowPlayerModeSelectionForBrandformance =
        allowPlayerModeSelectionForBrandformance;
    this.allowPlayerModeSelectionForBranding =
        allowPlayerModeSelectionForBranding;
  }
}
export type SeatAudit = {

  id: number,
  profile: {
        id: number;
        email: string;
      },
  resourceName: string,
  oldValue: string,
  newValue: string,
  createdAt: Date
}

export class SeatStatusFlags {
  constructor(
    public clientMsa: string,
    public clientBillingDetails: string,
    public teadsFinanceApproval: string
  ) {}
}

export function GetSeatInfoMapper(row: grpc.teads.api.GetBuyerSeatResponse) {
  const audit: Array<SeatAudit> = row.historyItems.map((historyItem) => {
    return GetSeatAuditMapper(historyItem);
  });
  const createdAt = new Date(0);
  if (row.createdAt.seconds != null) {
    createdAt.setUTCSeconds(row.createdAt.seconds);
  }

  const buyerId =
      row.type === grpc.teads.api.BuyerSeatType.BUYER_SEAT_TYPE_AGENCY
          ? row.agencyId
          : row.advertiserId;

          return new GetSeatInfo({
            id: row.seatId.toNumber(),
            entityId: row.entityId.toNumber(),
            officeId: row.office.officeId.toNumber(),
            seatType: SeatTypeMapper[row.type],
            name: row.name,
            officeName: row.office.officeName,
            serviceLevel: ServiceLevelMapper[row.serviceLevel],
            msaType: MsaTypeMapper[row.msaType],
            status: SeatStatusMapper[row.status],
            fee: row.fee,
            createdAt: createdAt,
            audit: audit,
            statusFlags: new SeatStatusFlags(
              seatStatusFlagMapper(row.clientMsa),
              seatStatusFlagMapper(row.clientBillingDetails),
              seatStatusFlagMapper(row.teadsFinanceApproval)
            ),
            salesforceAccountId: row.salesforceId ?? null,
            salesforceContractId: row.contractId ?? null,
            salesforceSeatId: row.salesforceSeatId ?? null,
            buyerId: buyerId?.toNumber(),
            canUseAccuracyLevels: false,
            hasAgencyFeeAccess: false,
            allowCustomAudienceThirdPartyData: false,
            allowCustomAudienceAlticeUs: false,
            canShareWithAdvertisers: false,
            canSetMultiplePixels: false,
            canUseCustomCreativesForPerf: false,
            hasLumenAccess: false,
            allowCustomAudienceSkp: false,
            allowCustomAudienceCrossix: false,
            allowCustomAudienceAlticeFr: false,
            canUseRemarketingSegments: false,
            canUseCpvBillingModel: false,
            allowPlayerModeSelectionForBrandformance: false,
            allowPlayerModeSelectionForBranding: false
          });
}

export function GetSeatAuditMapper(
    row: grpc.teads.api.GetBuyerSeatResponse.ISeatHistoryItemInfo
) {
  const createdAt = new Date(0);
  if (row.createdAt.seconds != null) {
    createdAt.setUTCSeconds(row.createdAt.seconds);
  }

  return {
    rowId: row.id,
    profile: {
      id: row.profile.profileId,
      email: row.profile.email
    },
    resourceName: row.resourceName,
    oldValue: auditResourceValueMapper(row.resourceName, row.oldValue),
    newValue: auditResourceValueMapper(row.resourceName, row.newValue),
    createdAt: createdAt
  }
}

export function auditResourceValueMapper(
    resourceName: string,
    resourceValue: string
) {
  switch (resourceName) {
    case 'status':
      return SeatStatusMapper[resourceValue];
    default:
      return resourceValue;
  }
}

export function seatStatusFlagMapper(flag: grpc.teads.api.BuyerSeatStatusFlag) {
  switch (flag) {
    case grpc.teads.api.BuyerSeatStatusFlag.BUYER_SEAT_STATUS_FLAG_NOT_REQUIRED:
      return 'not_required';
    case grpc.teads.api.BuyerSeatStatusFlag.BUYER_SEAT_STATUS_FLAG_REQUIRED:
      return 'required';
    case grpc.teads.api.BuyerSeatStatusFlag.BUYER_SEAT_STATUS_FLAG_COMPLETED:
      return 'completed';
  }
}