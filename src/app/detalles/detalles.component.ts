import { Component, Input, OnInit } from '@angular/core';
import { AppComponent} from '../app.component'

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent  {

  @Input() titulotarjeta : any;
  @Input() detalles : any;






  constructor() { }



}
