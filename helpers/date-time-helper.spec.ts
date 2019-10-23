import { DateTimeHelper } from "./date-time-helper";

describe('DateTimeHelper', () => {
    var helper: DateTimeHelper;
    beforeEach(() => {
        helper = new DateTimeHelper();
    });

    it('should format 2001-01-01 01:01', () => {
        const result = helper.format(new Date(2001, 0, 1, 1, 1));
        expect(result).toBe('2001-01-01 01:01');
    });
    it('should format 2001-12-31 23:59', () => {
        const result = helper.format(new Date(2001, 11, 31, 23, 59));
        expect(result).toBe('2001-12-31 23:59');
    });
});