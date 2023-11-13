import { salesforceOpportunityIdPattern } from './regex-patterns';

describe('Salesforce opportunity pattern', () => {
  // This is due to react router, that use under the hood the https://github.com/pillarjs/path-to-regexp
  // that transform a string regex to a strict one
  const strictSalesforceOpportunityIdPattern = `^${salesforceOpportunityIdPattern}$`;
  describe('given a valid opportunity id starting with 006', () => {
    it('should match a opportunity that has a length of 15 char', () => {
      const salesforceOpportunityIdWith15Length = '0068e00000A1g9s';

      expect(
        new RegExp(strictSalesforceOpportunityIdPattern).test(
          salesforceOpportunityIdWith15Length
        )
      ).toEqual(true);
    });
    it('should match a opportunity that has a length of 18 char', () => {
      const salesforceOpportunityIdWith18Length = '0068e00000A1g9sAAB';

      expect(
        new RegExp(strictSalesforceOpportunityIdPattern).test(
          salesforceOpportunityIdWith18Length
        )
      ).toEqual(true);
    });
  });

  describe('given an invalid opportunity', () => {
    it('should not match an id not starting with 006', () => {
      const invalidSalesforceOpportunityIdWith15Length = '0078e00000A1g9s';

      expect(
        new RegExp(strictSalesforceOpportunityIdPattern).test(
          invalidSalesforceOpportunityIdWith15Length
        )
      ).toEqual(false);
    });

    it('should not match an id with a length lower than 15', () => {
      const salesforceOpportunityIdWith14Length = '0068e00000A1g9';

      expect(
        new RegExp(strictSalesforceOpportunityIdPattern).test(
          salesforceOpportunityIdWith14Length
        )
      ).toEqual(false);
    });

    it('should not match an id with a length greater than 18', () => {
      const salesforceOpportunityIdWith19Length = '0068e00000A1g9sXDSA';

      expect(
        new RegExp(strictSalesforceOpportunityIdPattern).test(
          salesforceOpportunityIdWith19Length
        )
      ).toEqual(false);
    });
  });
});
