import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HommePageComponent } from './pages/homme-page/homme-page.component';
import { DernierArticleComponent } from './components/dernier-article/dernier-article.component';
import { ArticlesLinkComponent } from './components/articles-link/articles-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HommePageComponent,
    DernierArticleComponent,
    ArticlesLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
