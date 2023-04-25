import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HommePageComponent } from './pages/homme-page/homme-page.component';
import { DernierArticleComponent } from './components/dernier-article/dernier-article.component';
import { ArticlesLinkComponent } from './components/articles-link/articles-link.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleComponent } from './pages/article/article.component';
import { EntTetePageArticlesComponent } from './components/ent-tete-page-articles/ent-tete-page-articles.component';
import { ButtonBackComponent } from './components/button-back/button-back.component';
import { VoyageResumeComponent } from './components/voyage-resume/voyage-resume.component';
import { NotreAvisComponent } from './components/notre-avis/notre-avis.component';
import { VoyagerPlusComponent } from './components/voyager-plus/voyager-plus.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HommePageComponent,
    DernierArticleComponent,
    ArticlesLinkComponent,
    FooterComponent,
    ArticleComponent,
    EntTetePageArticlesComponent,
    ButtonBackComponent,
    VoyageResumeComponent,
    NotreAvisComponent,
    VoyagerPlusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
