import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: ['./data-viewer.component.css'],
})
export class DataViewerComponent implements OnInit {
  @Input() userData: any;
  @Output() public removedData = new EventEmitter<{name: string, email: string}>();
  name: string;
  email: string;
  poppedData: any;

  constructor() {}
  ngOnInit(): void {
  
  }
  public rows: Array<{ name: string; email: string }> = [];
  deleteButton() {
   this.poppedData = this.userData.pop();
   this.removedData.emit(this.poppedData)
  }
}
