import { Component } from '@angular/core';
import { ARTICLES, IDonnesArticle } from 'src/app/mocks/donneesArticle.mock';

@Component({
  selector: 'app-articles-link',
  templateUrl: './articles-link.component.html',
  styleUrls: ['./articles-link.component.css'],
})
export class ArticlesLinkComponent {
  articles: IDonnesArticle[] = ARTICLES;
  autreArticles: IDonnesArticle[] = [];
  ngOnInit() {
    this.getArticles();
  }
  getArticles(): IDonnesArticle[] {
    const dernierarticle = this.articles[this.articles.length - 1];
    this.articles.forEach((ele) => {
      if (ele != dernierarticle) {
        this.autreArticles.push(ele);
      }
    });
    return this.autreArticles;
  }
}
