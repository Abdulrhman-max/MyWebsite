import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { HeaderService } from 'src/app/service/header.service';

export interface Languages {
  lang: string;
  value: string;
  
};
  
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  city:string | any;
  langs: Languages[] = [
    { lang: 'Ar', value: 'ar' },

    { lang: 'En', value: 'en' },
  ];

  @Output() toggleButton = new EventEmitter();
  
  selectedLang!: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly translate: TranslateService ,
    private service:HeaderService , 
    private HttpClient:HttpClient
  ) {}

  ngOnInit(): void {
    this.selectedLang =
      localStorage.getItem('lang') || this.translate.defaultLang;
    this.onChangeLanguage();
    this.GetAllCities();
    this.city = localStorage.getItem('City');
  }

  onChangeLanguage(): void {
    console.log(this.selectedLang);
    const htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    htmlTag.dir = this.selectedLang === 'ar' ? 'rtl' : 'ltr';
    htmlTag.lang = this.selectedLang;
    this.document.body.className =
      this.selectedLang === 'ar' ? 'body__Ar' : 'body__En';
    localStorage.setItem('lang', this.selectedLang);
    this.translate.use(this.selectedLang);
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['auth']);
  }

  toggleSideBar(): void {
    this.toggleButton.emit();
  }
  GetAllCities(): void {
  this.city = localStorage.getItem('City');
  }
}
