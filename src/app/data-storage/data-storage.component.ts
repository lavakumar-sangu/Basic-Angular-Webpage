import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-storage',
  templateUrl: './data-storage.component.html',
  styleUrls: ['./data-storage.component.css'],
})
export class DataStorageComponent implements OnInit {

  userData = {};
  deletedData :any;
  constructor() {}
  
  ngOnInit(): void {
  }
  public name: any;
  public email: any;
  public rows: Array<{ name: string; email: string }> = [];

  buttonClicked() {
    this.rows.push({ name: this.name, email: this.email });
    this.name = null;
    this.email = null;
  }
}
