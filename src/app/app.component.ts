import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JsonService } from './json.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  areas: string[] = [];
  departamentos: string[] = [];
  detalles: any[] = [];
  i: number = 0;
  detallesBool = false;
  auxString: string;
  titulotarjeta : string;

  constructor(public json1: JsonService, public json2: JsonService) {
    this.json1
      .obtenerJson('http://www.mocky.io/v2/5d4cc7853300004a0033742b')
      .forEach((a) => this.agregarNombreDepartamento(a));

    this.json2
      .obtenerJson('http://www.mocky.io/v2/5d4cc839330000520033742d')
      .forEach((b) => this.agregarDetalles(b));

    console.log(this.areas);
    console.log(this.departamentos);
    console.log(this.detalles);
  }

  agregarNombreDepartamento(a) {
    for (this.i; this.i <= a['areas'].length; this.i++) {
      this.areas.push(a['areas'][this.i].name);
      this.departamentos.push(a['areas'][this.i].departament);
    }
  }

  agregarDetalles(b) {

    this.detalles.push('town: ' + b['details'][0]['town']);
    this.detalles.push('boss: ' + b['details'][0]['boss']);
    this.detalles.push('age: ' + b['details'][0]['age']);
    this.detalles.push('last_degree: ' + b['details'][0]['last_degree']);

    this.auxString = b['name'];
  }

  seleccionado(a) {
    let aux = this.areas.indexOf(a);

    this.titulotarjeta=a;

    if (a == this.auxString) {
      this.detallesBool = true;
    } else {
      this.detallesBool = false;
    }
  }
}
