import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusEnum'
})
export class StatusEnumPipe implements PipeTransform {

    transform(value: string): string {
        if (value != null && value != undefined) {
            if (value.trim().toUpperCase() === "I") {
                return "Inactivo"
            }
            if (value.trim().toUpperCase() === "A") {
                return "Activo"
            }
        }

        return "Non Status";
    }

}
