import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enable-button',
  templateUrl: './enable-button.component.html',
  styleUrls: ['./enable-button.component.css']
})
export class EnableButtonComponent implements OnInit {
  ButtonState=false;
  constructor() {
    setTimeout(() => {
      this.ButtonState=true;
      
    }, 3000);
   }

  ngOnInit() {
  }

}
