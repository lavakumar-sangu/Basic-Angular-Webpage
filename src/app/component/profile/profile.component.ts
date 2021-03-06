import { Component, OnInit } from '@angular/core';
import { CoonecterService } from 'src/app/coonecter.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  text: any;
  constructor(public data : CoonecterService){}

  ngOnInit() {
    this.data.share.subscribe(x => this.text = x)
    console.log("🚀 ~ file: profile.component.ts ~ line 15 ~ ProfileComponent ~ ngOnInit ~ this.text", this.text);
  }
  }

