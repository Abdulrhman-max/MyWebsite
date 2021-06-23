import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { StateService } from "../services/state.service";


@Component({
  template: ''
})

export abstract class BaseListComponent<T> {
  public isShowModel$!: Observable<boolean>;
  public totalCount: number = 0;
  public first = 0;
  public rows = 10;
  public List: T[] = [];
  protected readonly destroy$ = new Subject<void>();

  constructor(protected readonly stateService: StateService) {}



  public onInit(): void {
    this.stateService.setState('showModel', false);
    this.isShowModel$ = this.stateService.select(state => state.showModel);
  }

  public onDestroy(): void {
    
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.List ? this.first === this.List.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.List ? this.first === 0 : true;
  }

  /* ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  } */
}