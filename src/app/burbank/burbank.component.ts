import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city = 'Burbank';
  humidity;
  tempAvg;
  tempHigh;
  tempLow;

  constructor(private _weatherService: WeatherService) {
    this._weatherService.getWeather(this.city, (data) => {
      console.log(data);
      this.humidity = data.main.humidity;
      this.tempAvg = data.main.temp;
      this.tempHigh = data.main.temp_max;
      this.tempLow = data.main.temp_min;
    });
   }


  ngOnInit() {
  }

}