import { LogWriter } from './log-writer';

export class ConsoleLogWriter implements LogWriter {
    write(message: string) {
        console.log(message);
    }

    flush() {
        // Not required for console
    }
}