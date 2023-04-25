import { Component } from '@angular/core';
import { ARTICLES, IDonnesArticle } from 'src/app/mocks/donneesArticle.mock';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  dernierArticle: IDonnesArticle = ARTICLES[ARTICLES.length - 1];
  infoDernierArticleVille?: WeatherData;
  constructor(private weatherService: WeatherService) {}
  ngOnInit() {
    this.weatherService
      .getWeatherData(this.dernierArticle.ville, '2022-05-17')
      .subscribe((next) => (this.infoDernierArticleVille = next));
  }
}
