import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { OggettoComponent} from './oggetto/oggetto.component';
const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'oggetto', component: OggettoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
