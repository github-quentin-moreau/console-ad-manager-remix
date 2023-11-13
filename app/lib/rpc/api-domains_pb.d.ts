import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace teads {

    namespace api {

        interface IAcknowledgeCampaignSkeletonCreationToSalesforceRequest {
            securityContext: teads.api.ISecurityContext;
            profileId: number;
            opportunityId: string;
            opportunityLineItems?: (teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest.ISalesforceOpportunityLineItem[]|null);
        }

        class AcknowledgeCampaignSkeletonCreationToSalesforceRequest implements IAcknowledgeCampaignSkeletonCreationToSalesforceRequest {
            constructor(properties?: teads.api.IAcknowledgeCampaignSkeletonCreationToSalesforceRequest);
            public securityContext: teads.api.ISecurityContext;
            public profileId: number;
            public opportunityId: string;
            public opportunityLineItems: teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest.ISalesforceOpportunityLineItem[];
            public static create(properties?: teads.api.IAcknowledgeCampaignSkeletonCreationToSalesforceRequest): teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest;
            public static encode(message: teads.api.IAcknowledgeCampaignSkeletonCreationToSalesforceRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IAcknowledgeCampaignSkeletonCreationToSalesforceRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest;
            public static toObject(message: teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace AcknowledgeCampaignSkeletonCreationToSalesforceRequest {

            interface ISalesforceOpportunityLineItem {
                id: string;
                campaignId: number;
            }

            class SalesforceOpportunityLineItem implements ISalesforceOpportunityLineItem {
                constructor(properties?: teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest.ISalesforceOpportunityLineItem);
                public id: string;
                public campaignId: number;
                public static create(properties?: teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest.ISalesforceOpportunityLineItem): teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest.SalesforceOpportunityLineItem;
                public static encode(message: teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest.ISalesforceOpportunityLineItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest.ISalesforceOpportunityLineItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest.SalesforceOpportunityLineItem;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest.SalesforceOpportunityLineItem;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest.SalesforceOpportunityLineItem;
                public static toObject(message: teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceRequest.SalesforceOpportunityLineItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IAcknowledgeCampaignSkeletonCreationToSalesforceResponse {
        }

        class AcknowledgeCampaignSkeletonCreationToSalesforceResponse implements IAcknowledgeCampaignSkeletonCreationToSalesforceResponse {
            constructor(properties?: teads.api.IAcknowledgeCampaignSkeletonCreationToSalesforceResponse);
            public static create(properties?: teads.api.IAcknowledgeCampaignSkeletonCreationToSalesforceResponse): teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceResponse;
            public static encode(message: teads.api.IAcknowledgeCampaignSkeletonCreationToSalesforceResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IAcknowledgeCampaignSkeletonCreationToSalesforceResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceResponse;
            public static toObject(message: teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IActivateFeatureForSeatRequest {
            securityContext: teads.api.ISecurityContext;
            seatId: number;
            seatFeature: teads.api.SeatFeature;
        }

        class ActivateFeatureForSeatRequest implements IActivateFeatureForSeatRequest {
            constructor(properties?: teads.api.IActivateFeatureForSeatRequest);
            public securityContext: teads.api.ISecurityContext;
            public seatId: number;
            public seatFeature: teads.api.SeatFeature;
            public static create(properties?: teads.api.IActivateFeatureForSeatRequest): teads.api.ActivateFeatureForSeatRequest;
            public static encode(message: teads.api.IActivateFeatureForSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IActivateFeatureForSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.ActivateFeatureForSeatRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.ActivateFeatureForSeatRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.ActivateFeatureForSeatRequest;
            public static toObject(message: teads.api.ActivateFeatureForSeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IActivateFeatureForSeatResponse {
        }

        class ActivateFeatureForSeatResponse implements IActivateFeatureForSeatResponse {
            constructor(properties?: teads.api.IActivateFeatureForSeatResponse);
            public static create(properties?: teads.api.IActivateFeatureForSeatResponse): teads.api.ActivateFeatureForSeatResponse;
            public static encode(message: teads.api.IActivateFeatureForSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IActivateFeatureForSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.ActivateFeatureForSeatResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.ActivateFeatureForSeatResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.ActivateFeatureForSeatResponse;
            public static toObject(message: teads.api.ActivateFeatureForSeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IAddFirstPartySegmentToWhitelistForSeatRequest {
            securityContext: teads.api.ISecurityContext;
            segment: teads.api.AddFirstPartySegmentToWhitelistForSeatRequest.IAdvertiserFirstPartySegment;
            entityId: number;
        }

        class AddFirstPartySegmentToWhitelistForSeatRequest implements IAddFirstPartySegmentToWhitelistForSeatRequest {
            constructor(properties?: teads.api.IAddFirstPartySegmentToWhitelistForSeatRequest);
            public securityContext: teads.api.ISecurityContext;
            public segment: teads.api.AddFirstPartySegmentToWhitelistForSeatRequest.IAdvertiserFirstPartySegment;
            public entityId: number;
            public static create(properties?: teads.api.IAddFirstPartySegmentToWhitelistForSeatRequest): teads.api.AddFirstPartySegmentToWhitelistForSeatRequest;
            public static encode(message: teads.api.IAddFirstPartySegmentToWhitelistForSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IAddFirstPartySegmentToWhitelistForSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.AddFirstPartySegmentToWhitelistForSeatRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.AddFirstPartySegmentToWhitelistForSeatRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.AddFirstPartySegmentToWhitelistForSeatRequest;
            public static toObject(message: teads.api.AddFirstPartySegmentToWhitelistForSeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace AddFirstPartySegmentToWhitelistForSeatRequest {

            interface IAdvertiserFirstPartySegment {
                segmentProvider: teads.api.AdvertiserFirstPartySegmentProvider;
                providerSegmentId: number;
            }

            class AdvertiserFirstPartySegment implements IAdvertiserFirstPartySegment {
                constructor(properties?: teads.api.AddFirstPartySegmentToWhitelistForSeatRequest.IAdvertiserFirstPartySegment);
                public segmentProvider: teads.api.AdvertiserFirstPartySegmentProvider;
                public providerSegmentId: number;
                public static create(properties?: teads.api.AddFirstPartySegmentToWhitelistForSeatRequest.IAdvertiserFirstPartySegment): teads.api.AddFirstPartySegmentToWhitelistForSeatRequest.AdvertiserFirstPartySegment;
                public static encode(message: teads.api.AddFirstPartySegmentToWhitelistForSeatRequest.IAdvertiserFirstPartySegment, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.AddFirstPartySegmentToWhitelistForSeatRequest.IAdvertiserFirstPartySegment, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.AddFirstPartySegmentToWhitelistForSeatRequest.AdvertiserFirstPartySegment;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.AddFirstPartySegmentToWhitelistForSeatRequest.AdvertiserFirstPartySegment;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.AddFirstPartySegmentToWhitelistForSeatRequest.AdvertiserFirstPartySegment;
                public static toObject(message: teads.api.AddFirstPartySegmentToWhitelistForSeatRequest.AdvertiserFirstPartySegment, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IAddFirstPartySegmentToWhitelistForSeatResponse {
        }

        class AddFirstPartySegmentToWhitelistForSeatResponse implements IAddFirstPartySegmentToWhitelistForSeatResponse {
            constructor(properties?: teads.api.IAddFirstPartySegmentToWhitelistForSeatResponse);
            public static create(properties?: teads.api.IAddFirstPartySegmentToWhitelistForSeatResponse): teads.api.AddFirstPartySegmentToWhitelistForSeatResponse;
            public static encode(message: teads.api.IAddFirstPartySegmentToWhitelistForSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IAddFirstPartySegmentToWhitelistForSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.AddFirstPartySegmentToWhitelistForSeatResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.AddFirstPartySegmentToWhitelistForSeatResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.AddFirstPartySegmentToWhitelistForSeatResponse;
            public static toObject(message: teads.api.AddFirstPartySegmentToWhitelistForSeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest {
            securityContext: teads.api.ISecurityContext;
            buyerSeatId: number;
            segmentCode: string;
        }

        class AddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest implements IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest {
            constructor(properties?: teads.api.IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest);
            public securityContext: teads.api.ISecurityContext;
            public buyerSeatId: number;
            public segmentCode: string;
            public static create(properties?: teads.api.IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest): teads.api.AddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest;
            public static encode(message: teads.api.IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.AddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.AddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.AddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest;
            public static toObject(message: teads.api.AddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse {
        }

        class AddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse implements IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse {
            constructor(properties?: teads.api.IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse);
            public static create(properties?: teads.api.IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse): teads.api.AddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse;
            public static encode(message: teads.api.IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.AddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.AddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.AddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse;
            public static toObject(message: teads.api.AddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICanAccountEditCampaignRequest {
            securityContext: teads.api.ISecurityContext;
            campaignId: number;
            account: teads.api.CanAccountEditCampaignRequest.IAccount;
        }

        class CanAccountEditCampaignRequest implements ICanAccountEditCampaignRequest {
            constructor(properties?: teads.api.ICanAccountEditCampaignRequest);
            public securityContext: teads.api.ISecurityContext;
            public campaignId: number;
            public account: teads.api.CanAccountEditCampaignRequest.IAccount;
            public static create(properties?: teads.api.ICanAccountEditCampaignRequest): teads.api.CanAccountEditCampaignRequest;
            public static encode(message: teads.api.ICanAccountEditCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICanAccountEditCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CanAccountEditCampaignRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CanAccountEditCampaignRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CanAccountEditCampaignRequest;
            public static toObject(message: teads.api.CanAccountEditCampaignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace CanAccountEditCampaignRequest {

            interface IAccount {
                entityId: number;
                profileId: number;
            }

            class Account implements IAccount {
                constructor(properties?: teads.api.CanAccountEditCampaignRequest.IAccount);
                public entityId: number;
                public profileId: number;
                public static create(properties?: teads.api.CanAccountEditCampaignRequest.IAccount): teads.api.CanAccountEditCampaignRequest.Account;
                public static encode(message: teads.api.CanAccountEditCampaignRequest.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.CanAccountEditCampaignRequest.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CanAccountEditCampaignRequest.Account;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CanAccountEditCampaignRequest.Account;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.CanAccountEditCampaignRequest.Account;
                public static toObject(message: teads.api.CanAccountEditCampaignRequest.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface ICanAccountEditCampaignResponse {
            canEdit: boolean;
        }

        class CanAccountEditCampaignResponse implements ICanAccountEditCampaignResponse {
            constructor(properties?: teads.api.ICanAccountEditCampaignResponse);
            public canEdit: boolean;
            public static create(properties?: teads.api.ICanAccountEditCampaignResponse): teads.api.CanAccountEditCampaignResponse;
            public static encode(message: teads.api.ICanAccountEditCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICanAccountEditCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CanAccountEditCampaignResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CanAccountEditCampaignResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CanAccountEditCampaignResponse;
            public static toObject(message: teads.api.CanAccountEditCampaignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateBuyerEntityRequest {
            securityContext: teads.api.ISecurityContext;
            officeId: number;
            agencyId?: (number|null);
            advertiserId?: (number|null);
            entityName?: (string|null);
        }

        class CreateBuyerEntityRequest implements ICreateBuyerEntityRequest {
            constructor(properties?: teads.api.ICreateBuyerEntityRequest);
            public securityContext: teads.api.ISecurityContext;
            public officeId: number;
            public agencyId?: (number|null);
            public advertiserId?: (number|null);
            public entityName: string;
            public buyerId?: ("agencyId"|"advertiserId");
            public static create(properties?: teads.api.ICreateBuyerEntityRequest): teads.api.CreateBuyerEntityRequest;
            public static encode(message: teads.api.ICreateBuyerEntityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateBuyerEntityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateBuyerEntityRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateBuyerEntityRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateBuyerEntityRequest;
            public static toObject(message: teads.api.CreateBuyerEntityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateBuyerEntityResponse {
            entityId: number;
        }

        class CreateBuyerEntityResponse implements ICreateBuyerEntityResponse {
            constructor(properties?: teads.api.ICreateBuyerEntityResponse);
            public entityId: number;
            public static create(properties?: teads.api.ICreateBuyerEntityResponse): teads.api.CreateBuyerEntityResponse;
            public static encode(message: teads.api.ICreateBuyerEntityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateBuyerEntityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateBuyerEntityResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateBuyerEntityResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateBuyerEntityResponse;
            public static toObject(message: teads.api.CreateBuyerEntityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateCampaignSkeletonsFromSalesforceOpportunityRequest {
            securityContext: teads.api.ISecurityContext;
            salesforceOpportunityId: string;
            campaignObjectives?: (teads.api.CampaignObjective[]|null);
            seatEntityId: number;
            profileId: number;
            managerCompatibilityMode?: (boolean|null);
            advertisingSolutionIds?: (teads.api.AdvertisingSolutionId[]|null);
        }

        class CreateCampaignSkeletonsFromSalesforceOpportunityRequest implements ICreateCampaignSkeletonsFromSalesforceOpportunityRequest {
            constructor(properties?: teads.api.ICreateCampaignSkeletonsFromSalesforceOpportunityRequest);
            public securityContext: teads.api.ISecurityContext;
            public salesforceOpportunityId: string;
            public campaignObjectives: teads.api.CampaignObjective[];
            public seatEntityId: number;
            public profileId: number;
            public managerCompatibilityMode: boolean;
            public advertisingSolutionIds: teads.api.AdvertisingSolutionId[];
            public static create(properties?: teads.api.ICreateCampaignSkeletonsFromSalesforceOpportunityRequest): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityRequest;
            public static encode(message: teads.api.ICreateCampaignSkeletonsFromSalesforceOpportunityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateCampaignSkeletonsFromSalesforceOpportunityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityRequest;
            public static toObject(message: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateCampaignSkeletonsFromSalesforceOpportunityResponse {
            createdCampaigns?: (teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.ICreatedCampaign[]|null);
        }

        class CreateCampaignSkeletonsFromSalesforceOpportunityResponse implements ICreateCampaignSkeletonsFromSalesforceOpportunityResponse {
            constructor(properties?: teads.api.ICreateCampaignSkeletonsFromSalesforceOpportunityResponse);
            public createdCampaigns: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.ICreatedCampaign[];
            public static create(properties?: teads.api.ICreateCampaignSkeletonsFromSalesforceOpportunityResponse): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse;
            public static encode(message: teads.api.ICreateCampaignSkeletonsFromSalesforceOpportunityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateCampaignSkeletonsFromSalesforceOpportunityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse;
            public static toObject(message: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace CreateCampaignSkeletonsFromSalesforceOpportunityResponse {

            interface ICreatedCampaign {
                campaignObjective: teads.api.CampaignObjective;
                campaignId: number;
                lineItemDetails?: (teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.ILineItemDetail[]|null);
            }

            class CreatedCampaign implements ICreatedCampaign {
                constructor(properties?: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.ICreatedCampaign);
                public campaignObjective: teads.api.CampaignObjective;
                public campaignId: number;
                public lineItemDetails: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.ILineItemDetail[];
                public static create(properties?: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.ICreatedCampaign): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.CreatedCampaign;
                public static encode(message: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.ICreatedCampaign, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.ICreatedCampaign, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.CreatedCampaign;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.CreatedCampaign;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.CreatedCampaign;
                public static toObject(message: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.CreatedCampaign, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface ILineItemDetail {
                id: string;
            }

            class LineItemDetail implements ILineItemDetail {
                constructor(properties?: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.ILineItemDetail);
                public id: string;
                public static create(properties?: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.ILineItemDetail): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.LineItemDetail;
                public static encode(message: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.ILineItemDetail, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.ILineItemDetail, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.LineItemDetail;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.LineItemDetail;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.LineItemDetail;
                public static toObject(message: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse.LineItemDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface ICreateClientSeatForBuyerRequest {
            securityContext: teads.api.ISecurityContext;
            officeId: number;
            entityId: number;
            agencyId?: (number|null);
            advertiserId?: (number|null);
            seatName: string;
            fee: number;
            salesforceContractId: string;
            clientEmails?: (string[]|null);
            salesforceSeatId: string;
            salesforceContractVersion: number;
        }

        class CreateClientSeatForBuyerRequest implements ICreateClientSeatForBuyerRequest {
            constructor(properties?: teads.api.ICreateClientSeatForBuyerRequest);
            public securityContext: teads.api.ISecurityContext;
            public officeId: number;
            public entityId: number;
            public agencyId?: (number|null);
            public advertiserId?: (number|null);
            public seatName: string;
            public fee: number;
            public salesforceContractId: string;
            public clientEmails: string[];
            public salesforceSeatId: string;
            public salesforceContractVersion: number;
            public buyerId?: ("agencyId"|"advertiserId");
            public static create(properties?: teads.api.ICreateClientSeatForBuyerRequest): teads.api.CreateClientSeatForBuyerRequest;
            public static encode(message: teads.api.ICreateClientSeatForBuyerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateClientSeatForBuyerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateClientSeatForBuyerRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateClientSeatForBuyerRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateClientSeatForBuyerRequest;
            public static toObject(message: teads.api.CreateClientSeatForBuyerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateClientSeatForBuyerResponse {
            seatId: number;
        }

        class CreateClientSeatForBuyerResponse implements ICreateClientSeatForBuyerResponse {
            constructor(properties?: teads.api.ICreateClientSeatForBuyerResponse);
            public seatId: number;
            public static create(properties?: teads.api.ICreateClientSeatForBuyerResponse): teads.api.CreateClientSeatForBuyerResponse;
            public static encode(message: teads.api.ICreateClientSeatForBuyerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateClientSeatForBuyerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateClientSeatForBuyerResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateClientSeatForBuyerResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateClientSeatForBuyerResponse;
            public static toObject(message: teads.api.CreateClientSeatForBuyerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateCustomTargetingRuleForCampaignRequest {
            securityContext: teads.api.ISecurityContext;
            campaignId: number;
            name: string;
            tblString: string;
            demographicAudiencesDeliveryType: teads.api.CustomTargetingRuleAudiencesDeliveryType;
            otherAudiencesAccuracyLevel: teads.api.CustomTargetingRuleAudiencesAccuracyLevel;
            cookielessCriteriaOnly: boolean;
            description: string;
            reasonId: number;
            channel?: (teads.api.CustomTargetingEnvironmentChannel|null);
        }

        class CreateCustomTargetingRuleForCampaignRequest implements ICreateCustomTargetingRuleForCampaignRequest {
            constructor(properties?: teads.api.ICreateCustomTargetingRuleForCampaignRequest);
            public securityContext: teads.api.ISecurityContext;
            public campaignId: number;
            public name: string;
            public tblString: string;
            public demographicAudiencesDeliveryType: teads.api.CustomTargetingRuleAudiencesDeliveryType;
            public otherAudiencesAccuracyLevel: teads.api.CustomTargetingRuleAudiencesAccuracyLevel;
            public cookielessCriteriaOnly: boolean;
            public description: string;
            public reasonId: number;
            public channel: teads.api.CustomTargetingEnvironmentChannel;
            public static create(properties?: teads.api.ICreateCustomTargetingRuleForCampaignRequest): teads.api.CreateCustomTargetingRuleForCampaignRequest;
            public static encode(message: teads.api.ICreateCustomTargetingRuleForCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateCustomTargetingRuleForCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateCustomTargetingRuleForCampaignRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateCustomTargetingRuleForCampaignRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateCustomTargetingRuleForCampaignRequest;
            public static toObject(message: teads.api.CreateCustomTargetingRuleForCampaignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateCustomTargetingRuleForCampaignResponse {
            ruleId: number;
        }

        class CreateCustomTargetingRuleForCampaignResponse implements ICreateCustomTargetingRuleForCampaignResponse {
            constructor(properties?: teads.api.ICreateCustomTargetingRuleForCampaignResponse);
            public ruleId: number;
            public static create(properties?: teads.api.ICreateCustomTargetingRuleForCampaignResponse): teads.api.CreateCustomTargetingRuleForCampaignResponse;
            public static encode(message: teads.api.ICreateCustomTargetingRuleForCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateCustomTargetingRuleForCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateCustomTargetingRuleForCampaignResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateCustomTargetingRuleForCampaignResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateCustomTargetingRuleForCampaignResponse;
            public static toObject(message: teads.api.CreateCustomTargetingRuleForCampaignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateInternalSeatForBuyerRequest {
            securityContext: teads.api.ISecurityContext;
            officeId: number;
            entityId: number;
            agencyId?: (number|null);
            advertiserId?: (number|null);
            seatName: string;
            fee: number;
            multipleSeatsReason?: (string|null);
        }

        class CreateInternalSeatForBuyerRequest implements ICreateInternalSeatForBuyerRequest {
            constructor(properties?: teads.api.ICreateInternalSeatForBuyerRequest);
            public securityContext: teads.api.ISecurityContext;
            public officeId: number;
            public entityId: number;
            public agencyId?: (number|null);
            public advertiserId?: (number|null);
            public seatName: string;
            public fee: number;
            public multipleSeatsReason: string;
            public buyerId?: ("agencyId"|"advertiserId");
            public static create(properties?: teads.api.ICreateInternalSeatForBuyerRequest): teads.api.CreateInternalSeatForBuyerRequest;
            public static encode(message: teads.api.ICreateInternalSeatForBuyerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateInternalSeatForBuyerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateInternalSeatForBuyerRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateInternalSeatForBuyerRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateInternalSeatForBuyerRequest;
            public static toObject(message: teads.api.CreateInternalSeatForBuyerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateInternalSeatForBuyerResponse {
            seatId: number;
        }

        class CreateInternalSeatForBuyerResponse implements ICreateInternalSeatForBuyerResponse {
            constructor(properties?: teads.api.ICreateInternalSeatForBuyerResponse);
            public seatId: number;
            public static create(properties?: teads.api.ICreateInternalSeatForBuyerResponse): teads.api.CreateInternalSeatForBuyerResponse;
            public static encode(message: teads.api.ICreateInternalSeatForBuyerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateInternalSeatForBuyerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateInternalSeatForBuyerResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateInternalSeatForBuyerResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateInternalSeatForBuyerResponse;
            public static toObject(message: teads.api.CreateInternalSeatForBuyerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateIoBuyerSeatForEntityRequest {
            securityContext: teads.api.ISecurityContext;
            officeId: number;
            entityId: number;
            agencyId?: (number|null);
            advertiserId?: (number|null);
            canSetMultiplePixels?: (boolean|null);
            fee?: (number|null);
            seatName?: (string|null);
            multipleSeatsReason?: (string|null);
        }

        class CreateIoBuyerSeatForEntityRequest implements ICreateIoBuyerSeatForEntityRequest {
            constructor(properties?: teads.api.ICreateIoBuyerSeatForEntityRequest);
            public securityContext: teads.api.ISecurityContext;
            public officeId: number;
            public entityId: number;
            public agencyId?: (number|null);
            public advertiserId?: (number|null);
            public canSetMultiplePixels: boolean;
            public fee: number;
            public seatName: string;
            public multipleSeatsReason: string;
            public buyerId?: ("agencyId"|"advertiserId");
            public static create(properties?: teads.api.ICreateIoBuyerSeatForEntityRequest): teads.api.CreateIoBuyerSeatForEntityRequest;
            public static encode(message: teads.api.ICreateIoBuyerSeatForEntityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateIoBuyerSeatForEntityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateIoBuyerSeatForEntityRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateIoBuyerSeatForEntityRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateIoBuyerSeatForEntityRequest;
            public static toObject(message: teads.api.CreateIoBuyerSeatForEntityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateIoBuyerSeatForEntityResponse {
            seatId: number;
        }

        class CreateIoBuyerSeatForEntityResponse implements ICreateIoBuyerSeatForEntityResponse {
            constructor(properties?: teads.api.ICreateIoBuyerSeatForEntityResponse);
            public seatId: number;
            public static create(properties?: teads.api.ICreateIoBuyerSeatForEntityResponse): teads.api.CreateIoBuyerSeatForEntityResponse;
            public static encode(message: teads.api.ICreateIoBuyerSeatForEntityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateIoBuyerSeatForEntityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateIoBuyerSeatForEntityResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateIoBuyerSeatForEntityResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateIoBuyerSeatForEntityResponse;
            public static toObject(message: teads.api.CreateIoBuyerSeatForEntityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateManagedBuyerSeatForEntityRequest {
            securityContext: teads.api.ISecurityContext;
            officeId: number;
            entityId: number;
            msaType: teads.api.MsaType;
            managedFee: number;
            agencyId?: (number|null);
            advertiserId?: (number|null);
            salesforceContractId: string;
            seatName?: (string|null);
            multipleSeatsReason?: (string|null);
        }

        class CreateManagedBuyerSeatForEntityRequest implements ICreateManagedBuyerSeatForEntityRequest {
            constructor(properties?: teads.api.ICreateManagedBuyerSeatForEntityRequest);
            public securityContext: teads.api.ISecurityContext;
            public officeId: number;
            public entityId: number;
            public msaType: teads.api.MsaType;
            public managedFee: number;
            public agencyId?: (number|null);
            public advertiserId?: (number|null);
            public salesforceContractId: string;
            public seatName: string;
            public multipleSeatsReason: string;
            public buyerId?: ("agencyId"|"advertiserId");
            public static create(properties?: teads.api.ICreateManagedBuyerSeatForEntityRequest): teads.api.CreateManagedBuyerSeatForEntityRequest;
            public static encode(message: teads.api.ICreateManagedBuyerSeatForEntityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateManagedBuyerSeatForEntityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateManagedBuyerSeatForEntityRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateManagedBuyerSeatForEntityRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateManagedBuyerSeatForEntityRequest;
            public static toObject(message: teads.api.CreateManagedBuyerSeatForEntityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateManagedBuyerSeatForEntityResponse {
            seatId: number;
        }

        class CreateManagedBuyerSeatForEntityResponse implements ICreateManagedBuyerSeatForEntityResponse {
            constructor(properties?: teads.api.ICreateManagedBuyerSeatForEntityResponse);
            public seatId: number;
            public static create(properties?: teads.api.ICreateManagedBuyerSeatForEntityResponse): teads.api.CreateManagedBuyerSeatForEntityResponse;
            public static encode(message: teads.api.ICreateManagedBuyerSeatForEntityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateManagedBuyerSeatForEntityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateManagedBuyerSeatForEntityResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateManagedBuyerSeatForEntityResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateManagedBuyerSeatForEntityResponse;
            public static toObject(message: teads.api.CreateManagedBuyerSeatForEntityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateSelfServedBuyerSeatForEntityRequest {
            securityContext: teads.api.ISecurityContext;
            officeId: number;
            entityId: number;
            msaType: teads.api.MsaType;
            platformFee: number;
            agencyId?: (number|null);
            advertiserId?: (number|null);
            salesforceContractId: string;
            seatName?: (string|null);
            multipleSeatsReason?: (string|null);
        }

        class CreateSelfServedBuyerSeatForEntityRequest implements ICreateSelfServedBuyerSeatForEntityRequest {
            constructor(properties?: teads.api.ICreateSelfServedBuyerSeatForEntityRequest);
            public securityContext: teads.api.ISecurityContext;
            public officeId: number;
            public entityId: number;
            public msaType: teads.api.MsaType;
            public platformFee: number;
            public agencyId?: (number|null);
            public advertiserId?: (number|null);
            public salesforceContractId: string;
            public seatName: string;
            public multipleSeatsReason: string;
            public buyerId?: ("agencyId"|"advertiserId");
            public static create(properties?: teads.api.ICreateSelfServedBuyerSeatForEntityRequest): teads.api.CreateSelfServedBuyerSeatForEntityRequest;
            public static encode(message: teads.api.ICreateSelfServedBuyerSeatForEntityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateSelfServedBuyerSeatForEntityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateSelfServedBuyerSeatForEntityRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateSelfServedBuyerSeatForEntityRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateSelfServedBuyerSeatForEntityRequest;
            public static toObject(message: teads.api.CreateSelfServedBuyerSeatForEntityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICreateSelfServedBuyerSeatForEntityResponse {
            seatId: number;
        }

        class CreateSelfServedBuyerSeatForEntityResponse implements ICreateSelfServedBuyerSeatForEntityResponse {
            constructor(properties?: teads.api.ICreateSelfServedBuyerSeatForEntityResponse);
            public seatId: number;
            public static create(properties?: teads.api.ICreateSelfServedBuyerSeatForEntityResponse): teads.api.CreateSelfServedBuyerSeatForEntityResponse;
            public static encode(message: teads.api.ICreateSelfServedBuyerSeatForEntityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ICreateSelfServedBuyerSeatForEntityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.CreateSelfServedBuyerSeatForEntityResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.CreateSelfServedBuyerSeatForEntityResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.CreateSelfServedBuyerSeatForEntityResponse;
            public static toObject(message: teads.api.CreateSelfServedBuyerSeatForEntityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IDeactivateFeatureForSeatRequest {
            securityContext: teads.api.ISecurityContext;
            seatId: number;
            seatFeature: teads.api.SeatFeature;
        }

        class DeactivateFeatureForSeatRequest implements IDeactivateFeatureForSeatRequest {
            constructor(properties?: teads.api.IDeactivateFeatureForSeatRequest);
            public securityContext: teads.api.ISecurityContext;
            public seatId: number;
            public seatFeature: teads.api.SeatFeature;
            public static create(properties?: teads.api.IDeactivateFeatureForSeatRequest): teads.api.DeactivateFeatureForSeatRequest;
            public static encode(message: teads.api.IDeactivateFeatureForSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IDeactivateFeatureForSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.DeactivateFeatureForSeatRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.DeactivateFeatureForSeatRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.DeactivateFeatureForSeatRequest;
            public static toObject(message: teads.api.DeactivateFeatureForSeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IDeactivateFeatureForSeatResponse {
        }

        class DeactivateFeatureForSeatResponse implements IDeactivateFeatureForSeatResponse {
            constructor(properties?: teads.api.IDeactivateFeatureForSeatResponse);
            public static create(properties?: teads.api.IDeactivateFeatureForSeatResponse): teads.api.DeactivateFeatureForSeatResponse;
            public static encode(message: teads.api.IDeactivateFeatureForSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IDeactivateFeatureForSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.DeactivateFeatureForSeatResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.DeactivateFeatureForSeatResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.DeactivateFeatureForSeatResponse;
            public static toObject(message: teads.api.DeactivateFeatureForSeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest {
            securityContext: teads.api.ISecurityContext;
            buyerSeatId: number;
            segmentCodes?: (string[]|null);
        }

        class DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest implements IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest {
            constructor(properties?: teads.api.IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest);
            public securityContext: teads.api.ISecurityContext;
            public buyerSeatId: number;
            public segmentCodes: string[];
            public static create(properties?: teads.api.IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest): teads.api.DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest;
            public static encode(message: teads.api.IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest;
            public static toObject(message: teads.api.DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse {
        }

        class DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse implements IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse {
            constructor(properties?: teads.api.IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse);
            public static create(properties?: teads.api.IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse): teads.api.DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse;
            public static encode(message: teads.api.IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse;
            public static toObject(message: teads.api.DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IDisableBuyerSeatRequest {
            securityContext: teads.api.ISecurityContext;
            seatId: number;
        }

        class DisableBuyerSeatRequest implements IDisableBuyerSeatRequest {
            constructor(properties?: teads.api.IDisableBuyerSeatRequest);
            public securityContext: teads.api.ISecurityContext;
            public seatId: number;
            public static create(properties?: teads.api.IDisableBuyerSeatRequest): teads.api.DisableBuyerSeatRequest;
            public static encode(message: teads.api.IDisableBuyerSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IDisableBuyerSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.DisableBuyerSeatRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.DisableBuyerSeatRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.DisableBuyerSeatRequest;
            public static toObject(message: teads.api.DisableBuyerSeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IDisableBuyerSeatResponse {
        }

        class DisableBuyerSeatResponse implements IDisableBuyerSeatResponse {
            constructor(properties?: teads.api.IDisableBuyerSeatResponse);
            public static create(properties?: teads.api.IDisableBuyerSeatResponse): teads.api.DisableBuyerSeatResponse;
            public static encode(message: teads.api.IDisableBuyerSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IDisableBuyerSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.DisableBuyerSeatResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.DisableBuyerSeatResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.DisableBuyerSeatResponse;
            public static toObject(message: teads.api.DisableBuyerSeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IEnableBuyerSeatRequest {
            securityContext: teads.api.ISecurityContext;
            seatId: number;
        }

        class EnableBuyerSeatRequest implements IEnableBuyerSeatRequest {
            constructor(properties?: teads.api.IEnableBuyerSeatRequest);
            public securityContext: teads.api.ISecurityContext;
            public seatId: number;
            public static create(properties?: teads.api.IEnableBuyerSeatRequest): teads.api.EnableBuyerSeatRequest;
            public static encode(message: teads.api.IEnableBuyerSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IEnableBuyerSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.EnableBuyerSeatRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.EnableBuyerSeatRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.EnableBuyerSeatRequest;
            public static toObject(message: teads.api.EnableBuyerSeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IEnableBuyerSeatResponse {
        }

        class EnableBuyerSeatResponse implements IEnableBuyerSeatResponse {
            constructor(properties?: teads.api.IEnableBuyerSeatResponse);
            public static create(properties?: teads.api.IEnableBuyerSeatResponse): teads.api.EnableBuyerSeatResponse;
            public static encode(message: teads.api.IEnableBuyerSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IEnableBuyerSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.EnableBuyerSeatResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.EnableBuyerSeatResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.EnableBuyerSeatResponse;
            public static toObject(message: teads.api.EnableBuyerSeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFindActiveAccountsForProfileRequest {
            securityContext: teads.api.ISecurityContext;
            profileId: number;
        }

        class FindActiveAccountsForProfileRequest implements IFindActiveAccountsForProfileRequest {
            constructor(properties?: teads.api.IFindActiveAccountsForProfileRequest);
            public securityContext: teads.api.ISecurityContext;
            public profileId: number;
            public static create(properties?: teads.api.IFindActiveAccountsForProfileRequest): teads.api.FindActiveAccountsForProfileRequest;
            public static encode(message: teads.api.IFindActiveAccountsForProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindActiveAccountsForProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindActiveAccountsForProfileRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindActiveAccountsForProfileRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindActiveAccountsForProfileRequest;
            public static toObject(message: teads.api.FindActiveAccountsForProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFindActiveAccountsForProfileResponse {
            accounts?: (teads.api.FindActiveAccountsForProfileResponse.IAccount[]|null);
        }

        class FindActiveAccountsForProfileResponse implements IFindActiveAccountsForProfileResponse {
            constructor(properties?: teads.api.IFindActiveAccountsForProfileResponse);
            public accounts: teads.api.FindActiveAccountsForProfileResponse.IAccount[];
            public static create(properties?: teads.api.IFindActiveAccountsForProfileResponse): teads.api.FindActiveAccountsForProfileResponse;
            public static encode(message: teads.api.IFindActiveAccountsForProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindActiveAccountsForProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindActiveAccountsForProfileResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindActiveAccountsForProfileResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindActiveAccountsForProfileResponse;
            public static toObject(message: teads.api.FindActiveAccountsForProfileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FindActiveAccountsForProfileResponse {

            interface IAccount {
                accountId: teads.api.FindActiveAccountsForProfileResponse.IAccountId;
                name: string;
                accountType: teads.api.AccountType;
                parentName?: (string|null);
            }

            class Account implements IAccount {
                constructor(properties?: teads.api.FindActiveAccountsForProfileResponse.IAccount);
                public accountId: teads.api.FindActiveAccountsForProfileResponse.IAccountId;
                public name: string;
                public accountType: teads.api.AccountType;
                public parentName: string;
                public static create(properties?: teads.api.FindActiveAccountsForProfileResponse.IAccount): teads.api.FindActiveAccountsForProfileResponse.Account;
                public static encode(message: teads.api.FindActiveAccountsForProfileResponse.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindActiveAccountsForProfileResponse.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindActiveAccountsForProfileResponse.Account;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindActiveAccountsForProfileResponse.Account;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindActiveAccountsForProfileResponse.Account;
                public static toObject(message: teads.api.FindActiveAccountsForProfileResponse.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IAccountId {
                profileId: number;
                entityId: number;
            }

            class AccountId implements IAccountId {
                constructor(properties?: teads.api.FindActiveAccountsForProfileResponse.IAccountId);
                public profileId: number;
                public entityId: number;
                public static create(properties?: teads.api.FindActiveAccountsForProfileResponse.IAccountId): teads.api.FindActiveAccountsForProfileResponse.AccountId;
                public static encode(message: teads.api.FindActiveAccountsForProfileResponse.IAccountId, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindActiveAccountsForProfileResponse.IAccountId, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindActiveAccountsForProfileResponse.AccountId;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindActiveAccountsForProfileResponse.AccountId;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindActiveAccountsForProfileResponse.AccountId;
                public static toObject(message: teads.api.FindActiveAccountsForProfileResponse.AccountId, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IFindBuyerPixelsForAdvertiserRequest {
            securityContext: teads.api.ISecurityContext;
            advertiserId: number;
            search?: (string|null);
        }

        class FindBuyerPixelsForAdvertiserRequest implements IFindBuyerPixelsForAdvertiserRequest {
            constructor(properties?: teads.api.IFindBuyerPixelsForAdvertiserRequest);
            public securityContext: teads.api.ISecurityContext;
            public advertiserId: number;
            public search: string;
            public static create(properties?: teads.api.IFindBuyerPixelsForAdvertiserRequest): teads.api.FindBuyerPixelsForAdvertiserRequest;
            public static encode(message: teads.api.IFindBuyerPixelsForAdvertiserRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindBuyerPixelsForAdvertiserRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindBuyerPixelsForAdvertiserRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindBuyerPixelsForAdvertiserRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindBuyerPixelsForAdvertiserRequest;
            public static toObject(message: teads.api.FindBuyerPixelsForAdvertiserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFindBuyerPixelsForAdvertiserResponse {
            buyerPixelsByEntity?: (teads.api.FindBuyerPixelsForAdvertiserResponse.IBuyerPixelsByEntity[]|null);
        }

        class FindBuyerPixelsForAdvertiserResponse implements IFindBuyerPixelsForAdvertiserResponse {
            constructor(properties?: teads.api.IFindBuyerPixelsForAdvertiserResponse);
            public buyerPixelsByEntity: teads.api.FindBuyerPixelsForAdvertiserResponse.IBuyerPixelsByEntity[];
            public static create(properties?: teads.api.IFindBuyerPixelsForAdvertiserResponse): teads.api.FindBuyerPixelsForAdvertiserResponse;
            public static encode(message: teads.api.IFindBuyerPixelsForAdvertiserResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindBuyerPixelsForAdvertiserResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindBuyerPixelsForAdvertiserResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindBuyerPixelsForAdvertiserResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindBuyerPixelsForAdvertiserResponse;
            public static toObject(message: teads.api.FindBuyerPixelsForAdvertiserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FindBuyerPixelsForAdvertiserResponse {

            interface IBuyerPixel {
                id: number;
                name: string;
                lastActivityDate?: (google.protobuf.ITimestamp|null);
            }

            class BuyerPixel implements IBuyerPixel {
                constructor(properties?: teads.api.FindBuyerPixelsForAdvertiserResponse.IBuyerPixel);
                public id: number;
                public name: string;
                public lastActivityDate?: (google.protobuf.ITimestamp|null);
                public static create(properties?: teads.api.FindBuyerPixelsForAdvertiserResponse.IBuyerPixel): teads.api.FindBuyerPixelsForAdvertiserResponse.BuyerPixel;
                public static encode(message: teads.api.FindBuyerPixelsForAdvertiserResponse.IBuyerPixel, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindBuyerPixelsForAdvertiserResponse.IBuyerPixel, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindBuyerPixelsForAdvertiserResponse.BuyerPixel;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindBuyerPixelsForAdvertiserResponse.BuyerPixel;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindBuyerPixelsForAdvertiserResponse.BuyerPixel;
                public static toObject(message: teads.api.FindBuyerPixelsForAdvertiserResponse.BuyerPixel, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IBuyerPixelsByEntity {
                entityId: number;
                seatName: string;
                buyerPixels?: (teads.api.FindBuyerPixelsForAdvertiserResponse.IBuyerPixel[]|null);
            }

            class BuyerPixelsByEntity implements IBuyerPixelsByEntity {
                constructor(properties?: teads.api.FindBuyerPixelsForAdvertiserResponse.IBuyerPixelsByEntity);
                public entityId: number;
                public seatName: string;
                public buyerPixels: teads.api.FindBuyerPixelsForAdvertiserResponse.IBuyerPixel[];
                public static create(properties?: teads.api.FindBuyerPixelsForAdvertiserResponse.IBuyerPixelsByEntity): teads.api.FindBuyerPixelsForAdvertiserResponse.BuyerPixelsByEntity;
                public static encode(message: teads.api.FindBuyerPixelsForAdvertiserResponse.IBuyerPixelsByEntity, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindBuyerPixelsForAdvertiserResponse.IBuyerPixelsByEntity, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindBuyerPixelsForAdvertiserResponse.BuyerPixelsByEntity;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindBuyerPixelsForAdvertiserResponse.BuyerPixelsByEntity;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindBuyerPixelsForAdvertiserResponse.BuyerPixelsByEntity;
                public static toObject(message: teads.api.FindBuyerPixelsForAdvertiserResponse.BuyerPixelsByEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IFindBuyerSeatForEntityRequest {
            securityContext: teads.api.ISecurityContext;
            entityId: number;
        }

        class FindBuyerSeatForEntityRequest implements IFindBuyerSeatForEntityRequest {
            constructor(properties?: teads.api.IFindBuyerSeatForEntityRequest);
            public securityContext: teads.api.ISecurityContext;
            public entityId: number;
            public static create(properties?: teads.api.IFindBuyerSeatForEntityRequest): teads.api.FindBuyerSeatForEntityRequest;
            public static encode(message: teads.api.IFindBuyerSeatForEntityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindBuyerSeatForEntityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindBuyerSeatForEntityRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindBuyerSeatForEntityRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindBuyerSeatForEntityRequest;
            public static toObject(message: teads.api.FindBuyerSeatForEntityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFindBuyerSeatForEntityResponse {
            seatId: number;
            name: string;
            fee: number;
            status: teads.api.BuyerSeatStatus;
            salesforceContractId?: (string|null);
            serviceLevel: teads.api.BuyerServiceLevel;
            salesforceSeatId?: (string|null);
            activatedSeatSettings?: (teads.api.SeatFeature[]|null);
            canRunInternalTestCampaign: boolean;
        }

        class FindBuyerSeatForEntityResponse implements IFindBuyerSeatForEntityResponse {
            constructor(properties?: teads.api.IFindBuyerSeatForEntityResponse);
            public seatId: number;
            public name: string;
            public fee: number;
            public status: teads.api.BuyerSeatStatus;
            public salesforceContractId: string;
            public serviceLevel: teads.api.BuyerServiceLevel;
            public salesforceSeatId: string;
            public activatedSeatSettings: teads.api.SeatFeature[];
            public canRunInternalTestCampaign: boolean;
            public static create(properties?: teads.api.IFindBuyerSeatForEntityResponse): teads.api.FindBuyerSeatForEntityResponse;
            public static encode(message: teads.api.IFindBuyerSeatForEntityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindBuyerSeatForEntityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindBuyerSeatForEntityResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindBuyerSeatForEntityResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindBuyerSeatForEntityResponse;
            public static toObject(message: teads.api.FindBuyerSeatForEntityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFindBuyerSeatForSalesforceSeatRequest {
            securityContext: teads.api.ISecurityContext;
            salesforceSeatId: string;
        }

        class FindBuyerSeatForSalesforceSeatRequest implements IFindBuyerSeatForSalesforceSeatRequest {
            constructor(properties?: teads.api.IFindBuyerSeatForSalesforceSeatRequest);
            public securityContext: teads.api.ISecurityContext;
            public salesforceSeatId: string;
            public static create(properties?: teads.api.IFindBuyerSeatForSalesforceSeatRequest): teads.api.FindBuyerSeatForSalesforceSeatRequest;
            public static encode(message: teads.api.IFindBuyerSeatForSalesforceSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindBuyerSeatForSalesforceSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindBuyerSeatForSalesforceSeatRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindBuyerSeatForSalesforceSeatRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindBuyerSeatForSalesforceSeatRequest;
            public static toObject(message: teads.api.FindBuyerSeatForSalesforceSeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFindBuyerSeatForSalesforceSeatResponse {
            seatId: number;
            entityId: number;
            officeId: number;
            name: string;
            type: teads.api.BuyerSeatType;
            status: teads.api.BuyerSeatStatus;
            serviceLevel: teads.api.BuyerServiceLevel;
            fee: number;
            salesforceContractId?: (string|null);
            salesforceContractVersion?: (number|null);
        }

        class FindBuyerSeatForSalesforceSeatResponse implements IFindBuyerSeatForSalesforceSeatResponse {
            constructor(properties?: teads.api.IFindBuyerSeatForSalesforceSeatResponse);
            public seatId: number;
            public entityId: number;
            public officeId: number;
            public name: string;
            public type: teads.api.BuyerSeatType;
            public status: teads.api.BuyerSeatStatus;
            public serviceLevel: teads.api.BuyerServiceLevel;
            public fee: number;
            public salesforceContractId: string;
            public salesforceContractVersion: number;
            public static create(properties?: teads.api.IFindBuyerSeatForSalesforceSeatResponse): teads.api.FindBuyerSeatForSalesforceSeatResponse;
            public static encode(message: teads.api.IFindBuyerSeatForSalesforceSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindBuyerSeatForSalesforceSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindBuyerSeatForSalesforceSeatResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindBuyerSeatForSalesforceSeatResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindBuyerSeatForSalesforceSeatResponse;
            public static toObject(message: teads.api.FindBuyerSeatForSalesforceSeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFindCampaignsForSalesforceOpportunityAndProfileRequest {
            securityContext: teads.api.ISecurityContext;
            opportunityId: string;
            campaignObjective: teads.api.CampaignObjective;
            profileId: number;
            advertisingSolutionId?: (teads.api.AdvertisingSolutionId|null);
        }

        class FindCampaignsForSalesforceOpportunityAndProfileRequest implements IFindCampaignsForSalesforceOpportunityAndProfileRequest {
            constructor(properties?: teads.api.IFindCampaignsForSalesforceOpportunityAndProfileRequest);
            public securityContext: teads.api.ISecurityContext;
            public opportunityId: string;
            public campaignObjective: teads.api.CampaignObjective;
            public profileId: number;
            public advertisingSolutionId: teads.api.AdvertisingSolutionId;
            public static create(properties?: teads.api.IFindCampaignsForSalesforceOpportunityAndProfileRequest): teads.api.FindCampaignsForSalesforceOpportunityAndProfileRequest;
            public static encode(message: teads.api.IFindCampaignsForSalesforceOpportunityAndProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindCampaignsForSalesforceOpportunityAndProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindCampaignsForSalesforceOpportunityAndProfileRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindCampaignsForSalesforceOpportunityAndProfileRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindCampaignsForSalesforceOpportunityAndProfileRequest;
            public static toObject(message: teads.api.FindCampaignsForSalesforceOpportunityAndProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFindCampaignsForSalesforceOpportunityAndProfileResponse {
            campaigns?: (teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ICampaignInfo[]|null);
        }

        class FindCampaignsForSalesforceOpportunityAndProfileResponse implements IFindCampaignsForSalesforceOpportunityAndProfileResponse {
            constructor(properties?: teads.api.IFindCampaignsForSalesforceOpportunityAndProfileResponse);
            public campaigns: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ICampaignInfo[];
            public static create(properties?: teads.api.IFindCampaignsForSalesforceOpportunityAndProfileResponse): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse;
            public static encode(message: teads.api.IFindCampaignsForSalesforceOpportunityAndProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindCampaignsForSalesforceOpportunityAndProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse;
            public static toObject(message: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FindCampaignsForSalesforceOpportunityAndProfileResponse {

            interface ICampaignInfo {
                campaignId: number;
                campaignName: string;
                seatId?: (number|null);
                entityName?: (string|null);
                officeId: number;
                officeName: string;
                campaignProfilePermissions?: (teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.CampaignProfilePermission[]|null);
                budget: number;
                freeBudget?: (number|null);
                timeInterval: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ITimeInterval;
                insertionOrderLines?: (teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.IInsertionOrderLine[]|null);
                isCreatedBySalesforce: boolean;
                isMoatUnsampled?: (boolean|null);
            }

            class CampaignInfo implements ICampaignInfo {
                constructor(properties?: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ICampaignInfo);
                public campaignId: number;
                public campaignName: string;
                public seatId: number;
                public entityName: string;
                public officeId: number;
                public officeName: string;
                public campaignProfilePermissions: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.CampaignProfilePermission[];
                public budget: number;
                public freeBudget: number;
                public timeInterval: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ITimeInterval;
                public insertionOrderLines: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.IInsertionOrderLine[];
                public isCreatedBySalesforce: boolean;
                public isMoatUnsampled: boolean;
                public static create(properties?: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ICampaignInfo): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.CampaignInfo;
                public static encode(message: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ICampaignInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ICampaignInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.CampaignInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.CampaignInfo;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.CampaignInfo;
                public static toObject(message: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.CampaignInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IInsertionOrderLine {
                id: number;
                name: string;
                salesforceOpportunityLineItemId?: (string|null);
                budget?: (number|null);
                freeBudget?: (number|null);
                timeInterval: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ITimeInterval;
                billingModel?: (teads.api.InsertionOrderLineBillingModel|null);
                billingModelRate?: (number|null);
                billingEvent?: (string|null);
                auctionType?: (teads.api.InsertionOrderLineAuctionType|null);
                creativeTypeFamily?: (teads.api.InsertionOrderLineCreativeTypeFamily|null);
                isGuaranteed?: (boolean|null);
            }

            class InsertionOrderLine implements IInsertionOrderLine {
                constructor(properties?: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.IInsertionOrderLine);
                public id: number;
                public name: string;
                public salesforceOpportunityLineItemId: string;
                public budget: number;
                public freeBudget: number;
                public timeInterval: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ITimeInterval;
                public billingModel: teads.api.InsertionOrderLineBillingModel;
                public billingModelRate: number;
                public billingEvent: string;
                public auctionType: teads.api.InsertionOrderLineAuctionType;
                public creativeTypeFamily: teads.api.InsertionOrderLineCreativeTypeFamily;
                public isGuaranteed: boolean;
                public static create(properties?: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.IInsertionOrderLine): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.InsertionOrderLine;
                public static encode(message: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.IInsertionOrderLine, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.IInsertionOrderLine, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.InsertionOrderLine;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.InsertionOrderLine;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.InsertionOrderLine;
                public static toObject(message: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.InsertionOrderLine, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface ITimeInterval {
                startDate: google.protobuf.ITimestamp;
                endDate: google.protobuf.ITimestamp;
            }

            class TimeInterval implements ITimeInterval {
                constructor(properties?: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ITimeInterval);
                public startDate: google.protobuf.ITimestamp;
                public endDate: google.protobuf.ITimestamp;
                public static create(properties?: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ITimeInterval): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.TimeInterval;
                public static encode(message: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ITimeInterval, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.ITimeInterval, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.TimeInterval;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.TimeInterval;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.TimeInterval;
                public static toObject(message: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse.TimeInterval, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            enum CampaignProfilePermission {
                CAMPAIGN_PROFILE_PERMISSION_VIEW = 1,
                CAMPAIGN_PROFILE_PERMISSION_MANAGE = 2
            }
        }

        interface IFindCampaignsForSalesforceOpportunityRequest {
            securityContext: teads.api.ISecurityContext;
            opportunityId: string;
            campaignObjective: teads.api.CampaignObjective;
            advertisingSolutionId?: (teads.api.AdvertisingSolutionId|null);
        }

        class FindCampaignsForSalesforceOpportunityRequest implements IFindCampaignsForSalesforceOpportunityRequest {
            constructor(properties?: teads.api.IFindCampaignsForSalesforceOpportunityRequest);
            public securityContext: teads.api.ISecurityContext;
            public opportunityId: string;
            public campaignObjective: teads.api.CampaignObjective;
            public advertisingSolutionId: teads.api.AdvertisingSolutionId;
            public static create(properties?: teads.api.IFindCampaignsForSalesforceOpportunityRequest): teads.api.FindCampaignsForSalesforceOpportunityRequest;
            public static encode(message: teads.api.IFindCampaignsForSalesforceOpportunityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindCampaignsForSalesforceOpportunityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindCampaignsForSalesforceOpportunityRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindCampaignsForSalesforceOpportunityRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindCampaignsForSalesforceOpportunityRequest;
            public static toObject(message: teads.api.FindCampaignsForSalesforceOpportunityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFindCampaignsForSalesforceOpportunityResponse {
            campaigns?: (teads.api.FindCampaignsForSalesforceOpportunityResponse.ICampaignInfo[]|null);
        }

        class FindCampaignsForSalesforceOpportunityResponse implements IFindCampaignsForSalesforceOpportunityResponse {
            constructor(properties?: teads.api.IFindCampaignsForSalesforceOpportunityResponse);
            public campaigns: teads.api.FindCampaignsForSalesforceOpportunityResponse.ICampaignInfo[];
            public static create(properties?: teads.api.IFindCampaignsForSalesforceOpportunityResponse): teads.api.FindCampaignsForSalesforceOpportunityResponse;
            public static encode(message: teads.api.IFindCampaignsForSalesforceOpportunityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindCampaignsForSalesforceOpportunityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindCampaignsForSalesforceOpportunityResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindCampaignsForSalesforceOpportunityResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindCampaignsForSalesforceOpportunityResponse;
            public static toObject(message: teads.api.FindCampaignsForSalesforceOpportunityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FindCampaignsForSalesforceOpportunityResponse {

            interface ICampaignInfo {
                campaignId: number;
                campaignName: string;
                seatId?: (number|null);
                entityName?: (string|null);
                officeId: number;
                officeName: string;
            }

            class CampaignInfo implements ICampaignInfo {
                constructor(properties?: teads.api.FindCampaignsForSalesforceOpportunityResponse.ICampaignInfo);
                public campaignId: number;
                public campaignName: string;
                public seatId: number;
                public entityName: string;
                public officeId: number;
                public officeName: string;
                public static create(properties?: teads.api.FindCampaignsForSalesforceOpportunityResponse.ICampaignInfo): teads.api.FindCampaignsForSalesforceOpportunityResponse.CampaignInfo;
                public static encode(message: teads.api.FindCampaignsForSalesforceOpportunityResponse.ICampaignInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindCampaignsForSalesforceOpportunityResponse.ICampaignInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindCampaignsForSalesforceOpportunityResponse.CampaignInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindCampaignsForSalesforceOpportunityResponse.CampaignInfo;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindCampaignsForSalesforceOpportunityResponse.CampaignInfo;
                public static toObject(message: teads.api.FindCampaignsForSalesforceOpportunityResponse.CampaignInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest {
            securityContext: teads.api.ISecurityContext;
            buyerSeatIds?: (number[]|null);
        }

        class FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest implements IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest {
            constructor(properties?: teads.api.IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest);
            public securityContext: teads.api.ISecurityContext;
            public buyerSeatIds: number[];
            public static create(properties?: teads.api.IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest): teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest;
            public static encode(message: teads.api.IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest;
            public static toObject(message: teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse {
            segments?: (teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse.IGrapeshotBrandSuitabilitySegment[]|null);
        }

        class FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse implements IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse {
            constructor(properties?: teads.api.IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse);
            public segments: teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse.IGrapeshotBrandSuitabilitySegment[];
            public static create(properties?: teads.api.IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse): teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse;
            public static encode(message: teads.api.IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse;
            public static toObject(message: teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse {

            interface IGrapeshotBrandSuitabilitySegment {
                segmentCode: string;
                friendlyName?: (string|null);
                isAvailableToAllSeats: boolean;
            }

            class GrapeshotBrandSuitabilitySegment implements IGrapeshotBrandSuitabilitySegment {
                constructor(properties?: teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse.IGrapeshotBrandSuitabilitySegment);
                public segmentCode: string;
                public friendlyName: string;
                public isAvailableToAllSeats: boolean;
                public static create(properties?: teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse.IGrapeshotBrandSuitabilitySegment): teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse.GrapeshotBrandSuitabilitySegment;
                public static encode(message: teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse.IGrapeshotBrandSuitabilitySegment, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse.IGrapeshotBrandSuitabilitySegment, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse.GrapeshotBrandSuitabilitySegment;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse.GrapeshotBrandSuitabilitySegment;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse.GrapeshotBrandSuitabilitySegment;
                public static toObject(message: teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse.GrapeshotBrandSuitabilitySegment, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IFindLineItemsForCampaignRequest {
            securityContext: teads.api.ISecurityContext;
            campaignId: number;
        }

        class FindLineItemsForCampaignRequest implements IFindLineItemsForCampaignRequest {
            constructor(properties?: teads.api.IFindLineItemsForCampaignRequest);
            public securityContext: teads.api.ISecurityContext;
            public campaignId: number;
            public static create(properties?: teads.api.IFindLineItemsForCampaignRequest): teads.api.FindLineItemsForCampaignRequest;
            public static encode(message: teads.api.IFindLineItemsForCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindLineItemsForCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindLineItemsForCampaignRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindLineItemsForCampaignRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindLineItemsForCampaignRequest;
            public static toObject(message: teads.api.FindLineItemsForCampaignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFindLineItemsForCampaignResponse {
            lineItems?: (teads.api.FindLineItemsForCampaignResponse.ILineItem[]|null);
        }

        class FindLineItemsForCampaignResponse implements IFindLineItemsForCampaignResponse {
            constructor(properties?: teads.api.IFindLineItemsForCampaignResponse);
            public lineItems: teads.api.FindLineItemsForCampaignResponse.ILineItem[];
            public static create(properties?: teads.api.IFindLineItemsForCampaignResponse): teads.api.FindLineItemsForCampaignResponse;
            public static encode(message: teads.api.IFindLineItemsForCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindLineItemsForCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindLineItemsForCampaignResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindLineItemsForCampaignResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindLineItemsForCampaignResponse;
            public static toObject(message: teads.api.FindLineItemsForCampaignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FindLineItemsForCampaignResponse {

            interface ILineItem {
                id: number;
                name: string;
                insertionOrderLineId: number;
            }

            class LineItem implements ILineItem {
                constructor(properties?: teads.api.FindLineItemsForCampaignResponse.ILineItem);
                public id: number;
                public name: string;
                public insertionOrderLineId: number;
                public static create(properties?: teads.api.FindLineItemsForCampaignResponse.ILineItem): teads.api.FindLineItemsForCampaignResponse.LineItem;
                public static encode(message: teads.api.FindLineItemsForCampaignResponse.ILineItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindLineItemsForCampaignResponse.ILineItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindLineItemsForCampaignResponse.LineItem;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindLineItemsForCampaignResponse.LineItem;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindLineItemsForCampaignResponse.LineItem;
                public static toObject(message: teads.api.FindLineItemsForCampaignResponse.LineItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IFindProfileForEmailAnonymouslyRequest {
            email: string;
        }

        class FindProfileForEmailAnonymouslyRequest implements IFindProfileForEmailAnonymouslyRequest {
            constructor(properties?: teads.api.IFindProfileForEmailAnonymouslyRequest);
            public email: string;
            public static create(properties?: teads.api.IFindProfileForEmailAnonymouslyRequest): teads.api.FindProfileForEmailAnonymouslyRequest;
            public static encode(message: teads.api.IFindProfileForEmailAnonymouslyRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindProfileForEmailAnonymouslyRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindProfileForEmailAnonymouslyRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindProfileForEmailAnonymouslyRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindProfileForEmailAnonymouslyRequest;
            public static toObject(message: teads.api.FindProfileForEmailAnonymouslyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFindProfileForEmailAnonymouslyResponse {
            profileId: number;
            email: string;
            accounts?: (teads.api.FindProfileForEmailAnonymouslyResponse.IAccount[]|null);
            status: teads.api.ProfileStatus;
            firstname?: (string|null);
            lastname?: (string|null);
            locale?: (string|null);
            deprecatedCredentials?: (teads.api.FindProfileForEmailAnonymouslyResponse.ICredentials|null);
            cognitoCredentials?: (teads.api.FindProfileForEmailAnonymouslyResponse.ICredentials|null);
        }

        class FindProfileForEmailAnonymouslyResponse implements IFindProfileForEmailAnonymouslyResponse {
            constructor(properties?: teads.api.IFindProfileForEmailAnonymouslyResponse);
            public profileId: number;
            public email: string;
            public accounts: teads.api.FindProfileForEmailAnonymouslyResponse.IAccount[];
            public status: teads.api.ProfileStatus;
            public firstname: string;
            public lastname: string;
            public locale: string;
            public deprecatedCredentials?: (teads.api.FindProfileForEmailAnonymouslyResponse.ICredentials|null);
            public cognitoCredentials?: (teads.api.FindProfileForEmailAnonymouslyResponse.ICredentials|null);
            public profileCredentials?: ("deprecatedCredentials"|"cognitoCredentials");
            public static create(properties?: teads.api.IFindProfileForEmailAnonymouslyResponse): teads.api.FindProfileForEmailAnonymouslyResponse;
            public static encode(message: teads.api.IFindProfileForEmailAnonymouslyResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindProfileForEmailAnonymouslyResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindProfileForEmailAnonymouslyResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindProfileForEmailAnonymouslyResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindProfileForEmailAnonymouslyResponse;
            public static toObject(message: teads.api.FindProfileForEmailAnonymouslyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FindProfileForEmailAnonymouslyResponse {

            interface IAccount {
                entityId: number;
                roles?: (string[]|null);
                entityType: teads.api.EntityType;
            }

            class Account implements IAccount {
                constructor(properties?: teads.api.FindProfileForEmailAnonymouslyResponse.IAccount);
                public entityId: number;
                public roles: string[];
                public entityType: teads.api.EntityType;
                public static create(properties?: teads.api.FindProfileForEmailAnonymouslyResponse.IAccount): teads.api.FindProfileForEmailAnonymouslyResponse.Account;
                public static encode(message: teads.api.FindProfileForEmailAnonymouslyResponse.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindProfileForEmailAnonymouslyResponse.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindProfileForEmailAnonymouslyResponse.Account;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindProfileForEmailAnonymouslyResponse.Account;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindProfileForEmailAnonymouslyResponse.Account;
                public static toObject(message: teads.api.FindProfileForEmailAnonymouslyResponse.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface ICredentials {
                samlCredentials?: (teads.api.FindProfileForEmailAnonymouslyResponse.ISAMLCredentials|null);
                passwordCredentials?: (teads.api.FindProfileForEmailAnonymouslyResponse.IPasswordCredentials|null);
            }

            class Credentials implements ICredentials {
                constructor(properties?: teads.api.FindProfileForEmailAnonymouslyResponse.ICredentials);
                public samlCredentials?: (teads.api.FindProfileForEmailAnonymouslyResponse.ISAMLCredentials|null);
                public passwordCredentials?: (teads.api.FindProfileForEmailAnonymouslyResponse.IPasswordCredentials|null);
                public static create(properties?: teads.api.FindProfileForEmailAnonymouslyResponse.ICredentials): teads.api.FindProfileForEmailAnonymouslyResponse.Credentials;
                public static encode(message: teads.api.FindProfileForEmailAnonymouslyResponse.ICredentials, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindProfileForEmailAnonymouslyResponse.ICredentials, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindProfileForEmailAnonymouslyResponse.Credentials;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindProfileForEmailAnonymouslyResponse.Credentials;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindProfileForEmailAnonymouslyResponse.Credentials;
                public static toObject(message: teads.api.FindProfileForEmailAnonymouslyResponse.Credentials, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IPasswordCredentials {
                mfaValidationRequired: boolean;
            }

            class PasswordCredentials implements IPasswordCredentials {
                constructor(properties?: teads.api.FindProfileForEmailAnonymouslyResponse.IPasswordCredentials);
                public mfaValidationRequired: boolean;
                public static create(properties?: teads.api.FindProfileForEmailAnonymouslyResponse.IPasswordCredentials): teads.api.FindProfileForEmailAnonymouslyResponse.PasswordCredentials;
                public static encode(message: teads.api.FindProfileForEmailAnonymouslyResponse.IPasswordCredentials, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindProfileForEmailAnonymouslyResponse.IPasswordCredentials, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindProfileForEmailAnonymouslyResponse.PasswordCredentials;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindProfileForEmailAnonymouslyResponse.PasswordCredentials;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindProfileForEmailAnonymouslyResponse.PasswordCredentials;
                public static toObject(message: teads.api.FindProfileForEmailAnonymouslyResponse.PasswordCredentials, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface ISAMLCredentials {
                identityProviderName: string;
            }

            class SAMLCredentials implements ISAMLCredentials {
                constructor(properties?: teads.api.FindProfileForEmailAnonymouslyResponse.ISAMLCredentials);
                public identityProviderName: string;
                public static create(properties?: teads.api.FindProfileForEmailAnonymouslyResponse.ISAMLCredentials): teads.api.FindProfileForEmailAnonymouslyResponse.SAMLCredentials;
                public static encode(message: teads.api.FindProfileForEmailAnonymouslyResponse.ISAMLCredentials, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindProfileForEmailAnonymouslyResponse.ISAMLCredentials, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindProfileForEmailAnonymouslyResponse.SAMLCredentials;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindProfileForEmailAnonymouslyResponse.SAMLCredentials;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindProfileForEmailAnonymouslyResponse.SAMLCredentials;
                public static toObject(message: teads.api.FindProfileForEmailAnonymouslyResponse.SAMLCredentials, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IFindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest {
            securityContext: teads.api.ISecurityContext;
            entityId: number;
        }

        class FindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest implements IFindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest {
            constructor(properties?: teads.api.IFindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest);
            public securityContext: teads.api.ISecurityContext;
            public entityId: number;
            public static create(properties?: teads.api.IFindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest): teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest;
            public static encode(message: teads.api.IFindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest;
            public static toObject(message: teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse {
            segments?: (teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse.IAdvertiserFirstPartySegment[]|null);
        }

        class FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse implements IFindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse {
            constructor(properties?: teads.api.IFindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse);
            public segments: teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse.IAdvertiserFirstPartySegment[];
            public static create(properties?: teads.api.IFindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse): teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse;
            public static encode(message: teads.api.IFindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IFindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse;
            public static toObject(message: teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse {

            interface IAdvertiserFirstPartySegment {
                segmentId: number;
                segmentProvider: teads.api.AdvertiserFirstPartySegmentProvider;
            }

            class AdvertiserFirstPartySegment implements IAdvertiserFirstPartySegment {
                constructor(properties?: teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse.IAdvertiserFirstPartySegment);
                public segmentId: number;
                public segmentProvider: teads.api.AdvertiserFirstPartySegmentProvider;
                public static create(properties?: teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse.IAdvertiserFirstPartySegment): teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse.AdvertiserFirstPartySegment;
                public static encode(message: teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse.IAdvertiserFirstPartySegment, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse.IAdvertiserFirstPartySegment, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse.AdvertiserFirstPartySegment;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse.AdvertiserFirstPartySegment;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse.AdvertiserFirstPartySegment;
                public static toObject(message: teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse.AdvertiserFirstPartySegment, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IGetAccountRequest {
            securityContext: teads.api.ISecurityContext;
            accountId: teads.api.GetAccountRequest.IAccountId;
        }

        class GetAccountRequest implements IGetAccountRequest {
            constructor(properties?: teads.api.IGetAccountRequest);
            public securityContext: teads.api.ISecurityContext;
            public accountId: teads.api.GetAccountRequest.IAccountId;
            public static create(properties?: teads.api.IGetAccountRequest): teads.api.GetAccountRequest;
            public static encode(message: teads.api.IGetAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGetAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetAccountRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetAccountRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GetAccountRequest;
            public static toObject(message: teads.api.GetAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GetAccountRequest {

            interface IAccountId {
                entityId: number;
                profileId: number;
            }

            class AccountId implements IAccountId {
                constructor(properties?: teads.api.GetAccountRequest.IAccountId);
                public entityId: number;
                public profileId: number;
                public static create(properties?: teads.api.GetAccountRequest.IAccountId): teads.api.GetAccountRequest.AccountId;
                public static encode(message: teads.api.GetAccountRequest.IAccountId, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.GetAccountRequest.IAccountId, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetAccountRequest.AccountId;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetAccountRequest.AccountId;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.GetAccountRequest.AccountId;
                public static toObject(message: teads.api.GetAccountRequest.AccountId, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IGetAccountResponse {
            entityName: string;
            accountType: teads.api.AccountType;
            profile: teads.api.GetAccountResponse.IProfile;
            roles?: (string[]|null);
            resourceTypesByPermission?: ({ [k: string]: teads.api.GetAccountResponse.IResourceTypes }|null);
            entityType: teads.api.EntityType;
            entityCurrency: string;
        }

        class GetAccountResponse implements IGetAccountResponse {
            constructor(properties?: teads.api.IGetAccountResponse);
            public entityName: string;
            public accountType: teads.api.AccountType;
            public profile: teads.api.GetAccountResponse.IProfile;
            public roles: string[];
            public resourceTypesByPermission: { [k: string]: teads.api.GetAccountResponse.IResourceTypes };
            public entityType: teads.api.EntityType;
            public entityCurrency: string;
            public static create(properties?: teads.api.IGetAccountResponse): teads.api.GetAccountResponse;
            public static encode(message: teads.api.IGetAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGetAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetAccountResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetAccountResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GetAccountResponse;
            public static toObject(message: teads.api.GetAccountResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GetAccountResponse {

            interface IProfile {
                email: string;
                firstname?: (string|null);
                lastname?: (string|null);
                locale: string;
                timezone?: (string|null);
                status: teads.api.ProfileStatus;
                createdAt?: (google.protobuf.ITimestamp|null);
            }

            class Profile implements IProfile {
                constructor(properties?: teads.api.GetAccountResponse.IProfile);
                public email: string;
                public firstname: string;
                public lastname: string;
                public locale: string;
                public timezone: string;
                public status: teads.api.ProfileStatus;
                public createdAt?: (google.protobuf.ITimestamp|null);
                public static create(properties?: teads.api.GetAccountResponse.IProfile): teads.api.GetAccountResponse.Profile;
                public static encode(message: teads.api.GetAccountResponse.IProfile, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.GetAccountResponse.IProfile, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetAccountResponse.Profile;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetAccountResponse.Profile;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.GetAccountResponse.Profile;
                public static toObject(message: teads.api.GetAccountResponse.Profile, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IResourceTypes {
                values?: (string[]|null);
            }

            class ResourceTypes implements IResourceTypes {
                constructor(properties?: teads.api.GetAccountResponse.IResourceTypes);
                public values: string[];
                public static create(properties?: teads.api.GetAccountResponse.IResourceTypes): teads.api.GetAccountResponse.ResourceTypes;
                public static encode(message: teads.api.GetAccountResponse.IResourceTypes, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.GetAccountResponse.IResourceTypes, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetAccountResponse.ResourceTypes;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetAccountResponse.ResourceTypes;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.GetAccountResponse.ResourceTypes;
                public static toObject(message: teads.api.GetAccountResponse.ResourceTypes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IGetAdvertiserFirstPartySegmentsRequest {
            securityContext: teads.api.ISecurityContext;
            mappings?: (teads.api.GetAdvertiserFirstPartySegmentsRequest.IMapping[]|null);
        }

        class GetAdvertiserFirstPartySegmentsRequest implements IGetAdvertiserFirstPartySegmentsRequest {
            constructor(properties?: teads.api.IGetAdvertiserFirstPartySegmentsRequest);
            public securityContext: teads.api.ISecurityContext;
            public mappings: teads.api.GetAdvertiserFirstPartySegmentsRequest.IMapping[];
            public static create(properties?: teads.api.IGetAdvertiserFirstPartySegmentsRequest): teads.api.GetAdvertiserFirstPartySegmentsRequest;
            public static encode(message: teads.api.IGetAdvertiserFirstPartySegmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGetAdvertiserFirstPartySegmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetAdvertiserFirstPartySegmentsRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetAdvertiserFirstPartySegmentsRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GetAdvertiserFirstPartySegmentsRequest;
            public static toObject(message: teads.api.GetAdvertiserFirstPartySegmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GetAdvertiserFirstPartySegmentsRequest {

            interface IMapping {
                segmentProvider: string;
                providerSegmentIds?: (string[]|null);
            }

            class Mapping implements IMapping {
                constructor(properties?: teads.api.GetAdvertiserFirstPartySegmentsRequest.IMapping);
                public segmentProvider: string;
                public providerSegmentIds: string[];
                public static create(properties?: teads.api.GetAdvertiserFirstPartySegmentsRequest.IMapping): teads.api.GetAdvertiserFirstPartySegmentsRequest.Mapping;
                public static encode(message: teads.api.GetAdvertiserFirstPartySegmentsRequest.IMapping, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.GetAdvertiserFirstPartySegmentsRequest.IMapping, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetAdvertiserFirstPartySegmentsRequest.Mapping;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetAdvertiserFirstPartySegmentsRequest.Mapping;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.GetAdvertiserFirstPartySegmentsRequest.Mapping;
                public static toObject(message: teads.api.GetAdvertiserFirstPartySegmentsRequest.Mapping, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IGetAdvertiserFirstPartySegmentsResponse {
            segments?: (teads.api.GetAdvertiserFirstPartySegmentsResponse.IAdvertiserFirstPartySegment[]|null);
        }

        class GetAdvertiserFirstPartySegmentsResponse implements IGetAdvertiserFirstPartySegmentsResponse {
            constructor(properties?: teads.api.IGetAdvertiserFirstPartySegmentsResponse);
            public segments: teads.api.GetAdvertiserFirstPartySegmentsResponse.IAdvertiserFirstPartySegment[];
            public static create(properties?: teads.api.IGetAdvertiserFirstPartySegmentsResponse): teads.api.GetAdvertiserFirstPartySegmentsResponse;
            public static encode(message: teads.api.IGetAdvertiserFirstPartySegmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGetAdvertiserFirstPartySegmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetAdvertiserFirstPartySegmentsResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetAdvertiserFirstPartySegmentsResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GetAdvertiserFirstPartySegmentsResponse;
            public static toObject(message: teads.api.GetAdvertiserFirstPartySegmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GetAdvertiserFirstPartySegmentsResponse {

            interface IAdvertiserFirstPartySegment {
                providerSegmentId: number;
                segmentLabel: string;
                segmentProvider: string;
                advertiserId?: (number|null);
                advertiserName?: (string|null);
                isCtvUsable?: (boolean|null);
            }

            class AdvertiserFirstPartySegment implements IAdvertiserFirstPartySegment {
                constructor(properties?: teads.api.GetAdvertiserFirstPartySegmentsResponse.IAdvertiserFirstPartySegment);
                public providerSegmentId: number;
                public segmentLabel: string;
                public segmentProvider: string;
                public advertiserId: number;
                public advertiserName: string;
                public isCtvUsable: boolean;
                public static create(properties?: teads.api.GetAdvertiserFirstPartySegmentsResponse.IAdvertiserFirstPartySegment): teads.api.GetAdvertiserFirstPartySegmentsResponse.AdvertiserFirstPartySegment;
                public static encode(message: teads.api.GetAdvertiserFirstPartySegmentsResponse.IAdvertiserFirstPartySegment, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.GetAdvertiserFirstPartySegmentsResponse.IAdvertiserFirstPartySegment, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetAdvertiserFirstPartySegmentsResponse.AdvertiserFirstPartySegment;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetAdvertiserFirstPartySegmentsResponse.AdvertiserFirstPartySegment;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.GetAdvertiserFirstPartySegmentsResponse.AdvertiserFirstPartySegment;
                public static toObject(message: teads.api.GetAdvertiserFirstPartySegmentsResponse.AdvertiserFirstPartySegment, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IGetAllCustomTargetingReasonsRequest {
            securityContext: teads.api.ISecurityContext;
            activeOnly?: (boolean|null);
        }

        class GetAllCustomTargetingReasonsRequest implements IGetAllCustomTargetingReasonsRequest {
            constructor(properties?: teads.api.IGetAllCustomTargetingReasonsRequest);
            public securityContext: teads.api.ISecurityContext;
            public activeOnly: boolean;
            public static create(properties?: teads.api.IGetAllCustomTargetingReasonsRequest): teads.api.GetAllCustomTargetingReasonsRequest;
            public static encode(message: teads.api.IGetAllCustomTargetingReasonsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGetAllCustomTargetingReasonsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetAllCustomTargetingReasonsRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetAllCustomTargetingReasonsRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GetAllCustomTargetingReasonsRequest;
            public static toObject(message: teads.api.GetAllCustomTargetingReasonsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IGetAllCustomTargetingReasonsResponse {
            reasons?: (teads.api.GetAllCustomTargetingReasonsResponse.IReason[]|null);
        }

        class GetAllCustomTargetingReasonsResponse implements IGetAllCustomTargetingReasonsResponse {
            constructor(properties?: teads.api.IGetAllCustomTargetingReasonsResponse);
            public reasons: teads.api.GetAllCustomTargetingReasonsResponse.IReason[];
            public static create(properties?: teads.api.IGetAllCustomTargetingReasonsResponse): teads.api.GetAllCustomTargetingReasonsResponse;
            public static encode(message: teads.api.IGetAllCustomTargetingReasonsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGetAllCustomTargetingReasonsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetAllCustomTargetingReasonsResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetAllCustomTargetingReasonsResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GetAllCustomTargetingReasonsResponse;
            public static toObject(message: teads.api.GetAllCustomTargetingReasonsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GetAllCustomTargetingReasonsResponse {

            interface IReason {
                id: number;
                label: string;
            }

            class Reason implements IReason {
                constructor(properties?: teads.api.GetAllCustomTargetingReasonsResponse.IReason);
                public id: number;
                public label: string;
                public static create(properties?: teads.api.GetAllCustomTargetingReasonsResponse.IReason): teads.api.GetAllCustomTargetingReasonsResponse.Reason;
                public static encode(message: teads.api.GetAllCustomTargetingReasonsResponse.IReason, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.GetAllCustomTargetingReasonsResponse.IReason, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetAllCustomTargetingReasonsResponse.Reason;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetAllCustomTargetingReasonsResponse.Reason;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.GetAllCustomTargetingReasonsResponse.Reason;
                public static toObject(message: teads.api.GetAllCustomTargetingReasonsResponse.Reason, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IGetBuyerSeatRequest {
            securityContext: teads.api.ISecurityContext;
            seatId: number;
        }

        class GetBuyerSeatRequest implements IGetBuyerSeatRequest {
            constructor(properties?: teads.api.IGetBuyerSeatRequest);
            public securityContext: teads.api.ISecurityContext;
            public seatId: number;
            public static create(properties?: teads.api.IGetBuyerSeatRequest): teads.api.GetBuyerSeatRequest;
            public static encode(message: teads.api.IGetBuyerSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGetBuyerSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetBuyerSeatRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetBuyerSeatRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GetBuyerSeatRequest;
            public static toObject(message: teads.api.GetBuyerSeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IGetBuyerSeatResponse {
            seatId: number;
            office: teads.api.GetBuyerSeatResponse.IOfficeInfo;
            name: string;
            serviceLevel: teads.api.BuyerServiceLevel;
            status: teads.api.BuyerSeatStatus;
            msaType?: (teads.api.MsaType|null);
            type: teads.api.BuyerSeatType;
            fee: number;
            historyItems?: (teads.api.GetBuyerSeatResponse.ISeatHistoryItemInfo[]|null);
            createdAt: google.protobuf.ITimestamp;
            entityId: number;
            clientMsa: teads.api.BuyerSeatStatusFlag;
            clientBillingDetails: teads.api.BuyerSeatStatusFlag;
            teadsFinanceApproval: teads.api.BuyerSeatStatusFlag;
            salesforceId?: (string|null);
            contractId?: (string|null);
            agencyId?: (number|null);
            advertiserId?: (number|null);
            salesforceSeatId?: (string|null);
        }

        class GetBuyerSeatResponse implements IGetBuyerSeatResponse {
            constructor(properties?: teads.api.IGetBuyerSeatResponse);
            public seatId: number;
            public office: teads.api.GetBuyerSeatResponse.IOfficeInfo;
            public name: string;
            public serviceLevel: teads.api.BuyerServiceLevel;
            public status: teads.api.BuyerSeatStatus;
            public msaType: teads.api.MsaType;
            public type: teads.api.BuyerSeatType;
            public fee: number;
            public historyItems: teads.api.GetBuyerSeatResponse.ISeatHistoryItemInfo[];
            public createdAt: google.protobuf.ITimestamp;
            public entityId: number;
            public clientMsa: teads.api.BuyerSeatStatusFlag;
            public clientBillingDetails: teads.api.BuyerSeatStatusFlag;
            public teadsFinanceApproval: teads.api.BuyerSeatStatusFlag;
            public salesforceId: string;
            public contractId: string;
            public agencyId?: (number|null);
            public advertiserId?: (number|null);
            public salesforceSeatId: string;
            public buyerId?: ("agencyId"|"advertiserId");
            public static create(properties?: teads.api.IGetBuyerSeatResponse): teads.api.GetBuyerSeatResponse;
            public static encode(message: teads.api.IGetBuyerSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGetBuyerSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetBuyerSeatResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetBuyerSeatResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GetBuyerSeatResponse;
            public static toObject(message: teads.api.GetBuyerSeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GetBuyerSeatResponse {

            interface IOfficeInfo {
                officeId: number;
                officeName: string;
            }

            class OfficeInfo implements IOfficeInfo {
                constructor(properties?: teads.api.GetBuyerSeatResponse.IOfficeInfo);
                public officeId: number;
                public officeName: string;
                public static create(properties?: teads.api.GetBuyerSeatResponse.IOfficeInfo): teads.api.GetBuyerSeatResponse.OfficeInfo;
                public static encode(message: teads.api.GetBuyerSeatResponse.IOfficeInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.GetBuyerSeatResponse.IOfficeInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetBuyerSeatResponse.OfficeInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetBuyerSeatResponse.OfficeInfo;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.GetBuyerSeatResponse.OfficeInfo;
                public static toObject(message: teads.api.GetBuyerSeatResponse.OfficeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IProfile {
                profileId: number;
                email: string;
            }

            class Profile implements IProfile {
                constructor(properties?: teads.api.GetBuyerSeatResponse.IProfile);
                public profileId: number;
                public email: string;
                public static create(properties?: teads.api.GetBuyerSeatResponse.IProfile): teads.api.GetBuyerSeatResponse.Profile;
                public static encode(message: teads.api.GetBuyerSeatResponse.IProfile, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.GetBuyerSeatResponse.IProfile, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetBuyerSeatResponse.Profile;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetBuyerSeatResponse.Profile;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.GetBuyerSeatResponse.Profile;
                public static toObject(message: teads.api.GetBuyerSeatResponse.Profile, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface ISeatHistoryItemInfo {
                id: number;
                seatId: number;
                profile: teads.api.GetBuyerSeatResponse.IProfile;
                resourceName: string;
                oldValue?: (string|null);
                newValue: string;
                createdAt: google.protobuf.ITimestamp;
            }

            class SeatHistoryItemInfo implements ISeatHistoryItemInfo {
                constructor(properties?: teads.api.GetBuyerSeatResponse.ISeatHistoryItemInfo);
                public id: number;
                public seatId: number;
                public profile: teads.api.GetBuyerSeatResponse.IProfile;
                public resourceName: string;
                public oldValue: string;
                public newValue: string;
                public createdAt: google.protobuf.ITimestamp;
                public static create(properties?: teads.api.GetBuyerSeatResponse.ISeatHistoryItemInfo): teads.api.GetBuyerSeatResponse.SeatHistoryItemInfo;
                public static encode(message: teads.api.GetBuyerSeatResponse.ISeatHistoryItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.GetBuyerSeatResponse.ISeatHistoryItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetBuyerSeatResponse.SeatHistoryItemInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetBuyerSeatResponse.SeatHistoryItemInfo;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.GetBuyerSeatResponse.SeatHistoryItemInfo;
                public static toObject(message: teads.api.GetBuyerSeatResponse.SeatHistoryItemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IGetOfficeRequest {
            securityContext: teads.api.ISecurityContext;
            officeId: number;
        }

        class GetOfficeRequest implements IGetOfficeRequest {
            constructor(properties?: teads.api.IGetOfficeRequest);
            public securityContext: teads.api.ISecurityContext;
            public officeId: number;
            public static create(properties?: teads.api.IGetOfficeRequest): teads.api.GetOfficeRequest;
            public static encode(message: teads.api.IGetOfficeRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGetOfficeRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetOfficeRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetOfficeRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GetOfficeRequest;
            public static toObject(message: teads.api.GetOfficeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IGetOfficeResponse {
            officeId: number;
            officeName: string;
            officeAddress?: (string|null);
        }

        class GetOfficeResponse implements IGetOfficeResponse {
            constructor(properties?: teads.api.IGetOfficeResponse);
            public officeId: number;
            public officeName: string;
            public officeAddress: string;
            public static create(properties?: teads.api.IGetOfficeResponse): teads.api.GetOfficeResponse;
            public static encode(message: teads.api.IGetOfficeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGetOfficeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetOfficeResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetOfficeResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GetOfficeResponse;
            public static toObject(message: teads.api.GetOfficeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IGetSalesforceOpportunityRequest {
            securityContext: teads.api.ISecurityContext;
            opportunityId: string;
        }

        class GetSalesforceOpportunityRequest implements IGetSalesforceOpportunityRequest {
            constructor(properties?: teads.api.IGetSalesforceOpportunityRequest);
            public securityContext: teads.api.ISecurityContext;
            public opportunityId: string;
            public static create(properties?: teads.api.IGetSalesforceOpportunityRequest): teads.api.GetSalesforceOpportunityRequest;
            public static encode(message: teads.api.IGetSalesforceOpportunityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGetSalesforceOpportunityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetSalesforceOpportunityRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetSalesforceOpportunityRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GetSalesforceOpportunityRequest;
            public static toObject(message: teads.api.GetSalesforceOpportunityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IGetSalesforceOpportunityResponse {
            opportunityId: string;
            name: string;
            agencyId: number;
            advertiserId: number;
            officeId: number;
            opportunityCurrency: string;
            opportunityTimezone: string;
            invoiceReferenceNumber: string;
            iabCategoryId: number;
            opportunityLineItems?: (teads.api.GetSalesforceOpportunityResponse.ISalesforceOpportunityLineItem[]|null);
            canBeSynchronized: boolean;
            advertiserName?: (string|null);
            agencyName?: (string|null);
            sellerEmail: string;
            isMoatUnsampled?: (boolean|null);
            version?: (teads.api.GetSalesforceOpportunityResponse.Version|null);
        }

        class GetSalesforceOpportunityResponse implements IGetSalesforceOpportunityResponse {
            constructor(properties?: teads.api.IGetSalesforceOpportunityResponse);
            public opportunityId: string;
            public name: string;
            public agencyId: number;
            public advertiserId: number;
            public officeId: number;
            public opportunityCurrency: string;
            public opportunityTimezone: string;
            public invoiceReferenceNumber: string;
            public iabCategoryId: number;
            public opportunityLineItems: teads.api.GetSalesforceOpportunityResponse.ISalesforceOpportunityLineItem[];
            public canBeSynchronized: boolean;
            public advertiserName: string;
            public agencyName: string;
            public sellerEmail: string;
            public isMoatUnsampled: boolean;
            public version: teads.api.GetSalesforceOpportunityResponse.Version;
            public static create(properties?: teads.api.IGetSalesforceOpportunityResponse): teads.api.GetSalesforceOpportunityResponse;
            public static encode(message: teads.api.IGetSalesforceOpportunityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGetSalesforceOpportunityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetSalesforceOpportunityResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetSalesforceOpportunityResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GetSalesforceOpportunityResponse;
            public static toObject(message: teads.api.GetSalesforceOpportunityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GetSalesforceOpportunityResponse {

            interface ISalesforceOpportunityLineItem {
                id: string;
                name: string;
                objective: teads.api.GetSalesforceOpportunityResponse.Objective;
                startDate: google.protobuf.ITimestamp;
                endDate: google.protobuf.ITimestamp;
                budget: number;
                billableVolume: number;
                freeBudget: number;
                freeBillableVolume: number;
                salesforceGeo: string;
                salesforceCreatives?: (string|null);
                billingModel?: (teads.api.GetSalesforceOpportunityResponse.BillingModel|null);
                billingModelRate?: (number|null);
                billingEvent?: (string|null);
                auctionType?: (teads.api.GetSalesforceOpportunityResponse.AuctionType|null);
                creativeTypeFamily?: (teads.api.GetSalesforceOpportunityResponse.CreativeTypeFamily|null);
                isGuaranteed?: (boolean|null);
                advertisingSolutionId: teads.api.GetSalesforceOpportunityResponse.AdvertisingSolutionId;
            }

            class SalesforceOpportunityLineItem implements ISalesforceOpportunityLineItem {
                constructor(properties?: teads.api.GetSalesforceOpportunityResponse.ISalesforceOpportunityLineItem);
                public id: string;
                public name: string;
                public objective: teads.api.GetSalesforceOpportunityResponse.Objective;
                public startDate: google.protobuf.ITimestamp;
                public endDate: google.protobuf.ITimestamp;
                public budget: number;
                public billableVolume: number;
                public freeBudget: number;
                public freeBillableVolume: number;
                public salesforceGeo: string;
                public salesforceCreatives: string;
                public billingModel: teads.api.GetSalesforceOpportunityResponse.BillingModel;
                public billingModelRate: number;
                public billingEvent: string;
                public auctionType: teads.api.GetSalesforceOpportunityResponse.AuctionType;
                public creativeTypeFamily: teads.api.GetSalesforceOpportunityResponse.CreativeTypeFamily;
                public isGuaranteed: boolean;
                public advertisingSolutionId: teads.api.GetSalesforceOpportunityResponse.AdvertisingSolutionId;
                public static create(properties?: teads.api.GetSalesforceOpportunityResponse.ISalesforceOpportunityLineItem): teads.api.GetSalesforceOpportunityResponse.SalesforceOpportunityLineItem;
                public static encode(message: teads.api.GetSalesforceOpportunityResponse.ISalesforceOpportunityLineItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.GetSalesforceOpportunityResponse.ISalesforceOpportunityLineItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GetSalesforceOpportunityResponse.SalesforceOpportunityLineItem;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GetSalesforceOpportunityResponse.SalesforceOpportunityLineItem;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.GetSalesforceOpportunityResponse.SalesforceOpportunityLineItem;
                public static toObject(message: teads.api.GetSalesforceOpportunityResponse.SalesforceOpportunityLineItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            enum AdvertisingSolutionId {
                ADVERTISING_SOLUTION_ID_AWARENESS = 1,
                ADVERTISING_SOLUTION_ID_TA_CLICKS = 2,
                ADVERTISING_SOLUTION_ID_TA_VISITS = 3,
                ADVERTISING_SOLUTION_ID_TA_MIXED = 4,
                ADVERTISING_SOLUTION_ID_WEBSITE_CONVERSIONS = 5,
                ADVERTISING_SOLUTION_ID_SEAMLESS_COMMERCE = 6,
                ADVERTISING_SOLUTION_ID_TA_CLICKS_GUARANTEED_CPC = 7,
                ADVERTISING_SOLUTION_ID_TA_VISITS_GUARANTEED_CPC = 8
            }

            enum AuctionType {
                AUCTION_TYPE_FIXED = 1,
                AUCTION_TYPE_DYNAMIC = 2
            }

            enum BillingModel {
                BILLING_MODEL_CPM = 1,
                BILLING_MODEL_VCPM = 2,
                BILLING_MODEL_CPCV = 3,
                BILLING_MODEL_CPC = 4,
                BILLING_MODEL_CPV = 5
            }

            enum CreativeTypeFamily {
                CREATIVE_TYPE_FAMILY_VIDEO = 1,
                CREATIVE_TYPE_FAMILY_DISPLAY = 2
            }

            enum Objective {
                OBJECTIVE_TRAFFIC_ACQUISITION = 1,
                OBJECTIVE_BRANDING = 2,
                OBJECTIVE_CONVERSIONS = 3
            }

            enum Version {
                VERSION_LEGACY_MANAGED = 1,
                VERSION_TAM_V1 = 2,
                VERSION_TAM_V2 = 3
            }
        }

        interface IGrantAdminRoleForBuyerRequest {
            securityContext: teads.api.ISecurityContext;
            profileId: number;
            entityId: number;
        }

        class GrantAdminRoleForBuyerRequest implements IGrantAdminRoleForBuyerRequest {
            constructor(properties?: teads.api.IGrantAdminRoleForBuyerRequest);
            public securityContext: teads.api.ISecurityContext;
            public profileId: number;
            public entityId: number;
            public static create(properties?: teads.api.IGrantAdminRoleForBuyerRequest): teads.api.GrantAdminRoleForBuyerRequest;
            public static encode(message: teads.api.IGrantAdminRoleForBuyerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGrantAdminRoleForBuyerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GrantAdminRoleForBuyerRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GrantAdminRoleForBuyerRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GrantAdminRoleForBuyerRequest;
            public static toObject(message: teads.api.GrantAdminRoleForBuyerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IGrantAdminRoleForBuyerResponse {
        }

        class GrantAdminRoleForBuyerResponse implements IGrantAdminRoleForBuyerResponse {
            constructor(properties?: teads.api.IGrantAdminRoleForBuyerResponse);
            public static create(properties?: teads.api.IGrantAdminRoleForBuyerResponse): teads.api.GrantAdminRoleForBuyerResponse;
            public static encode(message: teads.api.IGrantAdminRoleForBuyerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IGrantAdminRoleForBuyerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.GrantAdminRoleForBuyerResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.GrantAdminRoleForBuyerResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.GrantAdminRoleForBuyerResponse;
            public static toObject(message: teads.api.GrantAdminRoleForBuyerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IListCustomTargetingRulesForCampaignRequest {
            securityContext: teads.api.ISecurityContext;
            campaignId: number;
        }

        class ListCustomTargetingRulesForCampaignRequest implements IListCustomTargetingRulesForCampaignRequest {
            constructor(properties?: teads.api.IListCustomTargetingRulesForCampaignRequest);
            public securityContext: teads.api.ISecurityContext;
            public campaignId: number;
            public static create(properties?: teads.api.IListCustomTargetingRulesForCampaignRequest): teads.api.ListCustomTargetingRulesForCampaignRequest;
            public static encode(message: teads.api.IListCustomTargetingRulesForCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IListCustomTargetingRulesForCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.ListCustomTargetingRulesForCampaignRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.ListCustomTargetingRulesForCampaignRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.ListCustomTargetingRulesForCampaignRequest;
            public static toObject(message: teads.api.ListCustomTargetingRulesForCampaignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IListCustomTargetingRulesForCampaignResponse {
            rules?: (teads.api.ListCustomTargetingRulesForCampaignResponse.IRule[]|null);
        }

        class ListCustomTargetingRulesForCampaignResponse implements IListCustomTargetingRulesForCampaignResponse {
            constructor(properties?: teads.api.IListCustomTargetingRulesForCampaignResponse);
            public rules: teads.api.ListCustomTargetingRulesForCampaignResponse.IRule[];
            public static create(properties?: teads.api.IListCustomTargetingRulesForCampaignResponse): teads.api.ListCustomTargetingRulesForCampaignResponse;
            public static encode(message: teads.api.IListCustomTargetingRulesForCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IListCustomTargetingRulesForCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.ListCustomTargetingRulesForCampaignResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.ListCustomTargetingRulesForCampaignResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.ListCustomTargetingRulesForCampaignResponse;
            public static toObject(message: teads.api.ListCustomTargetingRulesForCampaignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ListCustomTargetingRulesForCampaignResponse {

            interface IReason {
                id: number;
                label: string;
            }

            class Reason implements IReason {
                constructor(properties?: teads.api.ListCustomTargetingRulesForCampaignResponse.IReason);
                public id: number;
                public label: string;
                public static create(properties?: teads.api.ListCustomTargetingRulesForCampaignResponse.IReason): teads.api.ListCustomTargetingRulesForCampaignResponse.Reason;
                public static encode(message: teads.api.ListCustomTargetingRulesForCampaignResponse.IReason, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.ListCustomTargetingRulesForCampaignResponse.IReason, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.ListCustomTargetingRulesForCampaignResponse.Reason;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.ListCustomTargetingRulesForCampaignResponse.Reason;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.ListCustomTargetingRulesForCampaignResponse.Reason;
                public static toObject(message: teads.api.ListCustomTargetingRulesForCampaignResponse.Reason, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IRule {
                id: number;
                name: string;
                tblString: string;
                demographicAudiencesDeliveryType: teads.api.CustomTargetingRuleAudiencesDeliveryType;
                otherAudiencesAccuracyLevel: teads.api.CustomTargetingRuleAudiencesAccuracyLevel;
                cookielessCriteriaOnly: boolean;
                description: string;
                reason: teads.api.ListCustomTargetingRulesForCampaignResponse.IReason;
                channel?: (teads.api.CustomTargetingEnvironmentChannel|null);
            }

            class Rule implements IRule {
                constructor(properties?: teads.api.ListCustomTargetingRulesForCampaignResponse.IRule);
                public id: number;
                public name: string;
                public tblString: string;
                public demographicAudiencesDeliveryType: teads.api.CustomTargetingRuleAudiencesDeliveryType;
                public otherAudiencesAccuracyLevel: teads.api.CustomTargetingRuleAudiencesAccuracyLevel;
                public cookielessCriteriaOnly: boolean;
                public description: string;
                public reason: teads.api.ListCustomTargetingRulesForCampaignResponse.IReason;
                public channel: teads.api.CustomTargetingEnvironmentChannel;
                public static create(properties?: teads.api.ListCustomTargetingRulesForCampaignResponse.IRule): teads.api.ListCustomTargetingRulesForCampaignResponse.Rule;
                public static encode(message: teads.api.ListCustomTargetingRulesForCampaignResponse.IRule, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.ListCustomTargetingRulesForCampaignResponse.IRule, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.ListCustomTargetingRulesForCampaignResponse.Rule;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.ListCustomTargetingRulesForCampaignResponse.Rule;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.ListCustomTargetingRulesForCampaignResponse.Rule;
                public static toObject(message: teads.api.ListCustomTargetingRulesForCampaignResponse.Rule, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IListOfficesRequest {
            securityContext: teads.api.ISecurityContext;
        }

        class ListOfficesRequest implements IListOfficesRequest {
            constructor(properties?: teads.api.IListOfficesRequest);
            public securityContext: teads.api.ISecurityContext;
            public static create(properties?: teads.api.IListOfficesRequest): teads.api.ListOfficesRequest;
            public static encode(message: teads.api.IListOfficesRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IListOfficesRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.ListOfficesRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.ListOfficesRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.ListOfficesRequest;
            public static toObject(message: teads.api.ListOfficesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IListOfficesResponse {
            offices?: (teads.api.ListOfficesResponse.IListOffice[]|null);
        }

        class ListOfficesResponse implements IListOfficesResponse {
            constructor(properties?: teads.api.IListOfficesResponse);
            public offices: teads.api.ListOfficesResponse.IListOffice[];
            public static create(properties?: teads.api.IListOfficesResponse): teads.api.ListOfficesResponse;
            public static encode(message: teads.api.IListOfficesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IListOfficesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.ListOfficesResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.ListOfficesResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.ListOfficesResponse;
            public static toObject(message: teads.api.ListOfficesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ListOfficesResponse {

            interface IListOffice {
                officeId: number;
                officeName: string;
            }

            class ListOffice implements IListOffice {
                constructor(properties?: teads.api.ListOfficesResponse.IListOffice);
                public officeId: number;
                public officeName: string;
                public static create(properties?: teads.api.ListOfficesResponse.IListOffice): teads.api.ListOfficesResponse.ListOffice;
                public static encode(message: teads.api.ListOfficesResponse.IListOffice, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.ListOfficesResponse.IListOffice, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.ListOfficesResponse.ListOffice;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.ListOfficesResponse.ListOffice;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.ListOfficesResponse.ListOffice;
                public static toObject(message: teads.api.ListOfficesResponse.ListOffice, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IMarkTeadsFinanceApprovalFilledForSeatRequest {
            securityContext: teads.api.ISecurityContext;
            seatId: number;
        }

        class MarkTeadsFinanceApprovalFilledForSeatRequest implements IMarkTeadsFinanceApprovalFilledForSeatRequest {
            constructor(properties?: teads.api.IMarkTeadsFinanceApprovalFilledForSeatRequest);
            public securityContext: teads.api.ISecurityContext;
            public seatId: number;
            public static create(properties?: teads.api.IMarkTeadsFinanceApprovalFilledForSeatRequest): teads.api.MarkTeadsFinanceApprovalFilledForSeatRequest;
            public static encode(message: teads.api.IMarkTeadsFinanceApprovalFilledForSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IMarkTeadsFinanceApprovalFilledForSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.MarkTeadsFinanceApprovalFilledForSeatRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.MarkTeadsFinanceApprovalFilledForSeatRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.MarkTeadsFinanceApprovalFilledForSeatRequest;
            public static toObject(message: teads.api.MarkTeadsFinanceApprovalFilledForSeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IMarkTeadsFinanceApprovalFilledForSeatResponse {
            seatStatus: teads.api.BuyerSeatStatus;
        }

        class MarkTeadsFinanceApprovalFilledForSeatResponse implements IMarkTeadsFinanceApprovalFilledForSeatResponse {
            constructor(properties?: teads.api.IMarkTeadsFinanceApprovalFilledForSeatResponse);
            public seatStatus: teads.api.BuyerSeatStatus;
            public static create(properties?: teads.api.IMarkTeadsFinanceApprovalFilledForSeatResponse): teads.api.MarkTeadsFinanceApprovalFilledForSeatResponse;
            public static encode(message: teads.api.IMarkTeadsFinanceApprovalFilledForSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IMarkTeadsFinanceApprovalFilledForSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.MarkTeadsFinanceApprovalFilledForSeatResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.MarkTeadsFinanceApprovalFilledForSeatResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.MarkTeadsFinanceApprovalFilledForSeatResponse;
            public static toObject(message: teads.api.MarkTeadsFinanceApprovalFilledForSeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IMigrateCampaignToManagedServiceRequest {
            securityContext: teads.api.ISecurityContext;
            campaignId: number;
            reason: teads.api.CampaignMigrationReason;
            details?: (string|null);
        }

        class MigrateCampaignToManagedServiceRequest implements IMigrateCampaignToManagedServiceRequest {
            constructor(properties?: teads.api.IMigrateCampaignToManagedServiceRequest);
            public securityContext: teads.api.ISecurityContext;
            public campaignId: number;
            public reason: teads.api.CampaignMigrationReason;
            public details: string;
            public static create(properties?: teads.api.IMigrateCampaignToManagedServiceRequest): teads.api.MigrateCampaignToManagedServiceRequest;
            public static encode(message: teads.api.IMigrateCampaignToManagedServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IMigrateCampaignToManagedServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.MigrateCampaignToManagedServiceRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.MigrateCampaignToManagedServiceRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.MigrateCampaignToManagedServiceRequest;
            public static toObject(message: teads.api.MigrateCampaignToManagedServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IMigrateCampaignToManagedServiceResponse {
        }

        class MigrateCampaignToManagedServiceResponse implements IMigrateCampaignToManagedServiceResponse {
            constructor(properties?: teads.api.IMigrateCampaignToManagedServiceResponse);
            public static create(properties?: teads.api.IMigrateCampaignToManagedServiceResponse): teads.api.MigrateCampaignToManagedServiceResponse;
            public static encode(message: teads.api.IMigrateCampaignToManagedServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IMigrateCampaignToManagedServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.MigrateCampaignToManagedServiceResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.MigrateCampaignToManagedServiceResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.MigrateCampaignToManagedServiceResponse;
            public static toObject(message: teads.api.MigrateCampaignToManagedServiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IPage {
            index?: (number|null);
            size?: (number|null);
        }

        class Page implements IPage {
            constructor(properties?: teads.api.IPage);
            public index: number;
            public size: number;
            public static create(properties?: teads.api.IPage): teads.api.Page;
            public static encode(message: teads.api.IPage, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IPage, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.Page;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.Page;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.Page;
            public static toObject(message: teads.api.Page, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IPagination {
            index: number;
            size: number;
            totalElements: number;
            totalPages: number;
        }

        class Pagination implements IPagination {
            constructor(properties?: teads.api.IPagination);
            public index: number;
            public size: number;
            public totalElements: number;
            public totalPages: number;
            public static create(properties?: teads.api.IPagination): teads.api.Pagination;
            public static encode(message: teads.api.IPagination, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IPagination, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.Pagination;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.Pagination;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.Pagination;
            public static toObject(message: teads.api.Pagination, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IRemoveFirstPartySegmentFromWhitelistForSeatRequest {
            securityContext: teads.api.ISecurityContext;
            segment: teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest.IAdvertiserFirstPartySegment;
            entityId: number;
        }

        class RemoveFirstPartySegmentFromWhitelistForSeatRequest implements IRemoveFirstPartySegmentFromWhitelistForSeatRequest {
            constructor(properties?: teads.api.IRemoveFirstPartySegmentFromWhitelistForSeatRequest);
            public securityContext: teads.api.ISecurityContext;
            public segment: teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest.IAdvertiserFirstPartySegment;
            public entityId: number;
            public static create(properties?: teads.api.IRemoveFirstPartySegmentFromWhitelistForSeatRequest): teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest;
            public static encode(message: teads.api.IRemoveFirstPartySegmentFromWhitelistForSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IRemoveFirstPartySegmentFromWhitelistForSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest;
            public static toObject(message: teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RemoveFirstPartySegmentFromWhitelistForSeatRequest {

            interface IAdvertiserFirstPartySegment {
                segmentProvider: teads.api.AdvertiserFirstPartySegmentProvider;
                providerSegmentId: number;
            }

            class AdvertiserFirstPartySegment implements IAdvertiserFirstPartySegment {
                constructor(properties?: teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest.IAdvertiserFirstPartySegment);
                public segmentProvider: teads.api.AdvertiserFirstPartySegmentProvider;
                public providerSegmentId: number;
                public static create(properties?: teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest.IAdvertiserFirstPartySegment): teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest.AdvertiserFirstPartySegment;
                public static encode(message: teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest.IAdvertiserFirstPartySegment, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest.IAdvertiserFirstPartySegment, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest.AdvertiserFirstPartySegment;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest.AdvertiserFirstPartySegment;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest.AdvertiserFirstPartySegment;
                public static toObject(message: teads.api.RemoveFirstPartySegmentFromWhitelistForSeatRequest.AdvertiserFirstPartySegment, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IRemoveFirstPartySegmentFromWhitelistForSeatResponse {
        }

        class RemoveFirstPartySegmentFromWhitelistForSeatResponse implements IRemoveFirstPartySegmentFromWhitelistForSeatResponse {
            constructor(properties?: teads.api.IRemoveFirstPartySegmentFromWhitelistForSeatResponse);
            public static create(properties?: teads.api.IRemoveFirstPartySegmentFromWhitelistForSeatResponse): teads.api.RemoveFirstPartySegmentFromWhitelistForSeatResponse;
            public static encode(message: teads.api.IRemoveFirstPartySegmentFromWhitelistForSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IRemoveFirstPartySegmentFromWhitelistForSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.RemoveFirstPartySegmentFromWhitelistForSeatResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.RemoveFirstPartySegmentFromWhitelistForSeatResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.RemoveFirstPartySegmentFromWhitelistForSeatResponse;
            public static toObject(message: teads.api.RemoveFirstPartySegmentFromWhitelistForSeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IRevokeAdminRoleForBuyerRequest {
            securityContext: teads.api.ISecurityContext;
            profileId: number;
            entityId: number;
        }

        class RevokeAdminRoleForBuyerRequest implements IRevokeAdminRoleForBuyerRequest {
            constructor(properties?: teads.api.IRevokeAdminRoleForBuyerRequest);
            public securityContext: teads.api.ISecurityContext;
            public profileId: number;
            public entityId: number;
            public static create(properties?: teads.api.IRevokeAdminRoleForBuyerRequest): teads.api.RevokeAdminRoleForBuyerRequest;
            public static encode(message: teads.api.IRevokeAdminRoleForBuyerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IRevokeAdminRoleForBuyerRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.RevokeAdminRoleForBuyerRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.RevokeAdminRoleForBuyerRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.RevokeAdminRoleForBuyerRequest;
            public static toObject(message: teads.api.RevokeAdminRoleForBuyerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IRevokeAdminRoleForBuyerResponse {
        }

        class RevokeAdminRoleForBuyerResponse implements IRevokeAdminRoleForBuyerResponse {
            constructor(properties?: teads.api.IRevokeAdminRoleForBuyerResponse);
            public static create(properties?: teads.api.IRevokeAdminRoleForBuyerResponse): teads.api.RevokeAdminRoleForBuyerResponse;
            public static encode(message: teads.api.IRevokeAdminRoleForBuyerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IRevokeAdminRoleForBuyerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.RevokeAdminRoleForBuyerResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.RevokeAdminRoleForBuyerResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.RevokeAdminRoleForBuyerResponse;
            public static toObject(message: teads.api.RevokeAdminRoleForBuyerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISearchAdvertiserFirstPartySegmentsRequest {
            securityContext: teads.api.ISecurityContext;
            search?: (string|null);
            page: teads.api.IPage;
            advertiserId?: (number|null);
        }

        class SearchAdvertiserFirstPartySegmentsRequest implements ISearchAdvertiserFirstPartySegmentsRequest {
            constructor(properties?: teads.api.ISearchAdvertiserFirstPartySegmentsRequest);
            public securityContext: teads.api.ISecurityContext;
            public search: string;
            public page: teads.api.IPage;
            public advertiserId: number;
            public static create(properties?: teads.api.ISearchAdvertiserFirstPartySegmentsRequest): teads.api.SearchAdvertiserFirstPartySegmentsRequest;
            public static encode(message: teads.api.ISearchAdvertiserFirstPartySegmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISearchAdvertiserFirstPartySegmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchAdvertiserFirstPartySegmentsRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchAdvertiserFirstPartySegmentsRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SearchAdvertiserFirstPartySegmentsRequest;
            public static toObject(message: teads.api.SearchAdvertiserFirstPartySegmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISearchAdvertiserFirstPartySegmentsResponse {
            segments?: (teads.api.SearchAdvertiserFirstPartySegmentsResponse.IAdvertiserFirstPartySegment[]|null);
            total: number;
        }

        class SearchAdvertiserFirstPartySegmentsResponse implements ISearchAdvertiserFirstPartySegmentsResponse {
            constructor(properties?: teads.api.ISearchAdvertiserFirstPartySegmentsResponse);
            public segments: teads.api.SearchAdvertiserFirstPartySegmentsResponse.IAdvertiserFirstPartySegment[];
            public total: number;
            public static create(properties?: teads.api.ISearchAdvertiserFirstPartySegmentsResponse): teads.api.SearchAdvertiserFirstPartySegmentsResponse;
            public static encode(message: teads.api.ISearchAdvertiserFirstPartySegmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISearchAdvertiserFirstPartySegmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchAdvertiserFirstPartySegmentsResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchAdvertiserFirstPartySegmentsResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SearchAdvertiserFirstPartySegmentsResponse;
            public static toObject(message: teads.api.SearchAdvertiserFirstPartySegmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SearchAdvertiserFirstPartySegmentsResponse {

            interface IAdvertiserFirstPartySegment {
                providerSegmentId: number;
                segmentLabel: string;
                segmentProvider: string;
                advertiserId?: (number|null);
            }

            class AdvertiserFirstPartySegment implements IAdvertiserFirstPartySegment {
                constructor(properties?: teads.api.SearchAdvertiserFirstPartySegmentsResponse.IAdvertiserFirstPartySegment);
                public providerSegmentId: number;
                public segmentLabel: string;
                public segmentProvider: string;
                public advertiserId: number;
                public static create(properties?: teads.api.SearchAdvertiserFirstPartySegmentsResponse.IAdvertiserFirstPartySegment): teads.api.SearchAdvertiserFirstPartySegmentsResponse.AdvertiserFirstPartySegment;
                public static encode(message: teads.api.SearchAdvertiserFirstPartySegmentsResponse.IAdvertiserFirstPartySegment, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.SearchAdvertiserFirstPartySegmentsResponse.IAdvertiserFirstPartySegment, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchAdvertiserFirstPartySegmentsResponse.AdvertiserFirstPartySegment;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchAdvertiserFirstPartySegmentsResponse.AdvertiserFirstPartySegment;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.SearchAdvertiserFirstPartySegmentsResponse.AdvertiserFirstPartySegment;
                public static toObject(message: teads.api.SearchAdvertiserFirstPartySegmentsResponse.AdvertiserFirstPartySegment, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface ISearchAdvertisersForSeatManagementRequest {
            securityContext: teads.api.ISecurityContext;
            officeId: number;
            search?: (string|null);
            page: teads.api.IPage;
        }

        class SearchAdvertisersForSeatManagementRequest implements ISearchAdvertisersForSeatManagementRequest {
            constructor(properties?: teads.api.ISearchAdvertisersForSeatManagementRequest);
            public securityContext: teads.api.ISecurityContext;
            public officeId: number;
            public search: string;
            public page: teads.api.IPage;
            public static create(properties?: teads.api.ISearchAdvertisersForSeatManagementRequest): teads.api.SearchAdvertisersForSeatManagementRequest;
            public static encode(message: teads.api.ISearchAdvertisersForSeatManagementRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISearchAdvertisersForSeatManagementRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchAdvertisersForSeatManagementRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchAdvertisersForSeatManagementRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SearchAdvertisersForSeatManagementRequest;
            public static toObject(message: teads.api.SearchAdvertisersForSeatManagementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISearchAdvertisersForSeatManagementResponse {
            advertisers?: (teads.api.SearchAdvertisersForSeatManagementResponse.IAdvertiserForSeatManagementInfo[]|null);
        }

        class SearchAdvertisersForSeatManagementResponse implements ISearchAdvertisersForSeatManagementResponse {
            constructor(properties?: teads.api.ISearchAdvertisersForSeatManagementResponse);
            public advertisers: teads.api.SearchAdvertisersForSeatManagementResponse.IAdvertiserForSeatManagementInfo[];
            public static create(properties?: teads.api.ISearchAdvertisersForSeatManagementResponse): teads.api.SearchAdvertisersForSeatManagementResponse;
            public static encode(message: teads.api.ISearchAdvertisersForSeatManagementResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISearchAdvertisersForSeatManagementResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchAdvertisersForSeatManagementResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchAdvertisersForSeatManagementResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SearchAdvertisersForSeatManagementResponse;
            public static toObject(message: teads.api.SearchAdvertisersForSeatManagementResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SearchAdvertisersForSeatManagementResponse {

            interface IAdvertiserForSeatManagementInfo {
                advertiserId: number;
                salesforceId: string;
                name: string;
                description?: (string|null);
                hasBuyerSeat: boolean;
            }

            class AdvertiserForSeatManagementInfo implements IAdvertiserForSeatManagementInfo {
                constructor(properties?: teads.api.SearchAdvertisersForSeatManagementResponse.IAdvertiserForSeatManagementInfo);
                public advertiserId: number;
                public salesforceId: string;
                public name: string;
                public description: string;
                public hasBuyerSeat: boolean;
                public static create(properties?: teads.api.SearchAdvertisersForSeatManagementResponse.IAdvertiserForSeatManagementInfo): teads.api.SearchAdvertisersForSeatManagementResponse.AdvertiserForSeatManagementInfo;
                public static encode(message: teads.api.SearchAdvertisersForSeatManagementResponse.IAdvertiserForSeatManagementInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.SearchAdvertisersForSeatManagementResponse.IAdvertiserForSeatManagementInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchAdvertisersForSeatManagementResponse.AdvertiserForSeatManagementInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchAdvertisersForSeatManagementResponse.AdvertiserForSeatManagementInfo;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.SearchAdvertisersForSeatManagementResponse.AdvertiserForSeatManagementInfo;
                public static toObject(message: teads.api.SearchAdvertisersForSeatManagementResponse.AdvertiserForSeatManagementInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface ISearchAgenciesForSeatManagementRequest {
            securityContext: teads.api.ISecurityContext;
            officeIds?: (number[]|null);
            search?: (string|null);
            page: teads.api.IPage;
        }

        class SearchAgenciesForSeatManagementRequest implements ISearchAgenciesForSeatManagementRequest {
            constructor(properties?: teads.api.ISearchAgenciesForSeatManagementRequest);
            public securityContext: teads.api.ISecurityContext;
            public officeIds: number[];
            public search: string;
            public page: teads.api.IPage;
            public static create(properties?: teads.api.ISearchAgenciesForSeatManagementRequest): teads.api.SearchAgenciesForSeatManagementRequest;
            public static encode(message: teads.api.ISearchAgenciesForSeatManagementRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISearchAgenciesForSeatManagementRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchAgenciesForSeatManagementRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchAgenciesForSeatManagementRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SearchAgenciesForSeatManagementRequest;
            public static toObject(message: teads.api.SearchAgenciesForSeatManagementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISearchAgenciesForSeatManagementResponse {
            agencies?: (teads.api.SearchAgenciesForSeatManagementResponse.IAgencyForSeatManagementInfo[]|null);
        }

        class SearchAgenciesForSeatManagementResponse implements ISearchAgenciesForSeatManagementResponse {
            constructor(properties?: teads.api.ISearchAgenciesForSeatManagementResponse);
            public agencies: teads.api.SearchAgenciesForSeatManagementResponse.IAgencyForSeatManagementInfo[];
            public static create(properties?: teads.api.ISearchAgenciesForSeatManagementResponse): teads.api.SearchAgenciesForSeatManagementResponse;
            public static encode(message: teads.api.ISearchAgenciesForSeatManagementResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISearchAgenciesForSeatManagementResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchAgenciesForSeatManagementResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchAgenciesForSeatManagementResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SearchAgenciesForSeatManagementResponse;
            public static toObject(message: teads.api.SearchAgenciesForSeatManagementResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SearchAgenciesForSeatManagementResponse {

            interface IAgencyForSeatManagementInfo {
                agencyId: number;
                salesforceId: string;
                name: string;
                description?: (string|null);
                officesWithBuyerSeat?: (number[]|null);
                officeId: number;
            }

            class AgencyForSeatManagementInfo implements IAgencyForSeatManagementInfo {
                constructor(properties?: teads.api.SearchAgenciesForSeatManagementResponse.IAgencyForSeatManagementInfo);
                public agencyId: number;
                public salesforceId: string;
                public name: string;
                public description: string;
                public officesWithBuyerSeat: number[];
                public officeId: number;
                public static create(properties?: teads.api.SearchAgenciesForSeatManagementResponse.IAgencyForSeatManagementInfo): teads.api.SearchAgenciesForSeatManagementResponse.AgencyForSeatManagementInfo;
                public static encode(message: teads.api.SearchAgenciesForSeatManagementResponse.IAgencyForSeatManagementInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.SearchAgenciesForSeatManagementResponse.IAgencyForSeatManagementInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchAgenciesForSeatManagementResponse.AgencyForSeatManagementInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchAgenciesForSeatManagementResponse.AgencyForSeatManagementInfo;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.SearchAgenciesForSeatManagementResponse.AgencyForSeatManagementInfo;
                public static toObject(message: teads.api.SearchAgenciesForSeatManagementResponse.AgencyForSeatManagementInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface ISearchBuyerSeatsRequest {
            securityContext: teads.api.ISecurityContext;
            officeId: number;
            search?: (string|null);
            filters?: (teads.api.SearchBuyerSeatsRequest.IFilters|null);
            page: teads.api.IPage;
        }

        class SearchBuyerSeatsRequest implements ISearchBuyerSeatsRequest {
            constructor(properties?: teads.api.ISearchBuyerSeatsRequest);
            public securityContext: teads.api.ISecurityContext;
            public officeId: number;
            public search: string;
            public filters?: (teads.api.SearchBuyerSeatsRequest.IFilters|null);
            public page: teads.api.IPage;
            public static create(properties?: teads.api.ISearchBuyerSeatsRequest): teads.api.SearchBuyerSeatsRequest;
            public static encode(message: teads.api.ISearchBuyerSeatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISearchBuyerSeatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchBuyerSeatsRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchBuyerSeatsRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SearchBuyerSeatsRequest;
            public static toObject(message: teads.api.SearchBuyerSeatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SearchBuyerSeatsRequest {

            interface IFilters {
                serviceLevel?: (teads.api.BuyerServiceLevel|null);
                seatStatus?: (teads.api.BuyerSeatStatus|null);
                seatType?: (teads.api.BuyerSeatType|null);
            }

            class Filters implements IFilters {
                constructor(properties?: teads.api.SearchBuyerSeatsRequest.IFilters);
                public serviceLevel: teads.api.BuyerServiceLevel;
                public seatStatus: teads.api.BuyerSeatStatus;
                public seatType: teads.api.BuyerSeatType;
                public static create(properties?: teads.api.SearchBuyerSeatsRequest.IFilters): teads.api.SearchBuyerSeatsRequest.Filters;
                public static encode(message: teads.api.SearchBuyerSeatsRequest.IFilters, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.SearchBuyerSeatsRequest.IFilters, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchBuyerSeatsRequest.Filters;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchBuyerSeatsRequest.Filters;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.SearchBuyerSeatsRequest.Filters;
                public static toObject(message: teads.api.SearchBuyerSeatsRequest.Filters, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface ISearchBuyerSeatsResponse {
            seats?: (teads.api.SearchBuyerSeatsResponse.IBuyerSeat[]|null);
            pages: number;
        }

        class SearchBuyerSeatsResponse implements ISearchBuyerSeatsResponse {
            constructor(properties?: teads.api.ISearchBuyerSeatsResponse);
            public seats: teads.api.SearchBuyerSeatsResponse.IBuyerSeat[];
            public pages: number;
            public static create(properties?: teads.api.ISearchBuyerSeatsResponse): teads.api.SearchBuyerSeatsResponse;
            public static encode(message: teads.api.ISearchBuyerSeatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISearchBuyerSeatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchBuyerSeatsResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchBuyerSeatsResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SearchBuyerSeatsResponse;
            public static toObject(message: teads.api.SearchBuyerSeatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SearchBuyerSeatsResponse {

            interface IBuyerSeat {
                seatId: number;
                officeId: number;
                name: string;
                entity: teads.api.SearchBuyerSeatsResponse.IEntityInfo;
                existingSeatMember: boolean;
                serviceLevel: teads.api.BuyerServiceLevel;
                status: teads.api.BuyerSeatStatus;
                msaType?: (teads.api.MsaType|null);
                fee: number;
                createdAt?: (google.protobuf.ITimestamp|null);
                salesforceAccountId?: (string|null);
                salesforceContractId?: (string|null);
                agencyId?: (number|null);
                advertiserId?: (number|null);
            }

            class BuyerSeat implements IBuyerSeat {
                constructor(properties?: teads.api.SearchBuyerSeatsResponse.IBuyerSeat);
                public seatId: number;
                public officeId: number;
                public name: string;
                public entity: teads.api.SearchBuyerSeatsResponse.IEntityInfo;
                public existingSeatMember: boolean;
                public serviceLevel: teads.api.BuyerServiceLevel;
                public status: teads.api.BuyerSeatStatus;
                public msaType: teads.api.MsaType;
                public fee: number;
                public createdAt?: (google.protobuf.ITimestamp|null);
                public salesforceAccountId: string;
                public salesforceContractId: string;
                public agencyId?: (number|null);
                public advertiserId?: (number|null);
                public buyerId?: ("agencyId"|"advertiserId");
                public static create(properties?: teads.api.SearchBuyerSeatsResponse.IBuyerSeat): teads.api.SearchBuyerSeatsResponse.BuyerSeat;
                public static encode(message: teads.api.SearchBuyerSeatsResponse.IBuyerSeat, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.SearchBuyerSeatsResponse.IBuyerSeat, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchBuyerSeatsResponse.BuyerSeat;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchBuyerSeatsResponse.BuyerSeat;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.SearchBuyerSeatsResponse.BuyerSeat;
                public static toObject(message: teads.api.SearchBuyerSeatsResponse.BuyerSeat, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IEntityInfo {
                entityId: number;
                type: teads.api.BuyerSeatType;
                usersCount: teads.api.SearchBuyerSeatsResponse.IUsersCount;
            }

            class EntityInfo implements IEntityInfo {
                constructor(properties?: teads.api.SearchBuyerSeatsResponse.IEntityInfo);
                public entityId: number;
                public type: teads.api.BuyerSeatType;
                public usersCount: teads.api.SearchBuyerSeatsResponse.IUsersCount;
                public static create(properties?: teads.api.SearchBuyerSeatsResponse.IEntityInfo): teads.api.SearchBuyerSeatsResponse.EntityInfo;
                public static encode(message: teads.api.SearchBuyerSeatsResponse.IEntityInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.SearchBuyerSeatsResponse.IEntityInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchBuyerSeatsResponse.EntityInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchBuyerSeatsResponse.EntityInfo;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.SearchBuyerSeatsResponse.EntityInfo;
                public static toObject(message: teads.api.SearchBuyerSeatsResponse.EntityInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IUsersCount {
                tamAdmin: number;
                tamReportingAdmin: number;
                tamUser: number;
                tamReportingUser: number;
            }

            class UsersCount implements IUsersCount {
                constructor(properties?: teads.api.SearchBuyerSeatsResponse.IUsersCount);
                public tamAdmin: number;
                public tamReportingAdmin: number;
                public tamUser: number;
                public tamReportingUser: number;
                public static create(properties?: teads.api.SearchBuyerSeatsResponse.IUsersCount): teads.api.SearchBuyerSeatsResponse.UsersCount;
                public static encode(message: teads.api.SearchBuyerSeatsResponse.IUsersCount, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.SearchBuyerSeatsResponse.IUsersCount, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchBuyerSeatsResponse.UsersCount;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchBuyerSeatsResponse.UsersCount;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.SearchBuyerSeatsResponse.UsersCount;
                public static toObject(message: teads.api.SearchBuyerSeatsResponse.UsersCount, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface ISearchCampaignsEligibleForManagedServiceMigrationRequest {
            securityContext: teads.api.ISecurityContext;
            officeId: number;
            search?: (string|null);
            page: teads.api.IPage;
        }

        class SearchCampaignsEligibleForManagedServiceMigrationRequest implements ISearchCampaignsEligibleForManagedServiceMigrationRequest {
            constructor(properties?: teads.api.ISearchCampaignsEligibleForManagedServiceMigrationRequest);
            public securityContext: teads.api.ISecurityContext;
            public officeId: number;
            public search: string;
            public page: teads.api.IPage;
            public static create(properties?: teads.api.ISearchCampaignsEligibleForManagedServiceMigrationRequest): teads.api.SearchCampaignsEligibleForManagedServiceMigrationRequest;
            public static encode(message: teads.api.ISearchCampaignsEligibleForManagedServiceMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISearchCampaignsEligibleForManagedServiceMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchCampaignsEligibleForManagedServiceMigrationRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchCampaignsEligibleForManagedServiceMigrationRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SearchCampaignsEligibleForManagedServiceMigrationRequest;
            public static toObject(message: teads.api.SearchCampaignsEligibleForManagedServiceMigrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISearchCampaignsEligibleForManagedServiceMigrationResponse {
            campaigns?: (teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse.ICampaignInfo[]|null);
        }

        class SearchCampaignsEligibleForManagedServiceMigrationResponse implements ISearchCampaignsEligibleForManagedServiceMigrationResponse {
            constructor(properties?: teads.api.ISearchCampaignsEligibleForManagedServiceMigrationResponse);
            public campaigns: teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse.ICampaignInfo[];
            public static create(properties?: teads.api.ISearchCampaignsEligibleForManagedServiceMigrationResponse): teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse;
            public static encode(message: teads.api.ISearchCampaignsEligibleForManagedServiceMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISearchCampaignsEligibleForManagedServiceMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse;
            public static toObject(message: teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SearchCampaignsEligibleForManagedServiceMigrationResponse {

            interface ICampaignInfo {
                id: number;
                name: string;
                ownerId?: (number|null);
                objective: teads.api.CampaignObjective;
            }

            class CampaignInfo implements ICampaignInfo {
                constructor(properties?: teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse.ICampaignInfo);
                public id: number;
                public name: string;
                public ownerId: number;
                public objective: teads.api.CampaignObjective;
                public static create(properties?: teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse.ICampaignInfo): teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse.CampaignInfo;
                public static encode(message: teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse.ICampaignInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse.ICampaignInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse.CampaignInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse.CampaignInfo;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse.CampaignInfo;
                public static toObject(message: teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse.CampaignInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface ISearchCampaignsRequest {
            securityContext: teads.api.ISecurityContext;
            officeId?: (number|null);
            search?: (string|null);
            page: teads.api.IPage;
            includeManagedServiceMigratedCampaignsInfo?: (boolean|null);
        }

        class SearchCampaignsRequest implements ISearchCampaignsRequest {
            constructor(properties?: teads.api.ISearchCampaignsRequest);
            public securityContext: teads.api.ISecurityContext;
            public officeId: number;
            public search: string;
            public page: teads.api.IPage;
            public includeManagedServiceMigratedCampaignsInfo: boolean;
            public static create(properties?: teads.api.ISearchCampaignsRequest): teads.api.SearchCampaignsRequest;
            public static encode(message: teads.api.ISearchCampaignsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISearchCampaignsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchCampaignsRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchCampaignsRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SearchCampaignsRequest;
            public static toObject(message: teads.api.SearchCampaignsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISearchCampaignsResponse {
            campaigns?: (teads.api.SearchCampaignsResponse.ICampaignInfo[]|null);
        }

        class SearchCampaignsResponse implements ISearchCampaignsResponse {
            constructor(properties?: teads.api.ISearchCampaignsResponse);
            public campaigns: teads.api.SearchCampaignsResponse.ICampaignInfo[];
            public static create(properties?: teads.api.ISearchCampaignsResponse): teads.api.SearchCampaignsResponse;
            public static encode(message: teads.api.ISearchCampaignsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISearchCampaignsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchCampaignsResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchCampaignsResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SearchCampaignsResponse;
            public static toObject(message: teads.api.SearchCampaignsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SearchCampaignsResponse {

            interface ICampaignInfo {
                id: number;
                officeId: number;
                name: string;
                migrationInfo?: (teads.api.SearchCampaignsResponse.CampaignInfo.IMigrationInfo|null);
            }

            class CampaignInfo implements ICampaignInfo {
                constructor(properties?: teads.api.SearchCampaignsResponse.ICampaignInfo);
                public id: number;
                public officeId: number;
                public name: string;
                public migrationInfo?: (teads.api.SearchCampaignsResponse.CampaignInfo.IMigrationInfo|null);
                public static create(properties?: teads.api.SearchCampaignsResponse.ICampaignInfo): teads.api.SearchCampaignsResponse.CampaignInfo;
                public static encode(message: teads.api.SearchCampaignsResponse.ICampaignInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: teads.api.SearchCampaignsResponse.ICampaignInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchCampaignsResponse.CampaignInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchCampaignsResponse.CampaignInfo;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): teads.api.SearchCampaignsResponse.CampaignInfo;
                public static toObject(message: teads.api.SearchCampaignsResponse.CampaignInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace CampaignInfo {

                interface IMigrationInfo {
                    userEmail: string;
                    reason: teads.api.CampaignMigrationReason;
                    details: string;
                    migratedAt: google.protobuf.ITimestamp;
                }

                class MigrationInfo implements IMigrationInfo {
                    constructor(properties?: teads.api.SearchCampaignsResponse.CampaignInfo.IMigrationInfo);
                    public userEmail: string;
                    public reason: teads.api.CampaignMigrationReason;
                    public details: string;
                    public migratedAt: google.protobuf.ITimestamp;
                    public static create(properties?: teads.api.SearchCampaignsResponse.CampaignInfo.IMigrationInfo): teads.api.SearchCampaignsResponse.CampaignInfo.MigrationInfo;
                    public static encode(message: teads.api.SearchCampaignsResponse.CampaignInfo.IMigrationInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: teads.api.SearchCampaignsResponse.CampaignInfo.IMigrationInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SearchCampaignsResponse.CampaignInfo.MigrationInfo;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SearchCampaignsResponse.CampaignInfo.MigrationInfo;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): teads.api.SearchCampaignsResponse.CampaignInfo.MigrationInfo;
                    public static toObject(message: teads.api.SearchCampaignsResponse.CampaignInfo.MigrationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }

        interface ISecurityContext {
            profileId: number;
            entityId: number;
            baseProfileId?: (number|null);
        }

        class SecurityContext implements ISecurityContext {
            constructor(properties?: teads.api.ISecurityContext);
            public profileId: number;
            public entityId: number;
            public baseProfileId: number;
            public static create(properties?: teads.api.ISecurityContext): teads.api.SecurityContext;
            public static encode(message: teads.api.ISecurityContext, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISecurityContext, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SecurityContext;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SecurityContext;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SecurityContext;
            public static toObject(message: teads.api.SecurityContext, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISetFeeForClientSeatRequest {
            securityContext: teads.api.ISecurityContext;
            seatId: number;
            fee: number;
            salesforceContractVersion: number;
        }

        class SetFeeForClientSeatRequest implements ISetFeeForClientSeatRequest {
            constructor(properties?: teads.api.ISetFeeForClientSeatRequest);
            public securityContext: teads.api.ISecurityContext;
            public seatId: number;
            public fee: number;
            public salesforceContractVersion: number;
            public static create(properties?: teads.api.ISetFeeForClientSeatRequest): teads.api.SetFeeForClientSeatRequest;
            public static encode(message: teads.api.ISetFeeForClientSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISetFeeForClientSeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SetFeeForClientSeatRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SetFeeForClientSeatRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SetFeeForClientSeatRequest;
            public static toObject(message: teads.api.SetFeeForClientSeatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISetFeeForClientSeatResponse {
        }

        class SetFeeForClientSeatResponse implements ISetFeeForClientSeatResponse {
            constructor(properties?: teads.api.ISetFeeForClientSeatResponse);
            public static create(properties?: teads.api.ISetFeeForClientSeatResponse): teads.api.SetFeeForClientSeatResponse;
            public static encode(message: teads.api.ISetFeeForClientSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISetFeeForClientSeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SetFeeForClientSeatResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SetFeeForClientSeatResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SetFeeForClientSeatResponse;
            public static toObject(message: teads.api.SetFeeForClientSeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISynchronizeCampaignFromSalesforceOpportunityRequest {
            securityContext: teads.api.ISecurityContext;
            campaignId: number;
        }

        class SynchronizeCampaignFromSalesforceOpportunityRequest implements ISynchronizeCampaignFromSalesforceOpportunityRequest {
            constructor(properties?: teads.api.ISynchronizeCampaignFromSalesforceOpportunityRequest);
            public securityContext: teads.api.ISecurityContext;
            public campaignId: number;
            public static create(properties?: teads.api.ISynchronizeCampaignFromSalesforceOpportunityRequest): teads.api.SynchronizeCampaignFromSalesforceOpportunityRequest;
            public static encode(message: teads.api.ISynchronizeCampaignFromSalesforceOpportunityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISynchronizeCampaignFromSalesforceOpportunityRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SynchronizeCampaignFromSalesforceOpportunityRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SynchronizeCampaignFromSalesforceOpportunityRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SynchronizeCampaignFromSalesforceOpportunityRequest;
            public static toObject(message: teads.api.SynchronizeCampaignFromSalesforceOpportunityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISynchronizeCampaignFromSalesforceOpportunityResponse {
            createdLineItemIds?: (string[]|null);
        }

        class SynchronizeCampaignFromSalesforceOpportunityResponse implements ISynchronizeCampaignFromSalesforceOpportunityResponse {
            constructor(properties?: teads.api.ISynchronizeCampaignFromSalesforceOpportunityResponse);
            public createdLineItemIds: string[];
            public static create(properties?: teads.api.ISynchronizeCampaignFromSalesforceOpportunityResponse): teads.api.SynchronizeCampaignFromSalesforceOpportunityResponse;
            public static encode(message: teads.api.ISynchronizeCampaignFromSalesforceOpportunityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ISynchronizeCampaignFromSalesforceOpportunityResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.SynchronizeCampaignFromSalesforceOpportunityResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.SynchronizeCampaignFromSalesforceOpportunityResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.SynchronizeCampaignFromSalesforceOpportunityResponse;
            public static toObject(message: teads.api.SynchronizeCampaignFromSalesforceOpportunityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ITransitionIoBuyerSeatToManagedRequest {
            securityContext: teads.api.ISecurityContext;
            seatId: number;
            managedFee: number;
            msaType: teads.api.MsaType;
            salesforceContractId: string;
        }

        class TransitionIoBuyerSeatToManagedRequest implements ITransitionIoBuyerSeatToManagedRequest {
            constructor(properties?: teads.api.ITransitionIoBuyerSeatToManagedRequest);
            public securityContext: teads.api.ISecurityContext;
            public seatId: number;
            public managedFee: number;
            public msaType: teads.api.MsaType;
            public salesforceContractId: string;
            public static create(properties?: teads.api.ITransitionIoBuyerSeatToManagedRequest): teads.api.TransitionIoBuyerSeatToManagedRequest;
            public static encode(message: teads.api.ITransitionIoBuyerSeatToManagedRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ITransitionIoBuyerSeatToManagedRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.TransitionIoBuyerSeatToManagedRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.TransitionIoBuyerSeatToManagedRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.TransitionIoBuyerSeatToManagedRequest;
            public static toObject(message: teads.api.TransitionIoBuyerSeatToManagedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ITransitionIoBuyerSeatToManagedResponse {
            seatId: number;
        }

        class TransitionIoBuyerSeatToManagedResponse implements ITransitionIoBuyerSeatToManagedResponse {
            constructor(properties?: teads.api.ITransitionIoBuyerSeatToManagedResponse);
            public seatId: number;
            public static create(properties?: teads.api.ITransitionIoBuyerSeatToManagedResponse): teads.api.TransitionIoBuyerSeatToManagedResponse;
            public static encode(message: teads.api.ITransitionIoBuyerSeatToManagedResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ITransitionIoBuyerSeatToManagedResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.TransitionIoBuyerSeatToManagedResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.TransitionIoBuyerSeatToManagedResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.TransitionIoBuyerSeatToManagedResponse;
            public static toObject(message: teads.api.TransitionIoBuyerSeatToManagedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ITransitionIoBuyerSeatToSelfServedRequest {
            securityContext: teads.api.ISecurityContext;
            seatId: number;
            platformFee: number;
            msaType: teads.api.MsaType;
            salesforceContractId: string;
        }

        class TransitionIoBuyerSeatToSelfServedRequest implements ITransitionIoBuyerSeatToSelfServedRequest {
            constructor(properties?: teads.api.ITransitionIoBuyerSeatToSelfServedRequest);
            public securityContext: teads.api.ISecurityContext;
            public seatId: number;
            public platformFee: number;
            public msaType: teads.api.MsaType;
            public salesforceContractId: string;
            public static create(properties?: teads.api.ITransitionIoBuyerSeatToSelfServedRequest): teads.api.TransitionIoBuyerSeatToSelfServedRequest;
            public static encode(message: teads.api.ITransitionIoBuyerSeatToSelfServedRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ITransitionIoBuyerSeatToSelfServedRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.TransitionIoBuyerSeatToSelfServedRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.TransitionIoBuyerSeatToSelfServedRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.TransitionIoBuyerSeatToSelfServedRequest;
            public static toObject(message: teads.api.TransitionIoBuyerSeatToSelfServedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ITransitionIoBuyerSeatToSelfServedResponse {
            seatId: number;
        }

        class TransitionIoBuyerSeatToSelfServedResponse implements ITransitionIoBuyerSeatToSelfServedResponse {
            constructor(properties?: teads.api.ITransitionIoBuyerSeatToSelfServedResponse);
            public seatId: number;
            public static create(properties?: teads.api.ITransitionIoBuyerSeatToSelfServedResponse): teads.api.TransitionIoBuyerSeatToSelfServedResponse;
            public static encode(message: teads.api.ITransitionIoBuyerSeatToSelfServedResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ITransitionIoBuyerSeatToSelfServedResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.TransitionIoBuyerSeatToSelfServedResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.TransitionIoBuyerSeatToSelfServedResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.TransitionIoBuyerSeatToSelfServedResponse;
            public static toObject(message: teads.api.TransitionIoBuyerSeatToSelfServedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ITransitionManagedBuyerSeatToSelfServedRequest {
            securityContext: teads.api.ISecurityContext;
            seatId: number;
            platformFee: number;
        }

        class TransitionManagedBuyerSeatToSelfServedRequest implements ITransitionManagedBuyerSeatToSelfServedRequest {
            constructor(properties?: teads.api.ITransitionManagedBuyerSeatToSelfServedRequest);
            public securityContext: teads.api.ISecurityContext;
            public seatId: number;
            public platformFee: number;
            public static create(properties?: teads.api.ITransitionManagedBuyerSeatToSelfServedRequest): teads.api.TransitionManagedBuyerSeatToSelfServedRequest;
            public static encode(message: teads.api.ITransitionManagedBuyerSeatToSelfServedRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ITransitionManagedBuyerSeatToSelfServedRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.TransitionManagedBuyerSeatToSelfServedRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.TransitionManagedBuyerSeatToSelfServedRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.TransitionManagedBuyerSeatToSelfServedRequest;
            public static toObject(message: teads.api.TransitionManagedBuyerSeatToSelfServedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ITransitionManagedBuyerSeatToSelfServedResponse {
            seatId: number;
        }

        class TransitionManagedBuyerSeatToSelfServedResponse implements ITransitionManagedBuyerSeatToSelfServedResponse {
            constructor(properties?: teads.api.ITransitionManagedBuyerSeatToSelfServedResponse);
            public seatId: number;
            public static create(properties?: teads.api.ITransitionManagedBuyerSeatToSelfServedResponse): teads.api.TransitionManagedBuyerSeatToSelfServedResponse;
            public static encode(message: teads.api.ITransitionManagedBuyerSeatToSelfServedResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ITransitionManagedBuyerSeatToSelfServedResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.TransitionManagedBuyerSeatToSelfServedResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.TransitionManagedBuyerSeatToSelfServedResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.TransitionManagedBuyerSeatToSelfServedResponse;
            public static toObject(message: teads.api.TransitionManagedBuyerSeatToSelfServedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ITransitionSelfServedBuyerSeatToManagedRequest {
            securityContext: teads.api.ISecurityContext;
            seatId: number;
            managedFee: number;
        }

        class TransitionSelfServedBuyerSeatToManagedRequest implements ITransitionSelfServedBuyerSeatToManagedRequest {
            constructor(properties?: teads.api.ITransitionSelfServedBuyerSeatToManagedRequest);
            public securityContext: teads.api.ISecurityContext;
            public seatId: number;
            public managedFee: number;
            public static create(properties?: teads.api.ITransitionSelfServedBuyerSeatToManagedRequest): teads.api.TransitionSelfServedBuyerSeatToManagedRequest;
            public static encode(message: teads.api.ITransitionSelfServedBuyerSeatToManagedRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ITransitionSelfServedBuyerSeatToManagedRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.TransitionSelfServedBuyerSeatToManagedRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.TransitionSelfServedBuyerSeatToManagedRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.TransitionSelfServedBuyerSeatToManagedRequest;
            public static toObject(message: teads.api.TransitionSelfServedBuyerSeatToManagedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ITransitionSelfServedBuyerSeatToManagedResponse {
            seatId: number;
        }

        class TransitionSelfServedBuyerSeatToManagedResponse implements ITransitionSelfServedBuyerSeatToManagedResponse {
            constructor(properties?: teads.api.ITransitionSelfServedBuyerSeatToManagedResponse);
            public seatId: number;
            public static create(properties?: teads.api.ITransitionSelfServedBuyerSeatToManagedResponse): teads.api.TransitionSelfServedBuyerSeatToManagedResponse;
            public static encode(message: teads.api.ITransitionSelfServedBuyerSeatToManagedResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.ITransitionSelfServedBuyerSeatToManagedResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.TransitionSelfServedBuyerSeatToManagedResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.TransitionSelfServedBuyerSeatToManagedResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.TransitionSelfServedBuyerSeatToManagedResponse;
            public static toObject(message: teads.api.TransitionSelfServedBuyerSeatToManagedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IUpdateBuyerSeatFeeRequest {
            securityContext: teads.api.ISecurityContext;
            seatId: number;
            fee: number;
        }

        class UpdateBuyerSeatFeeRequest implements IUpdateBuyerSeatFeeRequest {
            constructor(properties?: teads.api.IUpdateBuyerSeatFeeRequest);
            public securityContext: teads.api.ISecurityContext;
            public seatId: number;
            public fee: number;
            public static create(properties?: teads.api.IUpdateBuyerSeatFeeRequest): teads.api.UpdateBuyerSeatFeeRequest;
            public static encode(message: teads.api.IUpdateBuyerSeatFeeRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IUpdateBuyerSeatFeeRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.UpdateBuyerSeatFeeRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.UpdateBuyerSeatFeeRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.UpdateBuyerSeatFeeRequest;
            public static toObject(message: teads.api.UpdateBuyerSeatFeeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IUpdateBuyerSeatFeeResponse {
        }

        class UpdateBuyerSeatFeeResponse implements IUpdateBuyerSeatFeeResponse {
            constructor(properties?: teads.api.IUpdateBuyerSeatFeeResponse);
            public static create(properties?: teads.api.IUpdateBuyerSeatFeeResponse): teads.api.UpdateBuyerSeatFeeResponse;
            public static encode(message: teads.api.IUpdateBuyerSeatFeeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IUpdateBuyerSeatFeeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.UpdateBuyerSeatFeeResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.UpdateBuyerSeatFeeResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.UpdateBuyerSeatFeeResponse;
            public static toObject(message: teads.api.UpdateBuyerSeatFeeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IUpdateBuyerSeatNameRequest {
            securityContext: teads.api.ISecurityContext;
            seatId: number;
            name: string;
        }

        class UpdateBuyerSeatNameRequest implements IUpdateBuyerSeatNameRequest {
            constructor(properties?: teads.api.IUpdateBuyerSeatNameRequest);
            public securityContext: teads.api.ISecurityContext;
            public seatId: number;
            public name: string;
            public static create(properties?: teads.api.IUpdateBuyerSeatNameRequest): teads.api.UpdateBuyerSeatNameRequest;
            public static encode(message: teads.api.IUpdateBuyerSeatNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IUpdateBuyerSeatNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.UpdateBuyerSeatNameRequest;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.UpdateBuyerSeatNameRequest;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.UpdateBuyerSeatNameRequest;
            public static toObject(message: teads.api.UpdateBuyerSeatNameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IUpdateBuyerSeatNameResponse {
        }

        class UpdateBuyerSeatNameResponse implements IUpdateBuyerSeatNameResponse {
            constructor(properties?: teads.api.IUpdateBuyerSeatNameResponse);
            public static create(properties?: teads.api.IUpdateBuyerSeatNameResponse): teads.api.UpdateBuyerSeatNameResponse;
            public static encode(message: teads.api.IUpdateBuyerSeatNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: teads.api.IUpdateBuyerSeatNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): teads.api.UpdateBuyerSeatNameResponse;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): teads.api.UpdateBuyerSeatNameResponse;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): teads.api.UpdateBuyerSeatNameResponse;
            public static toObject(message: teads.api.UpdateBuyerSeatNameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        enum AccountType {
            ACCOUNT_TYPE_INTERNAL_EMPLOYEE = 1,
            ACCOUNT_TYPE_PUBLISHER = 2,
            ACCOUNT_TYPE_ADVERTISER = 3,
            ACCOUNT_TYPE_AGENCY = 4
        }

        enum AdvertiserFirstPartySegmentProvider {
            ADVERTISER_FIRST_PARTY_SEGMENT_PROVIDER_NIELSEN = 1,
            ADVERTISER_FIRST_PARTY_SEGMENT_PROVIDER_LIVERAMP = 2,
            ADVERTISER_FIRST_PARTY_SEGMENT_PROVIDER_BLUEKAI = 3,
            ADVERTISER_FIRST_PARTY_SEGMENT_PROVIDER_NEUSTAR = 4,
            ADVERTISER_FIRST_PARTY_SEGMENT_PROVIDER_SALESFORCE = 5,
            ADVERTISER_FIRST_PARTY_SEGMENT_PROVIDER_RETARGETLY = 7
        }

        enum AdvertisingSolutionId {
            ADVERTISING_SOLUTION_ID_AWARENESS = 1,
            ADVERTISING_SOLUTION_ID_TA_CLICKS = 2,
            ADVERTISING_SOLUTION_ID_TA_VISITS = 3,
            ADVERTISING_SOLUTION_ID_TA_MIXED = 4,
            ADVERTISING_SOLUTION_ID_WEBSITE_CONVERSIONS = 5,
            ADVERTISING_SOLUTION_ID_SEAMLESS_COMMERCE = 6,
            ADVERTISING_SOLUTION_ID_TA_CLICKS_GUARANTEED_CPC = 7,
            ADVERTISING_SOLUTION_ID_TA_VISITS_GUARANTEED_CPC = 8
        }

        enum BuyerSeatStatus {
            BUYER_SEAT_STATUS_ENABLED = 1,
            BUYER_SEAT_STATUS_DISABLED = 2,
            BUYER_SEAT_STATUS_PENDING_CLIENT_INPUT = 3,
            BUYER_SEAT_STATUS_PENDING_TEADS_INPUT = 4
        }

        enum BuyerSeatStatusFlag {
            BUYER_SEAT_STATUS_FLAG_NOT_REQUIRED = 0,
            BUYER_SEAT_STATUS_FLAG_REQUIRED = 1,
            BUYER_SEAT_STATUS_FLAG_COMPLETED = 2
        }

        enum BuyerSeatType {
            BUYER_SEAT_TYPE_ADVERTISER = 1,
            BUYER_SEAT_TYPE_AGENCY = 2
        }

        enum BuyerServiceLevel {
            BUYER_SERVICE_LEVEL_MANAGED = 1,
            BUYER_SERVICE_LEVEL_SELF_SERVED = 2,
            BUYER_SERVICE_LEVEL_IO = 3,
            BUYER_SERVICE_LEVEL_INTERNAL = 4,
            BUYER_SERVICE_LEVEL_CLIENT = 5
        }

        enum CampaignMigrationReason {
            CAMPAIGN_MIGRATION_REASON_TARGETING_NOT_AVAILABLE = 0,
            CAMPAIGN_MIGRATION_REASON_AUCTION_TYPE_NOT_AVAILABLE = 1,
            CAMPAIGN_MIGRATION_REASON_BILLING_EVENT_NOT_AVAILABLE = 2,
            CAMPAIGN_MIGRATION_REASON_PLAYER_MODE_NOT_AVAILABLE = 3,
            CAMPAIGN_MIGRATION_REASON_OTHER = 5,
            CAMPAIGN_MIGRATION_REASON_IAS_PREBID = 6,
            CAMPAIGN_MIGRATION_REASON_MOAT_100_PERCENT = 7,
            CAMPAIGN_MIGRATION_REASON_RETARGETING_SEGMENTS = 8,
            CAMPAIGN_MIGRATION_REASON_OFFICE_PACK = 9,
            CAMPAIGN_MIGRATION_REASON_FORMAT_POSITION = 10,
            CAMPAIGN_MIGRATION_REASON_CUSTOM_BRAND_SAFETY = 11,
            CAMPAIGN_MIGRATION_REASON_CUSTOM_AUDIENCE = 12,
            CAMPAIGN_MIGRATION_REASON_TAM_ISSUE = 13,
            CAMPAIGN_MIGRATION_REASON_ALTICE_DATA_SEGMENTS = 14,
            CAMPAIGN_MIGRATION_REASON_CREATIVE_STUDIO_UNIT = 15,
            CAMPAIGN_MIGRATION_REASON_CUSTOM_BILLING_EVENT = 16,
            CAMPAIGN_MIGRATION_REASON_PLAYER_MODE = 17,
            CAMPAIGN_MIGRATION_REASON_ADDED_VALUE = 18,
            CAMPAIGN_MIGRATION_REASON_REMARKETING_ON_CREATIVE_EVENT = 19,
            CAMPAIGN_MIGRATION_REASON_LOOKALIKE_SEGMENTS = 20,
            CAMPAIGN_MIGRATION_REASON_GEO_POSTAL_CODES = 21,
            CAMPAIGN_MIGRATION_REASON_CARRIER_PROVIDER = 22,
            CAMPAIGN_MIGRATION_REASON_AUDIENCES_STANDARD_TO_ACCURACY = 23,
            CAMPAIGN_MIGRATION_REASON_CREATIVE_HOURLY_FLIGHTING = 24,
            CAMPAIGN_MIGRATION_REASON_INNOVATION_TEST = 25,
            CAMPAIGN_MIGRATION_REASON_NOT_SUPPORTED_TRAFFIC_ACQUISITION_CREATIVE = 26,
            CAMPAIGN_MIGRATION_REASON_TRAFFIC_ACQUISITION_REACHCAST = 27,
            CAMPAIGN_MIGRATION_REASON_CAMPAIGN_DATE_TO_THE_FUTURE = 28,
            CAMPAIGN_MIGRATION_REASON_CAMPAIGN_TIMEZONE = 29,
            CAMPAIGN_MIGRATION_REASON_CTV_INSTREAM_SUPPLY_TARGETING = 30,
            CAMPAIGN_MIGRATION_REASON_GUARANTEED_SELF_SERVE_CAMPAIGN = 31,
            CAMPAIGN_MIGRATION_REASON_PLAYER_VIEWABILITY = 32,
            CAMPAIGN_MIGRATION_REASON_TRACKING_PIXEL_ON_CLICK_EVENT = 33,
            CAMPAIGN_MIGRATION_REASON_VIRTUAL_PRICE_FOR_MANAGED_CAMPAIGN = 34,
            CAMPAIGN_MIGRATION_REASON_HOURLY_FLIGHTING = 35,
            CAMPAIGN_MIGRATION_REASON_ATTENTION_LUMEN_NO_SAMPLING = 36
        }

        enum CampaignObjective {
            CAMPAIGN_OBJECTIVE_BRANDING = 0,
            CAMPAIGN_OBJECTIVE_TRAFFIC_ACQUISITION = 1,
            CAMPAIGN_OBJECTIVE_SOCIAL = 2,
            CAMPAIGN_OBJECTIVE_CONVERSIONS = 3
        }

        enum CustomTargetingEnvironmentChannel {
            CUSTOM_TARGETING_ENVIRONMENT_CHANNEL_WEB = 1,
            CUSTOM_TARGETING_ENVIRONMENT_CHANNEL_CTV = 2
        }

        enum CustomTargetingRuleAudiencesAccuracyLevel {
            CUSTOM_TARGETING_RULE_AUDIENCES_ACCURACY_LEVEL_HIGH = 1,
            CUSTOM_TARGETING_RULE_AUDIENCES_ACCURACY_LEVEL_MEDIUM = 2,
            CUSTOM_TARGETING_RULE_AUDIENCES_ACCURACY_LEVEL_LOW = 3
        }

        enum CustomTargetingRuleAudiencesDeliveryType {
            CUSTOM_TARGETING_RULE_AUDIENCES_DELIVERY_TYPE_HIGH_ACCURACY = 2,
            CUSTOM_TARGETING_RULE_AUDIENCES_DELIVERY_TYPE_ACCURACY = 3,
            CUSTOM_TARGETING_RULE_AUDIENCES_DELIVERY_TYPE_STANDARD = 4,
            CUSTOM_TARGETING_RULE_AUDIENCES_DELIVERY_TYPE_REACH = 5
        }

        enum EntityType {
            ENTITY_TYPE_OFFICE = 1,
            ENTITY_TYPE_PLATFORM = 2,
            ENTITY_TYPE_SELF_SERVED = 3,
            ENTITY_TYPE_MANAGED_SERVICES = 4,
            ENTITY_TYPE_AGENCY = 5,
            ENTITY_TYPE_ADVERTISER = 6,
            ENTITY_TYPE_ADNETWORK = 7,
            ENTITY_TYPE_UNKNOWN = 8
        }

        enum InsertionOrderLineAuctionType {
            INSERTION_ORDER_LINE_AUCTION_TYPE_FIXED = 1,
            INSERTION_ORDER_LINE_AUCTION_TYPE_DYNAMIC = 2
        }

        enum InsertionOrderLineBillingModel {
            INSERTION_ORDER_LINE_BILLING_MODEL_CPM = 1,
            INSERTION_ORDER_LINE_BILLING_MODEL_VCPM = 2,
            INSERTION_ORDER_LINE_BILLING_MODEL_CPCV = 3,
            INSERTION_ORDER_LINE_BILLING_MODEL_CPC = 4,
            INSERTION_ORDER_LINE_BILLING_MODEL_CPV = 5
        }

        enum InsertionOrderLineCreativeTypeFamily {
            INSERTION_ORDER_LINE_CREATIVE_TYPE_FAMILY_VIDEO = 1,
            INSERTION_ORDER_LINE_CREATIVE_TYPE_FAMILY_DISPLAY = 2
        }

        enum MsaType {
            MSA_TYPE_DIGITAL = 1,
            MSA_TYPE_PAPER = 2
        }

        enum ProfileStatus {
            PROFILE_STATUS_ENABLED = 1,
            PROFILE_STATUS_DISABLED = 2,
            PROFILE_STATUS_DELETED = 3,
            PROFILE_STATUS_WAITING_PASSWORD = 4,
            PROFILE_STATUS_FIRST_LOGIN = 5
        }

        enum SeatFeature {
            SEAT_FEATURE_MULTIPLE_PIXELS = 0,
            SEAT_FEATURE_SHARE_WITH_ADVERTISERS = 1,
            SEAT_FEATURE_PREFER_VIEW_TO_PLAY_START_MODE = 2,
            SEAT_FEATURE_ACCURACY_LEVELS = 4,
            SEAT_FEATURE_AGENCY_FEE = 5,
            SEAT_FEATURE_CUSTOM_AUDIENCE_ALTICE_US = 6,
            SEAT_FEATURE_CUSTOM_CREATIVES_FOR_PERFORMANCE = 7,
            SEAT_FEATURE_LUMEN = 8,
            SEAT_FEATURE_CUSTOM_AUDIENCE_SKP = 9,
            SEAT_FEATURE_CUSTOM_AUDIENCE_CROSSIX = 10,
            SEAT_FEATURE_CUSTOM_AUDIENCE_ALTICE_FR = 11,
            SEAT_FEATURE_REMARKETING_SEGMENTATION_ACCESS = 12,
            SEAT_FEATURE_CPV = 13,
            SEAT_FEATURE_PLAYER_MODE_SELECTION_FOR_BRANDING = 14,
            SEAT_FEATURE_PLAYER_MODE_SELECTION_FOR_BRANDFORMANCE = 15,
            SEAT_FEATURE_LOOKALIKE_SEGMENTATION_ACCESS = 16,
            SEAT_FEATURE_CUSTOM_AUDIENCE_THIRD_PARTY_DATA_ACCESS = 17,
            SEAT_FEATURE_HAS_OPTED_IN_AD_ASSISTANT = 18,
            SEAT_FEATURE_PLAYER_MODE_SELECTION_FOR_BRANDING_CPCV = 19
        }

        class CommandService extends $protobuf.rpc.Service {
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CommandService;
            public acknowledgeCampaignSkeletonCreationToSalesforce(request: teads.api.IAcknowledgeCampaignSkeletonCreationToSalesforceRequest, callback: teads.api.CommandService.AcknowledgeCampaignSkeletonCreationToSalesforceCallback): void;
            public acknowledgeCampaignSkeletonCreationToSalesforce(request: teads.api.IAcknowledgeCampaignSkeletonCreationToSalesforceRequest): Promise<teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceResponse>;
            public activateFeatureForSeat(request: teads.api.IActivateFeatureForSeatRequest, callback: teads.api.CommandService.ActivateFeatureForSeatCallback): void;
            public activateFeatureForSeat(request: teads.api.IActivateFeatureForSeatRequest): Promise<teads.api.ActivateFeatureForSeatResponse>;
            public addFirstPartySegmentToWhitelistForSeat(request: teads.api.IAddFirstPartySegmentToWhitelistForSeatRequest, callback: teads.api.CommandService.AddFirstPartySegmentToWhitelistForSeatCallback): void;
            public addFirstPartySegmentToWhitelistForSeat(request: teads.api.IAddFirstPartySegmentToWhitelistForSeatRequest): Promise<teads.api.AddFirstPartySegmentToWhitelistForSeatResponse>;
            public addGrapeshotBrandSuitabilitySegmentForBuyerSeat(request: teads.api.IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest, callback: teads.api.CommandService.AddGrapeshotBrandSuitabilitySegmentForBuyerSeatCallback): void;
            public addGrapeshotBrandSuitabilitySegmentForBuyerSeat(request: teads.api.IAddGrapeshotBrandSuitabilitySegmentForBuyerSeatRequest): Promise<teads.api.AddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse>;
            public createBuyerEntity(request: teads.api.ICreateBuyerEntityRequest, callback: teads.api.CommandService.CreateBuyerEntityCallback): void;
            public createBuyerEntity(request: teads.api.ICreateBuyerEntityRequest): Promise<teads.api.CreateBuyerEntityResponse>;
            public createCampaignSkeletonsFromSalesforceOpportunity(request: teads.api.ICreateCampaignSkeletonsFromSalesforceOpportunityRequest, callback: teads.api.CommandService.CreateCampaignSkeletonsFromSalesforceOpportunityCallback): void;
            public createCampaignSkeletonsFromSalesforceOpportunity(request: teads.api.ICreateCampaignSkeletonsFromSalesforceOpportunityRequest): Promise<teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse>;
            public createClientSeatForBuyer(request: teads.api.ICreateClientSeatForBuyerRequest, callback: teads.api.CommandService.CreateClientSeatForBuyerCallback): void;
            public createClientSeatForBuyer(request: teads.api.ICreateClientSeatForBuyerRequest): Promise<teads.api.CreateClientSeatForBuyerResponse>;
            public createCustomTargetingRuleForCampaign(request: teads.api.ICreateCustomTargetingRuleForCampaignRequest, callback: teads.api.CommandService.CreateCustomTargetingRuleForCampaignCallback): void;
            public createCustomTargetingRuleForCampaign(request: teads.api.ICreateCustomTargetingRuleForCampaignRequest): Promise<teads.api.CreateCustomTargetingRuleForCampaignResponse>;
            public createInternalSeatForBuyer(request: teads.api.ICreateInternalSeatForBuyerRequest, callback: teads.api.CommandService.CreateInternalSeatForBuyerCallback): void;
            public createInternalSeatForBuyer(request: teads.api.ICreateInternalSeatForBuyerRequest): Promise<teads.api.CreateInternalSeatForBuyerResponse>;
            public createIoBuyerSeatForEntity(request: teads.api.ICreateIoBuyerSeatForEntityRequest, callback: teads.api.CommandService.CreateIoBuyerSeatForEntityCallback): void;
            public createIoBuyerSeatForEntity(request: teads.api.ICreateIoBuyerSeatForEntityRequest): Promise<teads.api.CreateIoBuyerSeatForEntityResponse>;
            public createManagedBuyerSeatForEntity(request: teads.api.ICreateManagedBuyerSeatForEntityRequest, callback: teads.api.CommandService.CreateManagedBuyerSeatForEntityCallback): void;
            public createManagedBuyerSeatForEntity(request: teads.api.ICreateManagedBuyerSeatForEntityRequest): Promise<teads.api.CreateManagedBuyerSeatForEntityResponse>;
            public createSelfServedBuyerSeatForEntity(request: teads.api.ICreateSelfServedBuyerSeatForEntityRequest, callback: teads.api.CommandService.CreateSelfServedBuyerSeatForEntityCallback): void;
            public createSelfServedBuyerSeatForEntity(request: teads.api.ICreateSelfServedBuyerSeatForEntityRequest): Promise<teads.api.CreateSelfServedBuyerSeatForEntityResponse>;
            public deactivateFeatureForSeat(request: teads.api.IDeactivateFeatureForSeatRequest, callback: teads.api.CommandService.DeactivateFeatureForSeatCallback): void;
            public deactivateFeatureForSeat(request: teads.api.IDeactivateFeatureForSeatRequest): Promise<teads.api.DeactivateFeatureForSeatResponse>;
            public deleteGrapeshotBrandSuitabilitySegmentsForBuyerSeat(request: teads.api.IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest, callback: teads.api.CommandService.DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatCallback): void;
            public deleteGrapeshotBrandSuitabilitySegmentsForBuyerSeat(request: teads.api.IDeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatRequest): Promise<teads.api.DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse>;
            public disableBuyerSeat(request: teads.api.IDisableBuyerSeatRequest, callback: teads.api.CommandService.DisableBuyerSeatCallback): void;
            public disableBuyerSeat(request: teads.api.IDisableBuyerSeatRequest): Promise<teads.api.DisableBuyerSeatResponse>;
            public enableBuyerSeat(request: teads.api.IEnableBuyerSeatRequest, callback: teads.api.CommandService.EnableBuyerSeatCallback): void;
            public enableBuyerSeat(request: teads.api.IEnableBuyerSeatRequest): Promise<teads.api.EnableBuyerSeatResponse>;
            public grantAdminRoleForBuyer(request: teads.api.IGrantAdminRoleForBuyerRequest, callback: teads.api.CommandService.GrantAdminRoleForBuyerCallback): void;
            public grantAdminRoleForBuyer(request: teads.api.IGrantAdminRoleForBuyerRequest): Promise<teads.api.GrantAdminRoleForBuyerResponse>;
            public markTeadsFinanceApprovalFilledForSeat(request: teads.api.IMarkTeadsFinanceApprovalFilledForSeatRequest, callback: teads.api.CommandService.MarkTeadsFinanceApprovalFilledForSeatCallback): void;
            public markTeadsFinanceApprovalFilledForSeat(request: teads.api.IMarkTeadsFinanceApprovalFilledForSeatRequest): Promise<teads.api.MarkTeadsFinanceApprovalFilledForSeatResponse>;
            public migrateCampaignToManagedService(request: teads.api.IMigrateCampaignToManagedServiceRequest, callback: teads.api.CommandService.MigrateCampaignToManagedServiceCallback): void;
            public migrateCampaignToManagedService(request: teads.api.IMigrateCampaignToManagedServiceRequest): Promise<teads.api.MigrateCampaignToManagedServiceResponse>;
            public removeFirstPartySegmentFromWhitelistForSeat(request: teads.api.IRemoveFirstPartySegmentFromWhitelistForSeatRequest, callback: teads.api.CommandService.RemoveFirstPartySegmentFromWhitelistForSeatCallback): void;
            public removeFirstPartySegmentFromWhitelistForSeat(request: teads.api.IRemoveFirstPartySegmentFromWhitelistForSeatRequest): Promise<teads.api.RemoveFirstPartySegmentFromWhitelistForSeatResponse>;
            public revokeAdminRoleForBuyer(request: teads.api.IRevokeAdminRoleForBuyerRequest, callback: teads.api.CommandService.RevokeAdminRoleForBuyerCallback): void;
            public revokeAdminRoleForBuyer(request: teads.api.IRevokeAdminRoleForBuyerRequest): Promise<teads.api.RevokeAdminRoleForBuyerResponse>;
            public setFeeForClientSeat(request: teads.api.ISetFeeForClientSeatRequest, callback: teads.api.CommandService.SetFeeForClientSeatCallback): void;
            public setFeeForClientSeat(request: teads.api.ISetFeeForClientSeatRequest): Promise<teads.api.SetFeeForClientSeatResponse>;
            public synchronizeCampaignFromSalesforceOpportunity(request: teads.api.ISynchronizeCampaignFromSalesforceOpportunityRequest, callback: teads.api.CommandService.SynchronizeCampaignFromSalesforceOpportunityCallback): void;
            public synchronizeCampaignFromSalesforceOpportunity(request: teads.api.ISynchronizeCampaignFromSalesforceOpportunityRequest): Promise<teads.api.SynchronizeCampaignFromSalesforceOpportunityResponse>;
            public transitionIoBuyerSeatToManaged(request: teads.api.ITransitionIoBuyerSeatToManagedRequest, callback: teads.api.CommandService.TransitionIoBuyerSeatToManagedCallback): void;
            public transitionIoBuyerSeatToManaged(request: teads.api.ITransitionIoBuyerSeatToManagedRequest): Promise<teads.api.TransitionIoBuyerSeatToManagedResponse>;
            public transitionIoBuyerSeatToSelfServed(request: teads.api.ITransitionIoBuyerSeatToSelfServedRequest, callback: teads.api.CommandService.TransitionIoBuyerSeatToSelfServedCallback): void;
            public transitionIoBuyerSeatToSelfServed(request: teads.api.ITransitionIoBuyerSeatToSelfServedRequest): Promise<teads.api.TransitionIoBuyerSeatToSelfServedResponse>;
            public transitionManagedBuyerSeatToSelfServed(request: teads.api.ITransitionManagedBuyerSeatToSelfServedRequest, callback: teads.api.CommandService.TransitionManagedBuyerSeatToSelfServedCallback): void;
            public transitionManagedBuyerSeatToSelfServed(request: teads.api.ITransitionManagedBuyerSeatToSelfServedRequest): Promise<teads.api.TransitionManagedBuyerSeatToSelfServedResponse>;
            public transitionSelfServedBuyerSeatToManaged(request: teads.api.ITransitionSelfServedBuyerSeatToManagedRequest, callback: teads.api.CommandService.TransitionSelfServedBuyerSeatToManagedCallback): void;
            public transitionSelfServedBuyerSeatToManaged(request: teads.api.ITransitionSelfServedBuyerSeatToManagedRequest): Promise<teads.api.TransitionSelfServedBuyerSeatToManagedResponse>;
            public updateBuyerSeatFee(request: teads.api.IUpdateBuyerSeatFeeRequest, callback: teads.api.CommandService.UpdateBuyerSeatFeeCallback): void;
            public updateBuyerSeatFee(request: teads.api.IUpdateBuyerSeatFeeRequest): Promise<teads.api.UpdateBuyerSeatFeeResponse>;
            public updateBuyerSeatName(request: teads.api.IUpdateBuyerSeatNameRequest, callback: teads.api.CommandService.UpdateBuyerSeatNameCallback): void;
            public updateBuyerSeatName(request: teads.api.IUpdateBuyerSeatNameRequest): Promise<teads.api.UpdateBuyerSeatNameResponse>;
        }

        namespace CommandService {

            type AcknowledgeCampaignSkeletonCreationToSalesforceCallback = (error: (Error|null), response?: teads.api.AcknowledgeCampaignSkeletonCreationToSalesforceResponse) => void;

            type ActivateFeatureForSeatCallback = (error: (Error|null), response?: teads.api.ActivateFeatureForSeatResponse) => void;

            type AddFirstPartySegmentToWhitelistForSeatCallback = (error: (Error|null), response?: teads.api.AddFirstPartySegmentToWhitelistForSeatResponse) => void;

            type AddGrapeshotBrandSuitabilitySegmentForBuyerSeatCallback = (error: (Error|null), response?: teads.api.AddGrapeshotBrandSuitabilitySegmentForBuyerSeatResponse) => void;

            type CreateBuyerEntityCallback = (error: (Error|null), response?: teads.api.CreateBuyerEntityResponse) => void;

            type CreateCampaignSkeletonsFromSalesforceOpportunityCallback = (error: (Error|null), response?: teads.api.CreateCampaignSkeletonsFromSalesforceOpportunityResponse) => void;

            type CreateClientSeatForBuyerCallback = (error: (Error|null), response?: teads.api.CreateClientSeatForBuyerResponse) => void;

            type CreateCustomTargetingRuleForCampaignCallback = (error: (Error|null), response?: teads.api.CreateCustomTargetingRuleForCampaignResponse) => void;

            type CreateInternalSeatForBuyerCallback = (error: (Error|null), response?: teads.api.CreateInternalSeatForBuyerResponse) => void;

            type CreateIoBuyerSeatForEntityCallback = (error: (Error|null), response?: teads.api.CreateIoBuyerSeatForEntityResponse) => void;

            type CreateManagedBuyerSeatForEntityCallback = (error: (Error|null), response?: teads.api.CreateManagedBuyerSeatForEntityResponse) => void;

            type CreateSelfServedBuyerSeatForEntityCallback = (error: (Error|null), response?: teads.api.CreateSelfServedBuyerSeatForEntityResponse) => void;

            type DeactivateFeatureForSeatCallback = (error: (Error|null), response?: teads.api.DeactivateFeatureForSeatResponse) => void;

            type DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatCallback = (error: (Error|null), response?: teads.api.DeleteGrapeshotBrandSuitabilitySegmentsForBuyerSeatResponse) => void;

            type DisableBuyerSeatCallback = (error: (Error|null), response?: teads.api.DisableBuyerSeatResponse) => void;

            type EnableBuyerSeatCallback = (error: (Error|null), response?: teads.api.EnableBuyerSeatResponse) => void;

            type GrantAdminRoleForBuyerCallback = (error: (Error|null), response?: teads.api.GrantAdminRoleForBuyerResponse) => void;

            type MarkTeadsFinanceApprovalFilledForSeatCallback = (error: (Error|null), response?: teads.api.MarkTeadsFinanceApprovalFilledForSeatResponse) => void;

            type MigrateCampaignToManagedServiceCallback = (error: (Error|null), response?: teads.api.MigrateCampaignToManagedServiceResponse) => void;

            type RemoveFirstPartySegmentFromWhitelistForSeatCallback = (error: (Error|null), response?: teads.api.RemoveFirstPartySegmentFromWhitelistForSeatResponse) => void;

            type RevokeAdminRoleForBuyerCallback = (error: (Error|null), response?: teads.api.RevokeAdminRoleForBuyerResponse) => void;

            type SetFeeForClientSeatCallback = (error: (Error|null), response?: teads.api.SetFeeForClientSeatResponse) => void;

            type SynchronizeCampaignFromSalesforceOpportunityCallback = (error: (Error|null), response?: teads.api.SynchronizeCampaignFromSalesforceOpportunityResponse) => void;

            type TransitionIoBuyerSeatToManagedCallback = (error: (Error|null), response?: teads.api.TransitionIoBuyerSeatToManagedResponse) => void;

            type TransitionIoBuyerSeatToSelfServedCallback = (error: (Error|null), response?: teads.api.TransitionIoBuyerSeatToSelfServedResponse) => void;

            type TransitionManagedBuyerSeatToSelfServedCallback = (error: (Error|null), response?: teads.api.TransitionManagedBuyerSeatToSelfServedResponse) => void;

            type TransitionSelfServedBuyerSeatToManagedCallback = (error: (Error|null), response?: teads.api.TransitionSelfServedBuyerSeatToManagedResponse) => void;

            type UpdateBuyerSeatFeeCallback = (error: (Error|null), response?: teads.api.UpdateBuyerSeatFeeResponse) => void;

            type UpdateBuyerSeatNameCallback = (error: (Error|null), response?: teads.api.UpdateBuyerSeatNameResponse) => void;
        }

        class QueryService extends $protobuf.rpc.Service {
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): QueryService;
            public canAccountEditCampaign(request: teads.api.ICanAccountEditCampaignRequest, callback: teads.api.QueryService.CanAccountEditCampaignCallback): void;
            public canAccountEditCampaign(request: teads.api.ICanAccountEditCampaignRequest): Promise<teads.api.CanAccountEditCampaignResponse>;
            public findActiveAccountsForProfile(request: teads.api.IFindActiveAccountsForProfileRequest, callback: teads.api.QueryService.FindActiveAccountsForProfileCallback): void;
            public findActiveAccountsForProfile(request: teads.api.IFindActiveAccountsForProfileRequest): Promise<teads.api.FindActiveAccountsForProfileResponse>;
            public findBuyerPixelsForAdvertiser(request: teads.api.IFindBuyerPixelsForAdvertiserRequest, callback: teads.api.QueryService.FindBuyerPixelsForAdvertiserCallback): void;
            public findBuyerPixelsForAdvertiser(request: teads.api.IFindBuyerPixelsForAdvertiserRequest): Promise<teads.api.FindBuyerPixelsForAdvertiserResponse>;
            public findBuyerSeatForEntity(request: teads.api.IFindBuyerSeatForEntityRequest, callback: teads.api.QueryService.FindBuyerSeatForEntityCallback): void;
            public findBuyerSeatForEntity(request: teads.api.IFindBuyerSeatForEntityRequest): Promise<teads.api.FindBuyerSeatForEntityResponse>;
            public findBuyerSeatForSalesforceSeat(request: teads.api.IFindBuyerSeatForSalesforceSeatRequest, callback: teads.api.QueryService.FindBuyerSeatForSalesforceSeatCallback): void;
            public findBuyerSeatForSalesforceSeat(request: teads.api.IFindBuyerSeatForSalesforceSeatRequest): Promise<teads.api.FindBuyerSeatForSalesforceSeatResponse>;
            public findCampaignsForSalesforceOpportunity(request: teads.api.IFindCampaignsForSalesforceOpportunityRequest, callback: teads.api.QueryService.FindCampaignsForSalesforceOpportunityCallback): void;
            public findCampaignsForSalesforceOpportunity(request: teads.api.IFindCampaignsForSalesforceOpportunityRequest): Promise<teads.api.FindCampaignsForSalesforceOpportunityResponse>;
            public findCampaignsForSalesforceOpportunityAndProfile(request: teads.api.IFindCampaignsForSalesforceOpportunityAndProfileRequest, callback: teads.api.QueryService.FindCampaignsForSalesforceOpportunityAndProfileCallback): void;
            public findCampaignsForSalesforceOpportunityAndProfile(request: teads.api.IFindCampaignsForSalesforceOpportunityAndProfileRequest): Promise<teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse>;
            public findGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeats(request: teads.api.IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest, callback: teads.api.QueryService.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsCallback): void;
            public findGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeats(request: teads.api.IFindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsRequest): Promise<teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse>;
            public findLineItemsForCampaign(request: teads.api.IFindLineItemsForCampaignRequest, callback: teads.api.QueryService.FindLineItemsForCampaignCallback): void;
            public findLineItemsForCampaign(request: teads.api.IFindLineItemsForCampaignRequest): Promise<teads.api.FindLineItemsForCampaignResponse>;
            public findProfileForEmailAnonymously(request: teads.api.IFindProfileForEmailAnonymouslyRequest, callback: teads.api.QueryService.FindProfileForEmailAnonymouslyCallback): void;
            public findProfileForEmailAnonymously(request: teads.api.IFindProfileForEmailAnonymouslyRequest): Promise<teads.api.FindProfileForEmailAnonymouslyResponse>;
            public findWhitelistedAdvertiserFirstPartySegmentsForSeat(request: teads.api.IFindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest, callback: teads.api.QueryService.FindWhitelistedAdvertiserFirstPartySegmentsForSeatCallback): void;
            public findWhitelistedAdvertiserFirstPartySegmentsForSeat(request: teads.api.IFindWhitelistedAdvertiserFirstPartySegmentsForSeatRequest): Promise<teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse>;
            public getAccount(request: teads.api.IGetAccountRequest, callback: teads.api.QueryService.GetAccountCallback): void;
            public getAccount(request: teads.api.IGetAccountRequest): Promise<teads.api.GetAccountResponse>;
            public getAdvertiserFirstPartySegments(request: teads.api.IGetAdvertiserFirstPartySegmentsRequest, callback: teads.api.QueryService.GetAdvertiserFirstPartySegmentsCallback): void;
            public getAdvertiserFirstPartySegments(request: teads.api.IGetAdvertiserFirstPartySegmentsRequest): Promise<teads.api.GetAdvertiserFirstPartySegmentsResponse>;
            public getAllCustomTargetingReasons(request: teads.api.IGetAllCustomTargetingReasonsRequest, callback: teads.api.QueryService.GetAllCustomTargetingReasonsCallback): void;
            public getAllCustomTargetingReasons(request: teads.api.IGetAllCustomTargetingReasonsRequest): Promise<teads.api.GetAllCustomTargetingReasonsResponse>;
            public getBuyerSeat(request: teads.api.IGetBuyerSeatRequest, callback: teads.api.QueryService.GetBuyerSeatCallback): void;
            public getBuyerSeat(request: teads.api.IGetBuyerSeatRequest): Promise<teads.api.GetBuyerSeatResponse>;
            public getOffice(request: teads.api.IGetOfficeRequest, callback: teads.api.QueryService.GetOfficeCallback): void;
            public getOffice(request: teads.api.IGetOfficeRequest): Promise<teads.api.GetOfficeResponse>;
            public getSalesforceOpportunity(request: teads.api.IGetSalesforceOpportunityRequest, callback: teads.api.QueryService.GetSalesforceOpportunityCallback): void;
            public getSalesforceOpportunity(request: teads.api.IGetSalesforceOpportunityRequest): Promise<teads.api.GetSalesforceOpportunityResponse>;
            public listCustomTargetingRulesForCampaign(request: teads.api.IListCustomTargetingRulesForCampaignRequest, callback: teads.api.QueryService.ListCustomTargetingRulesForCampaignCallback): void;
            public listCustomTargetingRulesForCampaign(request: teads.api.IListCustomTargetingRulesForCampaignRequest): Promise<teads.api.ListCustomTargetingRulesForCampaignResponse>;
            public listOffices(request: teads.api.IListOfficesRequest, callback: teads.api.QueryService.ListOfficesCallback): void;
            public listOffices(request: teads.api.IListOfficesRequest): Promise<teads.api.ListOfficesResponse>;
            public searchAdvertiserFirstPartySegments(request: teads.api.ISearchAdvertiserFirstPartySegmentsRequest, callback: teads.api.QueryService.SearchAdvertiserFirstPartySegmentsCallback): void;
            public searchAdvertiserFirstPartySegments(request: teads.api.ISearchAdvertiserFirstPartySegmentsRequest): Promise<teads.api.SearchAdvertiserFirstPartySegmentsResponse>;
            public searchAdvertisersForSeatManagement(request: teads.api.ISearchAdvertisersForSeatManagementRequest, callback: teads.api.QueryService.SearchAdvertisersForSeatManagementCallback): void;
            public searchAdvertisersForSeatManagement(request: teads.api.ISearchAdvertisersForSeatManagementRequest): Promise<teads.api.SearchAdvertisersForSeatManagementResponse>;
            public searchAgenciesForSeatManagement(request: teads.api.ISearchAgenciesForSeatManagementRequest, callback: teads.api.QueryService.SearchAgenciesForSeatManagementCallback): void;
            public searchAgenciesForSeatManagement(request: teads.api.ISearchAgenciesForSeatManagementRequest): Promise<teads.api.SearchAgenciesForSeatManagementResponse>;
            public searchBuyerSeats(request: teads.api.ISearchBuyerSeatsRequest, callback: teads.api.QueryService.SearchBuyerSeatsCallback): void;
            public searchBuyerSeats(request: teads.api.ISearchBuyerSeatsRequest): Promise<teads.api.SearchBuyerSeatsResponse>;
            public searchCampaigns(request: teads.api.ISearchCampaignsRequest, callback: teads.api.QueryService.SearchCampaignsCallback): void;
            public searchCampaigns(request: teads.api.ISearchCampaignsRequest): Promise<teads.api.SearchCampaignsResponse>;
            public searchCampaignsEligibleForManagedServiceMigration(request: teads.api.ISearchCampaignsEligibleForManagedServiceMigrationRequest, callback: teads.api.QueryService.SearchCampaignsEligibleForManagedServiceMigrationCallback): void;
            public searchCampaignsEligibleForManagedServiceMigration(request: teads.api.ISearchCampaignsEligibleForManagedServiceMigrationRequest): Promise<teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse>;
        }

        namespace QueryService {

            type CanAccountEditCampaignCallback = (error: (Error|null), response?: teads.api.CanAccountEditCampaignResponse) => void;

            type FindActiveAccountsForProfileCallback = (error: (Error|null), response?: teads.api.FindActiveAccountsForProfileResponse) => void;

            type FindBuyerPixelsForAdvertiserCallback = (error: (Error|null), response?: teads.api.FindBuyerPixelsForAdvertiserResponse) => void;

            type FindBuyerSeatForEntityCallback = (error: (Error|null), response?: teads.api.FindBuyerSeatForEntityResponse) => void;

            type FindBuyerSeatForSalesforceSeatCallback = (error: (Error|null), response?: teads.api.FindBuyerSeatForSalesforceSeatResponse) => void;

            type FindCampaignsForSalesforceOpportunityCallback = (error: (Error|null), response?: teads.api.FindCampaignsForSalesforceOpportunityResponse) => void;

            type FindCampaignsForSalesforceOpportunityAndProfileCallback = (error: (Error|null), response?: teads.api.FindCampaignsForSalesforceOpportunityAndProfileResponse) => void;

            type FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsCallback = (error: (Error|null), response?: teads.api.FindGrapeshotBrandSuitabilitySegmentsInCommonForBuyerSeatsResponse) => void;

            type FindLineItemsForCampaignCallback = (error: (Error|null), response?: teads.api.FindLineItemsForCampaignResponse) => void;

            type FindProfileForEmailAnonymouslyCallback = (error: (Error|null), response?: teads.api.FindProfileForEmailAnonymouslyResponse) => void;

            type FindWhitelistedAdvertiserFirstPartySegmentsForSeatCallback = (error: (Error|null), response?: teads.api.FindWhitelistedAdvertiserFirstPartySegmentsForSeatResponse) => void;

            type GetAccountCallback = (error: (Error|null), response?: teads.api.GetAccountResponse) => void;

            type GetAdvertiserFirstPartySegmentsCallback = (error: (Error|null), response?: teads.api.GetAdvertiserFirstPartySegmentsResponse) => void;

            type GetAllCustomTargetingReasonsCallback = (error: (Error|null), response?: teads.api.GetAllCustomTargetingReasonsResponse) => void;

            type GetBuyerSeatCallback = (error: (Error|null), response?: teads.api.GetBuyerSeatResponse) => void;

            type GetOfficeCallback = (error: (Error|null), response?: teads.api.GetOfficeResponse) => void;

            type GetSalesforceOpportunityCallback = (error: (Error|null), response?: teads.api.GetSalesforceOpportunityResponse) => void;

            type ListCustomTargetingRulesForCampaignCallback = (error: (Error|null), response?: teads.api.ListCustomTargetingRulesForCampaignResponse) => void;

            type ListOfficesCallback = (error: (Error|null), response?: teads.api.ListOfficesResponse) => void;

            type SearchAdvertiserFirstPartySegmentsCallback = (error: (Error|null), response?: teads.api.SearchAdvertiserFirstPartySegmentsResponse) => void;

            type SearchAdvertisersForSeatManagementCallback = (error: (Error|null), response?: teads.api.SearchAdvertisersForSeatManagementResponse) => void;

            type SearchAgenciesForSeatManagementCallback = (error: (Error|null), response?: teads.api.SearchAgenciesForSeatManagementResponse) => void;

            type SearchBuyerSeatsCallback = (error: (Error|null), response?: teads.api.SearchBuyerSeatsResponse) => void;

            type SearchCampaignsCallback = (error: (Error|null), response?: teads.api.SearchCampaignsResponse) => void;

            type SearchCampaignsEligibleForManagedServiceMigrationCallback = (error: (Error|null), response?: teads.api.SearchCampaignsEligibleForManagedServiceMigrationResponse) => void;
        }
    }
}

export namespace google {

    namespace protobuf {

        interface IAny {
            type_url?: (string|null);
            value?: (Uint8Array|null);
        }

        class Any implements IAny {
            constructor(properties?: google.protobuf.IAny);
            public type_url: string;
            public value: Uint8Array;
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IDuration {
            seconds?: (number|null);
            nanos?: (number|null);
        }

        class Duration implements IDuration {
            constructor(properties?: google.protobuf.IDuration);
            public seconds: number;
            public nanos: number;
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ITimestamp {
            seconds?: (number|null);
            nanos?: (number|null);
        }

        class Timestamp implements ITimestamp {
            constructor(properties?: google.protobuf.ITimestamp);
            public seconds: number;
            public nanos: number;
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
