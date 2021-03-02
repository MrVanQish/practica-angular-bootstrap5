import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JsonService } from './json.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Detalles } from './detalles'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  areas: string[] = [];
  departamentos: string[] = [];
  i: number = 0;
  detallesBool = false;
  auxString: string;
  titulotarjeta: string;


  detalles1 = new Detalles();

  constructor(
    public areasjson: JsonService,
    public detallescontabilidadjson: JsonService,
    public detallesFinanzasjson: JsonService,
    public detallesSistemas: JsonService,
    public detallesDesarrollojson: JsonService,
    public detallesPQRSjson: JsonService
  ) {
    this.areasjson
      .obtenerJson('http://www.mocky.io/v2/5d4cc7853300004a0033742b')
      .forEach((a) => this.agregarNombreDepartamento(a));
 
    this.detallescontabilidadjson
      .obtenerJson('http://www.mocky.io/v2/5d4cc839330000520033742d')
      .forEach((b) => this.agregarDetalles(b));

    /* console.log(this.areas);
    console.log(this.departamentos);
    console.log(this.detalles); */
  }

  agregarNombreDepartamento(a) {
    for (this.i; this.i <= a['areas'].length; this.i++) {
      this.areas.push(a['areas'][this.i].name);
      this.departamentos.push(a['areas'][this.i].departament);
    }
  }

  agregarDetalles(b) {
    
    this.detalles1.town =  b['details'][0]['town'];
    this.detalles1.boss = b['details'][0]['boss'];
    this.detalles1.age = b['details'][0]['age'];
    this.detalles1.last_degree = b['details'][0]['last_degree'];

    this.detalles1.name = b['name'];

    
  }


  seleccionado(a) {
  
    this.titulotarjeta = a;

    if (a === "Finanzas" || a === "contabilidad" ||
        a === "Sistemas" || a === "Desarrollo" ||
        a === "pqrs") {

      this.detallesBool = true;
      
    } else {
      
      this.detallesBool = false;
    }
  }
}
