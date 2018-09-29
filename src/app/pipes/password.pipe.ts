import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, use: boolean = true): any {

    if (use) {
      let salida: string = '';
      for (let i = 0; i < value.length; i++) {
        salida += '*';
      }
      return salida;
    } else {
      return value;
    }
  }

}
