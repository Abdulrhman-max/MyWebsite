import { Component, OnInit } from '@angular/core';
import { ModuleService } from './services/module.service';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  display: boolean = false;
  data!: any[];
  items!: any[];
  sideBarOpen = true;


  constructor(public moduleService: ModuleService) {}

  ngOnInit(): void {
    //HANDEL SHOW / HIDE MODEL DELETE
    this.moduleService.showDeleteModel$.subscribe((isShow: boolean) => {
      this.display = isShow;
    });

    //HANDEL MODEL DATA
    this.moduleService.deleteModelData.subscribe((data: any) => {
      this.data = data;
    });
  }

  toggleSideMenu(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
