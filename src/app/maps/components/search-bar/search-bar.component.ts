import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {

  private debounceTimer?: NodeJS.Timeout

  constructor( private placesServices: PlacesService) { }

  //Debounce manual
  // Este metodo debe controlar la forma como se van a emitir los valores del input
  onQueryChanged( query: string) {
    
    if( this.debounceTimer ) clearTimeout( this.debounceTimer );

    this.debounceTimer = setTimeout(() => {
      this.placesServices.getPlacesByQuery( query )
    }, 350)
  }

}
