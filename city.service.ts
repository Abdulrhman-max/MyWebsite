import { Injectable } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private c:HeaderComponent) { }
  Reload(){
    
  }
}
