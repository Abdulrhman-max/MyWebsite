import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CityService } from '../city.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  city: [any] | any;
  constructor(private HttpClient:HttpClient , private service:CityService , private router:Router) { }

  ngOnInit(): void {
    this.GetAllCity();
  }
  GetAllCity(){
    this.HttpClient.get('Cities/GetAllCities').subscribe((response)=>{
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
    return "ar";
  }
  }
