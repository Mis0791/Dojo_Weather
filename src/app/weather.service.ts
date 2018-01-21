import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(city, cb) {
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1c94a5bc506645ca4bc240b7c0dc18bb`).subscribe(
      (res) => {
        cb(res.json());
      }
    )
  }

}
