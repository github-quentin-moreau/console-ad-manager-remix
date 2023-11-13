import { GrpcStatus, ServiceError } from '@teads/grpc';
import { $log } from '@tsed/logger';
import {
  Forbidden,
  NotFound,
  Conflict,
  InternalServerError,
  NotImplemented,
  Unauthorized,
  BadRequest
} from '@tsed/exceptions';

export function GrpcErrorHandler(grpcStatus: ServiceError) {
  switch (grpcStatus.code) {
    case GrpcStatus['INVALID_ARGUMENT']:
      throw new BadRequest(grpcStatus.details);
    case GrpcStatus['UNAUTHENTICATED']:
      throw new Unauthorized(grpcStatus.details);
    case GrpcStatus['PERMISSION_DENIED']:
      throw new Forbidden(grpcStatus.details);
    case GrpcStatus['NOT_FOUND']:
      throw new NotFound(grpcStatus.details);
    case GrpcStatus['ALREADY_EXISTS']:
      throw new Conflict(grpcStatus.details);
    case GrpcStatus['INTERNAL']:
      throw new InternalServerError(grpcStatus.details);
    case GrpcStatus['UNIMPLEMENTED']:
      throw new NotImplemented(grpcStatus.details);
    default:
      $log.error({
        tag: 'unexpected-api-domains-error-code',
        grpcStatusCode: grpcStatus.code
      });
      throw new InternalServerError(grpcStatus.details);
  }
}
