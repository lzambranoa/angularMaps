import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor( private placesService: PlacesService) { }
  ngAfterViewInit(): void {

    if( !this.placesService.useLocation) throw Error("No hay placesService.useLocation");
    
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
      });
      
  }

 

}
