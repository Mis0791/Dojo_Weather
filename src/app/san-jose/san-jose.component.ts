import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  city = 'San Jose';
  humidity;
  tempAvg;
  tempHigh;
  tempLow;

  constructor(private _weatherService: WeatherService) { 
    this._weatherService.getWeather(this.city, (data) => {
      console.log(data);
      this.humidity = data.main.humidity;
      this.tempAvg = data.main.temp;
      this.tempAvg = Math.floor(this.tempAvg * (9/5) - 459.67);
      this.tempHigh = data.main.temp_max;
      this.tempHigh = Math.floor(this.tempHigh * (9/5) - 459.67);
      this.tempLow = data.main.temp_min;
      this.tempLow = Math.floor(this.tempLow * (9/5) - 459.67);
    });
  }

  ngOnInit() {
  }

}
