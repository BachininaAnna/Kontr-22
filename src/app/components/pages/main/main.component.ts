import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  isShow: boolean = false;
  readonly observer: Observable<boolean>;
  private subscription: Subscription | null = null;
  constructor() {
    this.observer = new Observable((observer) => {
      const timeout = setTimeout(() => {
        observer.next(true);
      }, 10000);

      return{
        unsubscribe() {
          clearTimeout(timeout);
        }
      }
    })
  }

  ngOnInit(): void {
    this.subscription = this.observer.subscribe((param) => {
      if(param){
        this.showPopup();
      }
    })
  }

 ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  showPopup() {
    this.isShow = !this.isShow;
  }
}
