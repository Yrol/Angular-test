import { Component } from '@angular/core';
import { FavouriteChange } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post = {
    title: 'hello-world',
    isFavourite: true,
  };

  /**
   * Custom event emit capture
   * Using the FavouriteChange interface defined in "favourite.component.ts" for strict types
   */
  onFavouriteChanged(favourite: FavouriteChange) {
    console.log('Favourite Changed:', favourite.state);
  }
}
