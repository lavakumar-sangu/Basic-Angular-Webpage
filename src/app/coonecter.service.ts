import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoonecterService {
  public content = new BehaviorSubject<string>("");
  public share = this.content.asObservable();
  constructor() { }

  updateData(text) {
    this.content.next(text);
  }
  updateEmail(email) {
    this.content.next(email)
  }
  updateNumber(num) {
    this.content.next(num)
  }
}

