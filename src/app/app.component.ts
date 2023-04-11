import { Component } from '@angular/core';
import {ApiServices} from "./providers/api.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monitorias';
  constructor(public api: ApiServices) {
  }
}
