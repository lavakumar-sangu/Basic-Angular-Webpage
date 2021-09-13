import { Component, OnInit } from '@angular/core';
import { CoonecterService } from 'src/app/coonecter.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit  {
  name: any;
  text = ''
  public obj: any = 
    {
      text: '',
      email:'',
      num : '',
    }
  constructor(public data : CoonecterService ) {}

  ngOnInit() {
  
  }
  updateText(text: any) {
    this.data.updateData(text)
  }
}
