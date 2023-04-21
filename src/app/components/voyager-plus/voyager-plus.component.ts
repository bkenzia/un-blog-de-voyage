import { Component, Input } from '@angular/core';
import { IDonnesArticle } from 'src/app/mocks/donneesArticle.mock';

@Component({
  selector: 'app-voyager-plus',
  templateUrl: './voyager-plus.component.html',
  styleUrls: ['./voyager-plus.component.css'],
})
export class VoyagerPlusComponent {
  @Input() voyagerPlus?: IDonnesArticle;
}
