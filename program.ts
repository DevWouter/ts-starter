import { Logger } from "./logger/logger";

export class Program {
    constructor(
        private readonly logger: Logger,
    ) { }

    main() {
        this.logger.info(`Now starting`);
    }
}