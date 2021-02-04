import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  LogMessage(myInput)
  {
    console.log(myInput);
    console.log(myInput.value);
  }
}
