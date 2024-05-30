import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.css',
})
export class NewAppointmentComponent {
  constructor(private http: HttpClient) {}

  onProductCreate(products: {
    name: string;
    mobileNo: string;
    city: string;
    age: number;
    gender: string;
    appointmentDate: Date;
    appointmentTime: string;
    isFirstVisit: boolean;
    naration: string;
  }) {
    console.log(products);

    this.http.post('https://angularprojects-6902c-default-rtdb.firebaseio.com/AppointMent.json',products)
      .subscribe((res) => {
        console.log(res);
        alert('Your AppointMent Succesfully');
      });
  }
}
