import { Component, Input, OnInit } from '@angular/core';
import { AppComponent} from '../app.component'
import { Detalles } from '../detalles'

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent  {

  @Input() titulotarjeta : any;
  @Input() claseDetalles : Detalles;



  borrarDetalles(){
    this.claseDetalles = new Detalles()
  }



  constructor() { }



}
