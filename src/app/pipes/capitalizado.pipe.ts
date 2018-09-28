import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
    nombre = '';
    transform(value: string, all: boolean = true): string {
        let valueArray: Array<string>;
        valueArray = value.toLowerCase().split(' ');
        if (all === true) {
            for (const val of valueArray) {
                let res: string;
                res = val;
                this.nombre = this.nombre + val.substr(0, 1).toUpperCase() + res.substr(1) + ' ';
            }
            return this.nombre.trim();
        } else {
            this.nombre = valueArray[0][0].toLocaleUpperCase() + value.substr(1).toLowerCase();
            return this.nombre.trim();
        }


    }
}
