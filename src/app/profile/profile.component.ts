import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userId!: string | null;
  username!: string | null;

  /**
   * ActivatedRoute - part of the Router module that we can use for getting the route parameters
   */
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    //paramMap is an observable, hence it needs to be subscribed as below
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('userId');
      this.username = params.get('username');
    });
  }

  onUpdate() {
    //Programmatic navigation using Query / Optional Parameters (queryParams)
    this.router.navigate(['/followers'], {
      queryParams: {
        page: '1',
        orderBy: 'newest',
      },
    });

    //Programmatic navigation using regular parameters
    // this.router.navigate(['/followers', 1, 'jbond']);
  }
}
