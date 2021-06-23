import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.scss']
})
export class EditCityComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute , private HttpClient:HttpClient , private router:Router) { }
  id:number|any;
  data:string | any;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.GetCityData();
  }
  GetCityData(){
    this.HttpClient.post('Cities/GetCityDataById' , {"id": this.id}).subscribe((response:any) =>{
      this.data = response;
    });
    
  }
  UpdateCityData(data:any){
      this.HttpClient.post('Cities/UpdateCity' , { "Id":data.Id, "Name":data.Name , "ArabicName":data.ArabicName , "LatinName":data.LatinName}).subscribe((response) =>{
      this.router.navigateByUrl("/pages/City");
      });
      
  }
  Delete(id:any){
    if(confirm('Are you sure you want to delete this city')){
      this.HttpClient.post('Cities/DeleteCity' , {"Id":id}).subscribe((response) =>{
          this.router.navigateByUrl("/pages/City");
      });
    }
    else{
      return;
    }
    
  }

}
