import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { envirenment } from 'src/envirenments/envirenment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiUrl = envirenment.weatherApi.url;
  apiToken = envirenment.weatherApi.token;
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string, date: string): Observable<WeatherData> {
    const url = `${this.apiUrl}${cityName}/${date}?unitGroup=uk&key=${this.apiToken}&contentType=json`;
    return this.http.get<WeatherData>(url);
  }
}
