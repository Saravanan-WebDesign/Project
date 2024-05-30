import { Component , OnInit} from '@angular/core';
import { MasterService } from '../../srevice/master.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

  ngOnInit() :void {

  }

  getTodayAppointments(){
    
  }
  
}
