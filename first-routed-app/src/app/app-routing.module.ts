import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'search', component: SearchComponent },
  { path: 'tracks/:id', component: TrackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }