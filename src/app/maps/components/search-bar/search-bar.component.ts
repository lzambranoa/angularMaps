import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {

  private debounceTimer?: NodeJS.Timeout

  constructor() { }

  //Debounce manual
  // Este metodo debe controlar la forma como se van a emitir los valores del input
  onQueryChanged( query: string) {
    
    if( this.debounceTimer ) clearTimeout( this.debounceTimer );

    this.debounceTimer = setTimeout(() => {
      console.log("mandar este query", query)
    }, 350)
  }

}
