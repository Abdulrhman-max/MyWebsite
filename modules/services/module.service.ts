import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  showDeleteModel$ = new BehaviorSubject<boolean>(false);
  deleteModelData = new BehaviorSubject<any>(null);

  constructor() {}
}
