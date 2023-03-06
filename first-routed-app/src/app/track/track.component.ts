import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit{
  //Osserva gli eventi sulla route tracks, restituisce la ParamMap che contiene tutti i   
  //parametri passati all’url
  routeObs!: Observable<ParamMap>; 

  track: any; //Qui salverò la traccia selezionata
  spotifyServiceObs!: Observable<any>

  //Usiamo la dependency injection per farci mandare i moduli del routing e dello    
  //SpotifyService
  constructor(
    private route: ActivatedRoute, 
    private service: SpotifyService,
    private location: Location ) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let trackId = params.get('id'); //Ottengo l'id dai parametri
    console.log (trackId); //Stampo su console
    //spotifyServiceObs va dichiarato
    if (trackId != null) {
      this.spotifyServiceObs = this.service.getTrack(trackId) ;
      this.spotifyServiceObs.subscribe((data)=>this.track = data)
    }
  }


  back() : void {
    this.location.back();
  }


}