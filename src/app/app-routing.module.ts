import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { NewAppointmentComponent } from './pages/new-appointment/new-appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'new',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashBoardComponent
  },
  {
    path:'new',
    component:NewAppointmentComponent
  },
  {
    path:'list',
    component:AppointmentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
