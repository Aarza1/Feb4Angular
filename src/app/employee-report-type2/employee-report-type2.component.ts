import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { Employee } from '../_models/employee';
import { EmployeeType } from '../_models/employee-type';

@Component({
  selector: 'app-employee-report-type2',
  templateUrl: './employee-report-type2.component.html',
  styleUrls: ['./employee-report-type2.component.css']
})
export class EmployeeReportType2Component implements OnInit {
 employees:EmployeeType[]
  constructor(public empservice:EmployeeService) { }

  ngOnInit() {
    this.getalldetails();
  }
getalldetails()
{
  this.employees=this.empservice.getemployeedetails();
}
}
