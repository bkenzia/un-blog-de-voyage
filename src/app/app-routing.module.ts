import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HommePageComponent } from './pages/homme-page/homme-page.component';

const routes: Routes = [
  {
    path: '',
    component: HommePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
