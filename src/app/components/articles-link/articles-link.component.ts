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
    const dernierarticle = this.articles.pop();
    this.articles.forEach((ele) => {
      console.log(ele);
      if (ele != dernierarticle) {
        console.log('ele', ele);
        this.autreArticles.push(ele);
      }
    });
    return this.autreArticles;
  }
}
