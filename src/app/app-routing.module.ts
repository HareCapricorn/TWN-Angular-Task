import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ArticleComponent } from './components/article/article.component';
import { GameOfLifeComponent } from './components/gameoflife/gameoflife.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'list', component: TableComponent },
  { path: 'life', component: GameOfLifeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
