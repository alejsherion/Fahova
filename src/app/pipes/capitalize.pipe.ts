import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

    transform(value: string): string {
        if (value != null && value != undefined) {
            value = value.trim().toLowerCase();

            let parts = value.split(" ");
            for (let i in parts) {
                if (parts[i].trim().length == 1) {
                    parts[i] = parts[i].trim()[0].toUpperCase();
                }
                if (parts[i].trim().length > 1) {
                    parts[i] = parts[i].trim()[0].toUpperCase() + parts[i].trim().substr(1);
                }
            }
            return parts.join(" ");
        }
        return value;
  }

}
