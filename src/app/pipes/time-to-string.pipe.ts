import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToString'
})
export class TimeToStringPipe implements PipeTransform {

    transform(value: number): string {
        let d: number = 0;
        let h: number = 0;
        let m: number = 0;
        let s: number = 0;

        let result: string = "0 segundos";

        if (value != null && value != undefined && value > 0) {
            // Días
            if (value >= 86400) {
                d = Math.trunc(value / 86400);
                value = value % 86400;
            }
            // Horas
            if (value >= 3600) {
                h = Math.trunc(value / 3600);
                value = value % 3600;
            }
            // Minutos
            if (value >= 60) {
                m = Math.trunc(value / 60);
                value = value % 60;
            }
            // Segundos
            if (value > 0) {
                s = Math.trunc(value);
            }

            result = (d > 0 ? d + ' días ' : '') + (h > 0 ? h + ' horas ' : '') + (m > 0 ? m + ' minutos ' : '') + (s > 0 ? s + ' segundos ' : '');
        }

        return result;
    }

}
