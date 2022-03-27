import { Component } from '@angular/core';
import { FavouriteChange } from '../favourite/favourite.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  post = {
    title: 'hello-world',
    isFavourite: true,
  };

  project = {
    assignee: {
      name: null,
    },
  };

  viewType = 'list';

  /**
   * Custom event emit capture
   * Using the FavouriteChange interface defined in "favourite.component.ts" for strict types
   */
  onFavouriteChanged(favourite: FavouriteChange) {
    console.log('Favourite Changed:', favourite.state);
  }
}
