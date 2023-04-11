import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HorarioComponent } from './horario/horario.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {ButtonModule} from 'primeng/button';
import { RegisterUserComponent } from './register-user/register-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { GenerateScheduleComponent } from './generate-schedule/generate-schedule.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import {InputTextModule} from 'primeng/inputtext';
import {ReactiveFormsModule} from "@angular/forms";
import {ApiServices} from "./providers/api.services";
import {AuthGuard} from "./providers/auth-guard.services";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    HorarioComponent,
    RegisterUserComponent,
    EditUserComponent,
    GenerateScheduleComponent,
    ViewScheduleComponent,
    EditScheduleComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    InputTextModule,
    ReactiveFormsModule,
    CardModule,
    HttpClientModule,
    ButtonModule,
  ],
  providers: [ApiServices, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
