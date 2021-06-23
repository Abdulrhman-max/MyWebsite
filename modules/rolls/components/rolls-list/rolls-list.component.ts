import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RollResponse } from '../../models/roll-response';
import { RolleService } from '../../rolle.service';

@Component({
  selector: 'app-rolls-list',
  templateUrl: './rolls-list.component.html',
  styleUrls: ['./rolls-list.component.scss']
})
export class RollsListComponent implements OnInit {

  public roleList!: RollResponse[];
  id!: any;
  constructor(private service: RolleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getAllRoles().subscribe(
      (res) => {
        this.roleList = res.Data;
      },
      (err) => {}
    );
  }

}
