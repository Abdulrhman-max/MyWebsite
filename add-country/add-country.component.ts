import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
Name:string | any;
ArabicName:string | any;
LatinName: string | any;
data:string | any;
City:string | any;
  constructor(private HttpClient:HttpClient  , private router:Router) { }

  ngOnInit(): void {
    
  }
  AddCountry(){
    this.HttpClient.post('Countries/InsertCountries' , {"Name":this.Name , "ArabicName":this.ArabicName , "LatinName":this.LatinName}).subscribe((response) => {
      this.router.navigateByUrl("/pages/Countries");
    });
    
  }
  GetAllCities(){
   this.HttpClient.get('Cities/GetAllCities').subscribe((response) => {
    this.data = response;
   });
  }

}
