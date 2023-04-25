import { Component } from '@angular/core';
import { ARTICLES } from 'src/app/mocks/donneesArticle.mock';
import { IDonnesArticle } from 'src/app/mocks/donneesArticle.mock';

@Component({
  selector: 'app-dernier-article',
  templateUrl: './dernier-article.component.html',
  styleUrls: ['./dernier-article.component.css'],
})
export class DernierArticleComponent {
  dernierArticle: IDonnesArticle = ARTICLES[ARTICLES.length - 1];
  ngOnInit() {}
}
