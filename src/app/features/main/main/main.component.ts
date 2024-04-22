import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  readonly observer: Observable<boolean>;
  private subscription: Subscription | null = null;

  constructor(private modalService: NgbModal) {

    this.observer = new Observable((observer) => {
      observer.next(false);
      const timeout = setTimeout(() => {
        observer.next(true);
      }, 10000);

      return {
        unsubscribe() {
          clearTimeout(timeout);
        }
      }
    })
  }

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.subscription = this.observer.subscribe((param: boolean) => {
      if (param) {
        this.modalService.open(this.popup, {});
      }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  modalClose() {
    this.modalService.dismissAll(this.popup);
  }
}
