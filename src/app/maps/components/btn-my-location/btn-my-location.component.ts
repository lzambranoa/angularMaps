import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent  {

  constructor( 
      private mapService: MapService,
      private placesServices: PlacesService 
    ) { }

  goToMyLocation() {

    if(!this.placesServices.isUserLocationReady) throw Error('No hay ubicación de usuario');
    if(!this.mapService.mapIsReady) throw Error('No hay mapa disponible');

    this.mapService.flyTo(this.placesServices.useLocation!);
  }

}
