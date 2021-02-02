import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-event',
  templateUrl: './click-event.component.html',
  styleUrls: ['./click-event.component.css']
})
export class ClickEventComponent implements OnInit {
  message:string;
  constructor() { }

  ngOnInit() {
  }
  OnClick()
  {
this.message="hello";
  }
}
