import { Component } from '@angular/core';
import { InicioComponent } from "./inicio/inicio.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [InicioComponent, ServiciosComponent, ContactoComponent, RouterOutlet]
})
export class AppComponent {
  seccion: string = 'inicio';

  mostrar(seccion: string) {
    this.seccion = seccion;
  }
}
