import { GroupService } from './../../group.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { BranchResponse } from '../../models/branch-response';
import { GroupResponse } from '../../models/group-response';
@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.styl'],
})
export class GroupEditComponent implements OnInit {
  public id!: any;
  public groupResponse!: GroupResponse;
  groupList!: GroupResponse[];
  public isButtonVisible = true;
  public BranchList!: BranchResponse[];
  selectedOptions: FormControl = new FormControl();
  image: any = null;
  imageSource = 'data:image/png;base64,';
  imageDefault = './assets/59566329_2195377903850587_6023771841154252800_n.jpg';
  inactiveBranchList!: number[];
  @ViewChild('fileInput')
  fileInput!: ElementRef;
  fileAttr!: string;
  status!: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private groupService: GroupService
  ) {
    this.groupResponse = new GroupResponse();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id!=null) {
      this.isButtonVisible = false;
      this.getGroupById(this.id);
    } else this.imageSource = this.imageDefault;

    this.getGroupList();
    this.getBranchList();
  }
  uploadFileEvt(imgFile: any) {
    this.image = imgFile.target.files[0];
    this.fileAttr = this.image.name;
    console.log(this.image.name);
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          this.imageSource = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);

      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Choose File';
    }
  }
  getGroupById(id: any): void {
    this.groupService.getGroupByID(id).subscribe((res) => {
      this.groupResponse = res;
      this.status = this.groupResponse.Status;
      console.log(res, status, 'iddddd');
      this.selectedOptions = new FormControl(
        this.groupResponse.ExcludedBranches
      );
      if (this.groupResponse.Photo == '') {
        this.imageSource = this.imageDefault;
      } else {
        this.imageSource += this.groupResponse.Photo;
      }
    });
  }
  getBranchList() {
    this.groupService.getAllBranch().subscribe((res) => {
      this.BranchList = res.Data;
    });
  }
  getGroupList() {
    this.groupService.getAllGroup().subscribe((res) => {
      this.groupList = res.Data;
    });
  }
  Submit() {
    if (this.id == undefined) {
      console.log('add', this.imageSource, this.image);
      this.groupService.addGroup(this.groupResponse, this.image).subscribe(
        (res) => {
          this.router.navigateByUrl('pages/group');
          this.toastr.success('Successfully Added');
        },
        (err) => {}
      );
    } else {
      console.log('update', this.groupResponse, this.imageSource);
      this.groupService
        .updateGroup(this.id, this.groupResponse, this.image)
        .subscribe(
          (res) => {
            console.log(this.groupResponse);
            this.router.navigateByUrl('pages/group');
            this.toastr.success('Successfully Edited');
          },
          (err) => {}
        );
    }
  }
}
