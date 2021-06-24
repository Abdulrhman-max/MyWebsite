import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit, OnDestroy {
  constructor(private readonly translate: TranslateService) {}

  items!: any[];
  unSubscribeTranslate!: Subscription;

  ngOnInit(): void {
    this.setMenuItems();
    this.onChangeTranslation();
  }

  onChangeTranslation(): void {
    this.unSubscribeTranslate = this.translate.onLangChange.subscribe(
      (translate: LangChangeEvent) => {
        this.setMenuItems();
      }
    );
  }

  setMenuItems(): void {
    this.items = [
      {
          label:this.translate.instant('SIDE_MENU.Countries') ,
          icon: 'pi pi-pw pi-credit-card' ,
          routerLink: ['./Countries']
      }  , 
      {
        label:this.translate.instant('SIDE_MENU.City'),
        icon:'pi pi-pw pi-credit-card' , 
        routerLink:['./City']
      } , 
      {
        label: this.translate.instant('SIDE_MENU.BANAL'),
        icon: 'pi pi-pw pi-credit-card',
        routerLink: ['./'],
      },
      {
        label: this.translate.instant('SIDE_MENU.ORDERS'),
        icon: 'pi pi-pw pi-folder-open',
        routerLink: ['./users'],
      },
      {
        label: this.translate.instant('SIDE_MENU.USERS'),
        icon: 'pi pi-pw pi-users',
        routerLink: ['./users'],
      },
      {
        label: this.translate.instant('SIDE_MENU.REPORTS'),
        icon: 'pi pi-pw pi-chart-line',
        routerLink: ['./users'],
      },
      {
        label: this.translate.instant('SIDE_MENU.MENUS'),
        icon: 'pi pi-pw pi-book',
        routerLink: ['./users'],
      },
      {
        label: this.translate.instant('SIDE_MENU.STORE'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./users'],
      },
      {
        label: this.translate.instant('SIDE_MENU.FLOOR'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./floor'],
      },
      {
        label: this.translate.instant('SIDE_MENU.BRANCH'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./branch'],
      },
      {
        label: this.translate.instant('SIDE_MENU.DELIVERYZONE'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./deliveryzone'],
      },
      {
        label: this.translate.instant('SIDE_MENU.DEVICES'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./devices'],
      },
      {
        label: this.translate.instant('SIDE_MENU.VENDORS'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./vendors'],
      },
      {
        label: this.translate.instant('SIDE_MENU.WAREHOUSE'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./warehouse'],
      },
      {
        label: this.translate.instant('SIDE_MENU.CUSTOMERS'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./customers'],
      },

      {
        label: this.translate.instant('SIDE_MENU.CUSTOMERSGROUP'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./customersGroup'],
      },
      {
        label: this.translate.instant('SIDE_MENU.OPTIONGROUP'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./optionGroup'],
      },
      {
        label: this.translate.instant('SIDE_MENU.GROUP'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./group'],
      },
      {
        label: this.translate.instant('SIDE_MENU.PRICEPOLICY'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./pricePolicy'],
      },
      {
        label: this.translate.instant('SIDE_MENU.ROLLES'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./Rolles'],
      },
      {
        label: this.translate.instant('SIDE_MENU.PAYMENTMETHOD'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./payment'],
      },
      {
        label: this.translate.instant('SIDE_MENU.PRICETAG'),
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: ['./priceTag'],
      },
    ];
  }

  ngOnDestroy(): void {
    this.unSubscribeTranslate.unsubscribe();
  }
}
