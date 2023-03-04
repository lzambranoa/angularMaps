import { Injectable } from '@angular/core';
import { LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map: Map | undefined;
  private markers: Marker[] = [];

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

  createMarkersFromPlaces( places: Feature[]) {
    if(!this.map) throw Error('Mapa no inicializado');

    this.markers.forEach( marker => marker.remove());
    const newMarkers = [];

    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup()
        .setHTML(`
        <h6>${place.text}</h6>
        <span>${place.place_name}</span>
        `);
      const newMarker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(this.map)

      newMarkers.push(newMarker);
    }

    this.markers = newMarkers
  }
}
