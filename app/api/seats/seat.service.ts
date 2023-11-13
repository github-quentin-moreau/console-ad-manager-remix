import * as grpc from '../../lib/rpc/api-domains_pb';
import GrpcClientsProvider from "~/lib/rpc/grpc-clients.provider";
import {GetSeatInfo, GetSeatInfoMapper} from "~/api/seats/seat.model";
import {buildSecurityContext} from "~/lib/rpc/grpc-clients";
import {teads} from "~/lib/rpc/api-domains_pb";
import GetBuyerSeatResponse = teads.api.GetBuyerSeatResponse;


class SeatService {

    private queryClient: grpc.teads.api.QueryService;
    private commandClient: grpc.teads.api.CommandService;
    constructor(
        readonly grpcClientsProvider: typeof GrpcClientsProvider,
    ) {
        this.queryClient = grpcClientsProvider.queryClient;
        this.commandClient = grpcClientsProvider.commandClient;
    }


    public getBuyerSeatByEntityId(
        profileId: number,
        entityId: number,
        seatEntityId: number
    ): Promise<GetSeatInfo> {
        const payload: grpc.teads.api.IFindBuyerSeatForEntityRequest = {
            securityContext: buildSecurityContext(profileId, entityId),
            entityId: seatEntityId
        };
        const request =
            grpc.teads.api.FindBuyerSeatForEntityRequest.create(payload);

        return this.queryClient.findBuyerSeatForEntity(request).then((response) => {
            return this.getBuyerSeat(
                profileId,
                entityId,
                response.seatId
            ).then((seatInfo) => ({
                ...seatInfo,
            }));
        });
    }

    public getBuyerSeat(
        profileId: number,
        entityId: number,
        seatId: number
    ): Promise<GetSeatInfo> {
        const payload: grpc.teads.api.IGetBuyerSeatRequest = {
            securityContext: buildSecurityContext(profileId, entityId),
            seatId: seatId
        };
        const request = grpc.teads.api.GetBuyerSeatRequest.create(payload);

        return this.queryClient.getBuyerSeat(request).then((response) => {
            return GetSeatInfoMapper(response);
        });
    }
}

export default SeatService;