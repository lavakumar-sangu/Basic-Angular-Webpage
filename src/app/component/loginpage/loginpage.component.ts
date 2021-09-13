import { Component, OnInit } from '@angular/core';
import { CoonecterService } from 'src/app/coonecter.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit  {
  name: any;
  password: any;
  email: any;
  mobno: any;
  constructor(public data : CoonecterService ) {}

  ngOnInit() {
  
  }
  updateText() {
    var obj = {
      name:this.name,
      email:this.email,
      mobile:this.mobno
    }
    this.data.updateData(obj)
  }
}
