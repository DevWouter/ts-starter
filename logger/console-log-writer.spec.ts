import { ConsoleLogWriter } from "./console-log-writer";

describe('ConsoleLogWriter', () => {
    var writer: ConsoleLogWriter;

    beforeEach(() => {
        writer = new ConsoleLogWriter();
    });

    it('should exist', () => {
        expect(writer).toBeTruthy();
    });

    it('should write to console when write(...) is invoked', () => {
        // Arrange
        const message = 'Hello world ' + Math.random();
        spyOn(console, 'log');

        // Act
        writer.write(message);

        // Assert
        expect(console.log).toHaveBeenCalledWith(message);
    });
});
