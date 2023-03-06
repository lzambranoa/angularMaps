import { Component } from '@angular/core';
import { PlacesService } from '../../services';
import { Feature } from '../../interfaces/places';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent  {

  public selectId: string = '';

  constructor(private placesService: PlacesService,
              private mapService: MapService) { }

  get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[]{
    return this.placesService.places;
  }

  flyTo( place: Feature ){

    this.selectId = place.id;
    
    const [lng, lat ] = place.center;
    this.mapService.flyTo([lng, lat]);
  }
  getDirections( place: Feature){

    if(!this.placesService.useLocation) throw Error('No existe un UserLocation');

    this.placesService.deletePlaces();

    const start = this.placesService.useLocation;
    const end = place.center as [number, number];

      this.mapService.getRouteBetweenPoints(start, end)
    }

    

}
