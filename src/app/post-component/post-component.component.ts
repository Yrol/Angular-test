import { BadInputError } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css'],
})
export class PostComponentComponent implements OnInit {
  form = new FormGroup({});

  posts!: any[];

  //fetching post
  constructor(private service: PostsService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe({
      next: (response: any) => {
        this.posts = response;
      },
      //using the custom app error classes
      error: (err: any) => {
        alert('An error occurred while fetching the data');
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  //creating post
  createPost(post: HTMLInputElement) {
    let postData: any = { title: post.value };
    this.service.createPost(postData).subscribe({
      next: (response: any) => {
        postData.id = response.id;
        this.posts.splice(0, 0, postData);
      },
      error: (err: AppError) => {
        if (err instanceof BadInputError) {
          //setting the errors dynamically to the form. Form requires to have a section/block to parse these errors
          this.form.setErrors(err.originalError);
        } else {
          //throw error to the custom global error handler class - 'AppErrorHandler'
          throw err;
        }
      },
      complete: () => {
        console.log('complete');
      },
    });
    post.value = '';
  }

  //updating posts
  updatePost(post: HTMLInputElement) {
    //using PATCH instead of PUT in order to update only certain fields of the post
    let postData: any = { isRead: true };
    this.service.updatePost(post.id, postData).subscribe({
      next: (response: any) => {
        let index = this.posts.indexOf(post);
        this.posts[
          index
        ].title = `Updated the title with a random word:${this.randomWord()}`;
      },
      error: (err: AppError) => {
        if (err instanceof BadInputError) {
          //setting the errors dynamically to the form. Form requires to have a section/block to parse these errors
          this.form.setErrors(err.originalError);
        } else {
          //throw error to the custom global error handler class - 'AppErrorHandler'
          throw err;
        }
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  //delete posts
  deletePost(post: HTMLInputElement) {
    this.service.deletePost(post.id).subscribe({
      next: (response: any) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      //using the custom app error classes
      error: (err: AppError) => {
        if (err instanceof NotFoundError) {
          alert('Post  not found');
        } else {
          //throw error to the custom global error handler class - 'AppErrorHandler'
          throw err;
        }
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  randomWord(): string {
    var words = ['Rock', 'Paper', 'Scissors'];
    var word = words[Math.floor(Math.random() * words.length)];
    return word;
  }
}
