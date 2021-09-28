import { Component, OnInit } from '@angular/core';
import { CoonecterService } from 'src/app/coonecter.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit  {
  hide = true;
  msg: any;
  name: any;
  email: any;
  mobno: any;
  constructor(public data : CoonecterService ) {}
  ngOnInit() {
  }
  public obj: Array<{name: string, email: string, mobno:number}> = [];
  updateText() {
    var obj = {
      name:this.name,
      email:this.email,
      mobile:this.mobno
    }
    this.data.updateData(obj)
    console.log(obj);
    
  }
}
