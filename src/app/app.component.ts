import { Component } from '@angular/core';
import { User } from './_models/user';
import { Department } from './Department';
import { Employee } from './_models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-spa';
 user=User;
 employee=Employee;
 emp=new Employee();
  dept=Department;
 depart=new Department('Developement',109,'Hyderabad')
Myuser=new User('anusha','anu@gmail.com',9986875858,false)

 
}


