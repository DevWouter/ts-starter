export class DateTimeHelper {
    format(dt: Date) {
        const year = dt.getFullYear();
        const month = this.prefixDigit(dt.getMonth() + 1);
        const day = this.prefixDigit(dt.getDate());
        const hour = this.prefixDigit(dt.getHours());
        const minutes = this.prefixDigit(dt.getMinutes());
        const dateString = `${year}-${month}-${day}`;
        const timeString = `${hour}:${minutes}`;
        const fullString = `${dateString} ${timeString}`;
        return fullString;
    }

    private prefixDigit(n: number) {
        const prefixed = '0' + n;
        return prefixed.substr(prefixed.length - 2, 2);
    }
}