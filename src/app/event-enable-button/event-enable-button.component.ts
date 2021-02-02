import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-enable-button',
  templateUrl: './event-enable-button.component.html',
  styleUrls: ['./event-enable-button.component.css']
})
export class EventEnableButtonComponent implements OnInit {
  Servername="";
  btnstatus:boolean=true;
  name="";
  constructor() { }

  ngOnInit() {
  }
  Onclick(event:Event)
  {
    setTimeout(() => {
      this.name=this.Servername;
      
    }, 3000);
   
  }
  Update(event:Event)
  {
    this.Servername=(event.target as HTMLInputElement).value;
    if(this.Servername=="")
    {
      this.btnstatus=true;
      this.name="";
    }
    else
    {
      this.btnstatus=false;
    }
  }
  
}
