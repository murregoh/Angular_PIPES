import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'Mateo';
  name2: string = 'MaTeo UrReGo Hoyos RuEda mOnToYa';
  video: string = 'uO8vRa3t4J4';
  date: Date = new Date();
  buttonValue: boolean = true;
  PI = Math.PI;
  array: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  a: number = 0.234;
  salary: number = 1234.5678;

  hero: object = {
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

  promiseValue: Promise<{}> = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve('Data is done'), 3500);
  });

}
