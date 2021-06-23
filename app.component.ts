import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { bindCallback, combineLatest, concat, interval, of } from 'rxjs';
import {
  concatAll,
  first,
  map,
  catchError,
  take,
  combineAll,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  emit$ = new EventEmitter<number>();
  title = 'microtech-dashboard';

  constructor(private readonly translate: TranslateService) {}

  ngOnInit(): void {

  }
}