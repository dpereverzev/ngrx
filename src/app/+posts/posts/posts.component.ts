import { Component, OnInit } from '@angular/core';
import * as PostsAction from '../actions/posts.action';
import { select, Store } from '@ngrx/store';
import { getPosts, selectPosts } from '../reducers/posts.reducer';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new PostsAction.GetPosts());

    this.store.pipe(select(getPosts())).subscribe((posts: any) => {
      this.posts = posts;
    });
  }
}
