import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export interface AppState {
  loading: boolean;
  showModel: boolean;
}

export const initialState: AppState = {
  loading: false,
  showModel: false,
};

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly state = initialState;
  private readonly stateSubject$ = new BehaviorSubject<AppState>(initialState);

  setState<T extends keyof AppState>(keyProp: T, value: AppState[T]): void {
    this.state[keyProp] = value;
    this.stateSubject$.next(this.state);
  }

  select<R>(selector: (state: AppState) => R): Observable<R> {
    return this.stateSubject$.pipe(map(selector), distinctUntilChanged());
  }

}
