import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleService } from 'src/app/modules/services/module.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss'],
})
export class ConfirmDeleteComponent implements OnInit {
  @Input() data: any;
  @Input() display!: boolean;
  constructor(private readonly moduleService: ModuleService) {}

  ngOnInit(): void {}

  canncel(): void {
    this.moduleService.showDeleteModel$.next(false);
  }

  confirmDelete(): void {
    console.log(this.data);
  }
}
