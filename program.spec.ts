import { Program } from "./program";
import { Logger } from "./logger/logger";

describe('Program', () => {
    var fakeLogger: Partial<Logger>;
    var program: Program;

    beforeEach(() => {
        fakeLogger = {
            info() { throw new Error("invoking fake: info"); }
        };

        program = new Program(fakeLogger as Logger);
    });

    it('should exist', () => {
        expect(program).toBeTruthy();
    });

    it('Should "now starting" in the log', () => {
        // Arrange
        spyOn(fakeLogger as Logger, 'info');

        // Act
        program.main();

        // Assert
        expect(fakeLogger.info).toHaveBeenCalledWith('Now starting');
    });
});