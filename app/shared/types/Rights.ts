import { Long } from 'protobufjs';

export interface IProfile {
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  locale: string;
  timezone?: string | null;
  status: ProfileStatus;
  createdAt?: Timestamp | null;
}

export enum ProfileStatus {
  PROFILE_STATUS_ENABLED,
  PROFILE_STATUS_DISABLED,
  PROFILE_STATUS_DELETED,
  PROFILE_STATUS_WAITING_PASSWORD,
  PROFILE_STATUS_FIRST_LOGIN
}

interface Timestamp {
  seconds?: Long | null;
  nanos?: number | null;
}

export interface PermissionsOnResources {
  manage: Resources[];
  view: Resources[];
}

export enum Resources {
  BRAND_SAFETY = 'brand-safety'
}
