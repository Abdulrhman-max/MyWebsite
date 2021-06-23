import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private readonly document: Document,
   private readonly translate: TranslateService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('lang'));
    const htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    
    if(localStorage.getItem('lang')) {
      if(localStorage.getItem('lang') === 'ar') {
        htmlTag.dir = 'rtl';
        this.document.body.className = 'body__Ar';
      } else {
        htmlTag.dir = 'ltr';
        this.document.body.className = 'body__En';
      }
    } else {
      if(this.translate.defaultLang === 'ar') {
        htmlTag.dir = 'rtl';
        this.document.body.className = 'body__Ar';
      } else {
        htmlTag.dir = 'ltr';
        this.document.body.className = 'body__En';
      }
    } 
  }

}
