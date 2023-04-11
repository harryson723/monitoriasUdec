import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiServices} from "../providers/api.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formInfo: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiServices, private router: Router) {
    this.formInfo = formBuilder.group({
      username: '',
      password: '',
    });
  }

  submitForm(){
    this.api.login(this.formInfo.value).subscribe(data => {
      if(data != undefined) {
        this.api.usuario = data;
        this.api.addToken(this.api.usuario.token);
        //this.app.updateOptions();
        this.router.navigate(['/viewSchedule']);
      }
    });
  }

}
