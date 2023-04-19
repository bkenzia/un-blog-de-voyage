import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HommePageComponent } from './pages/homme-page/homme-page.component';
import { ArticleComponent } from './pages/article/article.component';

const routes: Routes = [
  {
    path: '',
    component: HommePageComponent,
  },
  {
    path: 'article/:id',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
