import { Program } from "./program";
import { Logger } from "./logger/logger";
import { ConsoleLogWriter } from "./logger/console-log-writer";
import { DateTimeHelper } from "./helpers/date-time-helper";

new Program(
    new Logger(
        new ConsoleLogWriter(),
        new DateTimeHelper()
    ),
).main();