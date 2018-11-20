import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as PostsAction from '../actions/posts.action';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MainService } from '../../services/main.service';

@Injectable()
export class PostsEffects {
  @Effect()
  companies$: Observable<Action> = this.actions$
    .pipe(
      ofType(PostsAction.GET_POSTS),
      switchMap((action: any) => {
        return this.mainService.getPosts().pipe(
          map((posts: any) => {
            return new PostsAction.GetPostsSuccess(posts);
          }),
          catchError((error: any) => {
            console.log(error);
            return of(new PostsAction.GetPostsError({ error }));
          })
        );
      })
    );

  constructor(private actions$: Actions, private mainService: MainService) {}
}
