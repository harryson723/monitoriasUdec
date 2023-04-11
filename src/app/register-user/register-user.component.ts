import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  formInfo;
  types: any;

  constructor(private form: FormBuilder) {
    this.formInfo = form.group({
      username: '',
      password: '',
      correo: '',
      telefono: '',
      cedula: '',
      last_name: '',
      firts_name: '',

    });

  }
  ngOnInit() {
    this.types = ["estudiante", "monitor"];
  }

  submitForm() {

  }
}
