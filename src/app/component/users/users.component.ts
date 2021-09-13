import { Component, OnInit } from '@angular/core';
import { CoonecterService } from 'src/app/coonecter.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  text = ''

  constructor(public data : CoonecterService ) { }

  ngOnInit(): void {
    this.data.share.subscribe(x => this.text = x)
  }

}
