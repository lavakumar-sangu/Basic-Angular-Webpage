import { Component, Input, OnInit } from '@angular/core';
import { CoonecterService } from 'src/app/coonecter.service';



@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit  {
  name: any;
  text = '';
  text1 = '';
  
  constructor(public data : CoonecterService ) {}

  ngOnInit() {
    this.data.share.subscribe(x => this.text1 =x)
  
  }
  updateText(text) {
    this.data.updateData(text)
    this.data.share.subscribe(x =>this.text1 =x)
  }

}
