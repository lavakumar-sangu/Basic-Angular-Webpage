import { Component, OnInit } from '@angular/core';
import { CoonecterService } from 'src/app/coonecter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
text = ""
  constructor(public data : CoonecterService){}

  ngOnInit() {
    this.data.share.subscribe(x => this.text = x)
  }
}