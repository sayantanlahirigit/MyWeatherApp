import { Component, OnInit } from '@angular/core';
import { Weather, WeatherData } from './models/weather.model';
import { WeatherService } from './Services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService)
  {

  }
  cityName: string ='Kolkata';
  weatherData?: WeatherData
  

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
  }

  onSubmit(){
    this.getWeatherData(this.cityName)
    this.cityName='';
  }

  private getWeatherData(cityName:string)
  {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next:(response)=>{
        this.weatherData=response;
        console.log(response);
      }
    });
  }
 
}
