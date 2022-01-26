import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  /**
   * Input decorator
   * exposing "isFavourite" variable to the outside (available to the template of this component "favourite.component.html")
   * Input Alias - adding an OPTIONAL alias, in this case 'is-favorite' that can be used by the consumer to pass the state (app.component.html)
   */
  @Input('is-favorite') isFavourite!: boolean;

  /**
   * Output decorator.
   * Used for raising custom events from the component.
   * In this case "onFavouriteChanged" in app.component.ts captures this event
   * Output Alias - adding an OPTIONAL alias - "is-favorite-change" that is being used by "app.component.html" when consuming
   */
  @Output('on-favorite-change') changeEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isFavourite = !this.isFavourite;

    /**
     * Custom events
     */
    //this.change.emit(this.isFavourite); // passing a simple boolean

    //passing an object
    this.changeEvent.emit({ state: this.isFavourite });
  }
}

//interface for FavouriteChange in onFavouriteChanged in app.component.ts
export interface FavouriteChange {
  state: boolean;
}
