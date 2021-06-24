import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CityService } from '../city.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  city: [any] | any;
  constructor(private HttpClient:HttpClient , private service:CityService , private router:Router) { }

  ngOnInit(): void {
    this.GetAllCity();
  }
  GetAllCity(){
    this.HttpClient.get('Countries/GetAllCountries').subscribe((response)=>{
      this.city = response;
      console.log(response);
    });
    
  }
  onChangeCity(c:any){
      localStorage.setItem('City' , c.Name);
      localStorage.setItem('CityId' , c.Id);
      this.service.Reload();  
  }
  navigate(){
    this.router.navigate(["pages/AddCity"]);
  }
  language(){
    if(localStorage.getItem('lang') == "en"){
      return "en";
    }
    var x = 3;
    return "ar";
  }
}
