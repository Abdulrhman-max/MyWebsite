import { MatTableDataSource } from '@angular/material/table';
import { GroupService } from './../../group.service';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { GroupResponse } from '../../models/group-response';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.styl'],
})
export class GroupListComponent implements OnInit {
  displayedColumns: string[] = [
    'Id',
    'LatinName',
    'ArabicName',
    'Refrence',
    'Status',
    'Acctions',
  ];
  dataSource: any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  id!: number;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  groupList!: GroupResponse[];
  constructor(private groupService: GroupService, private router: Router) {}
  ngOnInit(): void {
    this.getGroup();
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  getGroup(): void {
    this.groupService.getAllGroup().subscribe(
      (res: any) => {
        this.groupList = res['Data'];
        this.dataSource = new MatTableDataSource(this.groupList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res['Data']);
      },
      (err) => {}
    );
  }
  onEdit(id: any) {
    console.log(id);
    this.router.navigateByUrl('group/edit/' + id);
  }
}
