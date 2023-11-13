import { google } from './generate/api-domains_pb';
import ITimestamp = google.protobuf.ITimestamp;

export const grpcTimeStampToJSTimestamp = (grpcTimestamp: ITimestamp): number =>
  (grpcTimestamp.seconds.toNumber() + grpcTimestamp.nanos / 1000000000) * 1000;

export const grpcMSTimeStampToJSTimestamp = (
  grpcTimestamp: ITimestamp
): number =>
  grpcTimestamp.seconds.toNumber() + grpcTimestamp.nanos / 1000000000;

export const getOptionalGRPCValue = <T1, T2 extends keyof T1>(
  obj: T1,
  key: T2
) => (obj.hasOwnProperty(key) ? obj[key] : undefined);
