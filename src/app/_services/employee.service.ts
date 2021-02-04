import { Injectable } from '@angular/core';
import { EmployeeType } from '../_models/employee-type';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:EmployeeType[]
  constructor() { }
  getemployeedetails():EmployeeType[]
  {
    this.employees=[
      {'Id':100,'Name':'Anusha','Age':22,'Gender':'F'},
      {'Id':101,'Name':'Thahasu','Age':22,'Gender':'F'},
      {'Id':102,'Name':'Srinadh','Age':22,'Gender':'M'},
      {'Id':103,'Name':'Sravan','Age':22,'Gender':'M'},

      
    ];
    return this.employees;
  }

}
