import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDonnesArticle } from 'src/app/mocks/donneesArticle.mock';
import { ARTICLES } from 'src/app/mocks/donneesArticle.mock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  article!: IDonnesArticle;
  titleSection: string[] = ['Le voyage', 'En résumé'];
  constructor(private activatedRout: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getArticle();
  }
  getArticleById(id: number) {
    return ARTICLES.find((article) => article.id === id);
  }

  getArticle() {
    const id = Number(this.activatedRout.snapshot.paramMap.get('id'));
    const articleFound = this.getArticleById(id);
    if (articleFound) {
      this.article = articleFound;
    } else {
      this.router.navigate(['']);
    }
  }
}
