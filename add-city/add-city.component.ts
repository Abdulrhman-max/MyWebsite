import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {
  CityName:string | any;
  ArabicName:string | any;
  LatinName:string | any;
  Country:string | any;
  constructor(private HttpClient:HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.GetCountry();
  }
  AddCity(){
    this.HttpClient.post('Cities/InsertCities' , {"Name":this.CityName , "ArabicName":this.ArabicName , "LatinName":this.LatinName}).subscribe((response) =>{
        this.router.navigate(["/pages/City"]);
    })
  }
  GetCountry(){
    this.HttpClient.get("Cities/GetAllCities").subscribe((r) =>{
      this.Country = r;
    })
  }

}
