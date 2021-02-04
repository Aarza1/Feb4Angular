import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {

  constructor() { }
  Name:string="Tollplus India Pvt Ltd.";
  Message:string="Welcome Srinadh Psycho";
  Date:Date=new Date(2021,2,4);
  Person={
    Fisrtname:"Anusha",
    Lastname:"Arza",
    Age:22
  };
  ngOnInit() {
  }

}
