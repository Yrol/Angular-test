import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  //exposing "isFavourite" variable to the outside
  @Input() isFavourite!: boolean;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isFavourite = !this.isFavourite;
  }
}
