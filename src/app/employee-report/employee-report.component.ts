import { Component, OnInit } from '@angular/core';
import { EmployeeType } from '../_models/employee-type';


@Component({
  selector: 'app-employee-report',
  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.css']
})
export class EmployeeReportComponent implements OnInit {

  employees:EmployeeType[]
  constructor() { }

  ngOnInit() {
    this.getemployeedetails();
  }
  getemployeedetails()
    {
      this.employees=[
        {'Id':100,'Name':'Anusha','Age':22,'Gender':'F'},
        {'Id':101,'Name':'Thahasu','Age':22,'Gender':'F'},
        {'Id':102,'Name':'Srinadh','Age':22,'Gender':'M'},
        {'Id':103,'Name':'Sravan','Age':22,'Gender':'M'},
      ];
    }

}
