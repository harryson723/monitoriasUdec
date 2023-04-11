import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterUserComponent} from "./register-user/register-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {GenerateScheduleComponent} from "./generate-schedule/generate-schedule.component";
import {ViewScheduleComponent} from "./view-schedule/view-schedule.component";
import {EditScheduleComponent} from "./edit-schedule/edit-schedule.component";
import {AuthGuard} from "./providers/auth-guard.services";

const routes: Routes = [
  {path: 'registerUsers', component: RegisterUserComponent, canActivate:[AuthGuard] },
  {path: 'editUsers', component: EditUserComponent, canActivate:[AuthGuard]},
  {path: 'generateSchedule', component: GenerateScheduleComponent, canActivate:[AuthGuard]},
  {path: 'viewSchedule', component: ViewScheduleComponent, canActivate:[AuthGuard]},
  {path: 'editSchedule', component: EditScheduleComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
