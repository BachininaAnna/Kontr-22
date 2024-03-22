import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isShow: boolean = false;
  private observable: Observable<boolean>;

  constructor() {
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(true);
      }, 5000)
    })
  }

  ngOnInit(): void {
    this.observable.subscribe((param) => {
     console.log(param)
    })
  }

  close() {
    this.isShow = !this.isShow;
  }
}
