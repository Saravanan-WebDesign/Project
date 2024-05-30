import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
// import { animate,trigger,style,transition } from '@angular/animations';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css',

})

export class DashBoardComponent {

  // currentIndexImage:number=0;

  // myBackgroundImages:string[]=[
  //   './assets/DashBoard/slider1.jpg',
  //   './assets/DashBoard/slider2.jpg',
  //   './assets/DashBoard/slider3.jpg',
  // ];



  // constructor(){
  //   setInterval(() => {
  //     this.changeMyImages()
  //   }, 4000);
  // }


  // changeMyImages(){
  //   this.currentIndexImage =(this.currentIndexImage + 1) % this.myBackgroundImages.length
  // }


  myObjects =[
    {
      name:'saravanan',
      age:20,
      village:'Peiyarankunam',
      Post:'chinnarkunam',
      
    }
  ]

  mycolor:string="blue"
  
  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigate(['/new']);
  }

}
