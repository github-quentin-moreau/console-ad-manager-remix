
import { createTeadsGrpcClient } from './grpc-clients';
import { teads } from './api-domains_pb';

class GrpcClientsProvider {
  queryClient: teads.api.QueryService;
  commandClient: teads.api.CommandService;

  constructor() {
    const teadsGrpcClient = createTeadsGrpcClient();
    this.queryClient = teadsGrpcClient.query;
    this.commandClient = teadsGrpcClient.command;
  }
}


const grpcClientsProvider = new GrpcClientsProvider();
export default grpcClientsProvider;