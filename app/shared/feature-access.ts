import { Features } from './types/Features';

const PLATFORM_OFFICE_ID = 5000;
const GOD_OFFICE_ID = 4999;

const CREATE_ADVANCED_TARGETING_DISALLOWED_OFFICE_IDS = [
  PLATFORM_OFFICE_ID,
  GOD_OFFICE_ID
];

export const isFeatureEnabled = (
  feature: Features,
  profileId: number,
  userOfficeId: number
): boolean => {
  switch (feature) {
    case Features.CREATE_ADVANCED_TARGETING_RULE: {
      return !AuthorizedAccessFeatures[
        Features.CREATE_ADVANCED_TARGETING_RULE
      ].exclude.officeIds.includes(userOfficeId);
    }
    default: {
      return false;
    }
  }
};

type AccessFeature = {
  include: {
    officeIds: number[];
    profileIds: number[];
  };
  exclude: {
    officeIds: number[];
    profileIds: number[];
  };
};

type AccessFeatures = Record<Features, AccessFeature>;
export const AuthorizedAccessFeatures: AccessFeatures = (() => {
  const defaultResponse: AccessFeature = {
    include: {
      officeIds: [],
      profileIds: []
    },
    exclude: {
      officeIds: [],
      profileIds: []
    }
  };

  return {
    [Features.CREATE_ADVANCED_TARGETING_RULE]: {
      ...defaultResponse,
      exclude: {
        ...defaultResponse.exclude,
        officeIds: CREATE_ADVANCED_TARGETING_DISALLOWED_OFFICE_IDS
      }
    }
  };
})();
