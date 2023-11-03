import { Component } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  categorias : any;
  arrayCategorias : any;

  constructor(private _categorias : CategoriasService){}

  ngOnInit():void{ //metodo que se ejecutal al cargar por primera vez el componente    
      this.obtenerCategorias();

  }

  obtenerCategorias(){
    this._categorias.obtenerCategora().subscribe( (respuesta:any )=>{
                  this.categorias = respuesta;
                  this.arrayCategorias = this.categorias.categoriaResponse.categoria;
                  console.log( this.categorias);
                  console.log(this.arrayCategorias);
                  /* console.log(this.arrayCategorias[1] )*/
                  ;
                  
                  });//devuelve un observable. Nos debemos suscribir para cuando se obtenga una respuesta, nos notifique y obtener la respustas del servicio
          
  }



}
