import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Mateo';
  name2 = 'MaTeo UrReGo Hoyos RuEda mOnToYa';

  PI = Math.PI;

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  a = 0.234;

  salary = 1234.5678;

  hero = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 201,
      barrio: 'Santa Ana',
      ciudad: 'Medellín'
    }
  };

  promiseValue = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve('Data is done'), 3500);
  });

  date = new Date();

}
