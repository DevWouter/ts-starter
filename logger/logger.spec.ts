import { Logger } from "./logger";
import { LogWriter } from "./log-writer";
import { DateTimeHelper } from "../helpers/date-time-helper";

describe('Logger', () => {
    var logger: Logger;
    var fakeWriter: LogWriter;
    var fakeDateTimeHelper: Partial<DateTimeHelper>;

    beforeEach(() => {
        fakeWriter = {
            write() { throw new Error("Invoking fake: write"); },
            flush() { throw new Error("Invoking fake: flush"); }
        };

        fakeDateTimeHelper = {
            format() { throw new Error("Invoking fake: format"); }
        };

        logger = new Logger(
            fakeWriter,
            fakeDateTimeHelper as DateTimeHelper,
        );
    });

    it('should exist', () => {
        expect(logger).toBeTruthy();
    });

    it('should write messages to the writer', () => {
        // Arrange
        spyOn(fakeWriter, 'write');
        const fakeDate = new Date(2000, 0, 21, 23, 59);
        jasmine.clock().mockDate(fakeDate);
        spyOn(fakeDateTimeHelper as DateTimeHelper, 'format')
            .and.returnValue('2000-01-21 23:59');

        // Act
        logger.info("Hello world");

        // Assert
        expect(fakeWriter.write).toHaveBeenCalledWith('2000-01-21 23:59 [INFO] Hello world');
    });
});