import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map: Map | undefined;

  get mapIsReady() {
    return !!this.map;
  }

  // este metodo me permite reestablecer el mapa
  setMap( map: Map ){
    this.map = map;
  }

  // este metodo me permite volver a mi marcador por default
  flyTo( coords: LngLatLike ) {
    if( !this.mapIsReady ) throw Error('El mapa no esta inicializado');

    this.map?.flyTo({
      zoom: 14,
      center: coords
    })
  }
}
