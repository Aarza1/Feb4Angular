import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  Dynamiccolor='yellow';
  Firstname:string='Anusha';
  Lastname:string='Arja';
  Age:Number=22;
  Gender:string='Female';
  ServerId=10;
  ServerStatus:string;
  showOnline=true;
  Isonline:boolean=false;
  show=false;
  favoritefood=['Biryani','Noodles','FriedRice','Chicken','Prawns'];
  
  constructor() { 
    this.getserverstring();
  }


  ngOnInit() {
  }
  getserverstring(){
   this.ServerStatus=Math.random() > 0.5 ? 'online':'offline';
  this.showOnline=this.Isonline=true;

  }
  getColor():string{
   let color = this.ServerStatus =='online'?'#00FFFF':'#008000';
   return color;
  }
  

}
