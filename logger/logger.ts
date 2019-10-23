import { LogWriter } from "./log-writer";
import { DateTimeHelper } from "../helpers/date-time-helper";

export class Logger {
    constructor(
        private readonly writer: LogWriter,
        private readonly dateTimeHelper: DateTimeHelper
    ) { }

    info(message: string) {
        const now = this.dateTimeHelper.format(new Date());
        this.writer.write(`${now} [INFO] ${message}`);
    }
}