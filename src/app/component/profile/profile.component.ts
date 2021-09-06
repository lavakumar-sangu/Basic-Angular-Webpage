import { Component, OnInit, Output } from '@angular/core';
import { CoonecterService } from 'src/app/coonecter.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
text = ''
  constructor(public data : CoonecterService){}

  ngOnInit() {
    this.data.share.subscribe(x => this.text = x)
  }
  }



