import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-header-path',
  templateUrl: './header-path.component.html',
  styleUrls: ['./header-path.component.scss'],
})
export class HeaderPathComponent implements OnInit {
  currentPath!: string[];

  
  constructor(private readonly router: Router) {
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((res: any) => {
      console.log(res?.urlAfterRedirects);
      this.addNavigationPath(res?.urlAfterRedirects);
    });
  }

  ngOnInit(): void {
  
  }

  addNavigationPath(navArr: string): void {
    const navPath = navArr.split('/').splice(2);
    if (navPath[0] === 'dashboard') {
      this.currentPath = [];
    } else {
      this.currentPath = navPath;
    }
  }
}
