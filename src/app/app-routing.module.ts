import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSynonymComponent } from './create-synonym/create-synonym.component';
import { SearchSynonymComponent } from './search-synonym/search-synonym.component';
import { SynonymListComponent } from './synonym-list/synonym-list.component';

const routes: Routes = [
  {path: 'search', component: SearchSynonymComponent},
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'add', component: CreateSynonymComponent},
  {path: 'list', component: SynonymListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
