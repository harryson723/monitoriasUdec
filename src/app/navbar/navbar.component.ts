import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {ApiServices} from "../providers/api.services";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public items: MenuItem[] = [];

  constructor(public api: ApiServices) {
  }

  ngOnInit() {
    switch (this.api.usuario.tipo) {
      case "monitor":
        this.items = [
          // {label: 'Ver Horario', icon: 'pi pi-fw pi-home', routerLink: 'viewSchedule'},
          {label: 'Registrar Usuario', icon: 'pi pi-fw pi-file', routerLink: 'registerUsers'},
          // {label: 'Editar Usuario', icon: 'pi pi-fw pi-pencil', routerLink: 'editUsers'},
          // {label: 'Generar Horario', icon: 'pi pi-fw pi-pencil', routerLink: 'generateSchedule'},
          // {label: 'Editar Horario', icon: 'pi pi-fw pi-cog', routerLink: 'editSchedule'}
        ];
        break;
      case "estudiante":
        this.items = [
          {label: 'Ver Horario', icon: 'pi pi-fw pi-home', routerLink: 'viewSchedule'},
          {label: 'Editar Usuario', icon: 'pi pi-fw pi-pencil', routerLink: 'editUsers'},
        ];
        break;
    }
  }
}
