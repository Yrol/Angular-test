import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
})
export class FollowersComponent implements OnInit {
  followers: any[] = [
    { id: 1, name: 'James Bond', username: 'jbond' },
    { id: 2, name: 'John Doe', username: 'johnd' },
    { id: 3, name: 'Yrol Fernando', username: 'yfernando' },
    { id: 4, name: 'Michael Jordan', username: 'michaelj' },
  ];

  page!: string | null;
  orderBy!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //Getting the query parameters
    this.route.queryParamMap.subscribe((param) => {
      this.page = param.get('page');
      this.orderBy = param.get('orderBy');
    });
  }
}
