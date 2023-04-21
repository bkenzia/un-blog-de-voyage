import { Component, Input } from '@angular/core';
import { IDonnesArticle } from 'src/app/mocks/donneesArticle.mock';

@Component({
  selector: 'app-ent-tete-page-articles',
  templateUrl: './ent-tete-page-articles.component.html',
  styleUrls: ['./ent-tete-page-articles.component.css'],
})
export class EntTetePageArticlesComponent {
  @Input() item?: IDonnesArticle;
}
