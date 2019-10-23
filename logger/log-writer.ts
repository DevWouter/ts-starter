export interface LogWriter {
    write(message: string): void;
    flush(): void;
}