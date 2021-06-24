import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute , private HttpClient:HttpClient , private router:Router) { }
  id:number|any;
  data:string | any;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.GetCityData();
  }
  GetCityData(){
    this.HttpClient.post('Countries/GetCountriesDataById' , {"id": this.id}).subscribe((response:any) =>{
      this.data = response;
    });
    
  }
  UpdateCityData(data:any){
      this.HttpClient.post('Countries/UpdateCountries' , { "Id":data.Id, "Name":data.Name , "ArabicName":data.ArabicName , "LatinName":data.LatinName , "Country":data.Country}).subscribe((response) =>{
      this.router.navigateByUrl("/pages/Countries");
      
      });
      
  }
  Delete(id:any){
    if(confirm('Are you sure you want to delete this Country')){
      this.HttpClient.post('Countries/DeleteCountries' , {"Id":id}).subscribe((response) =>{
          this.router.navigateByUrl("/pages/Countries");
      });
    }
    else{
      return;
    }
    
  }


}
