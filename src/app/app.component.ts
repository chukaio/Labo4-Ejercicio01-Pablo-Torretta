import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  edadUno:number;
  edadDos:number;
  suma:number;
  prommedio:number;
  // inputEdadUno:HTMLInputElement;
  // inputEdadDos:HTMLInputElement;
  // inputSuma:HTMLInputElement;
  // inputPromedio:HTMLInputElement;
  // inputEdadUno:any;
  // inputEdadDos:any;
  // inputSuma:any;
  // inputPromedio:any;

  constructor() {
    this.edadUno=0;
    this.edadDos=0;
    this.suma=0;
    this.prommedio=0;
    // this.inputEdadUno=(document.getElementById("edadUno"));
    // this.inputEdadDos=(<HTMLInputElement>document.getElementById("edadDos"));
    // this.inputSuma=(<HTMLInputElement>document.getElementById("Suma"));
    // this.inputPromedio=(<HTMLInputElement>document.getElementById("Promedio"));
  }

  Calcular():void{
    // this.edadUno=isNaN(parseInt(this.inputEdadUno.value))?0:parseInt(this.inputEdadUno.value); No entiendo porque no funciona asi
    // this.edadDos=isNaN(parseInt(this.inputEdadDos.value))?0:parseInt(this.inputEdadUno.value);    
    this.edadUno=isNaN(parseInt((<HTMLInputElement>document.getElementById("edadUno")).value))?0:parseInt((<HTMLInputElement>document.getElementById("edadUno")).value)
    this.edadDos=isNaN(parseInt((<HTMLInputElement>document.getElementById("edadDos")).value))?0:parseInt((<HTMLInputElement>document.getElementById("edadDos")).value)
    this.suma=this.edadUno+this.edadDos;
    this.prommedio=this.suma/2;
    
    (<HTMLInputElement>document.getElementById("Suma")).value=this.suma.toString();
    (<HTMLInputElement>document.getElementById("Promedio")).value=this.prommedio.toString();        
  }
  Limpiar():void{
    var num=0;

    (<HTMLInputElement>document.getElementById("edadUno")).value=num.toString();
    (<HTMLInputElement>document.getElementById("edadDos")).value=num.toString();
    (<HTMLInputElement>document.getElementById("Suma")).value=num.toString();
    (<HTMLInputElement>document.getElementById("Promedio")).value=num.toString();   
  }  
}
