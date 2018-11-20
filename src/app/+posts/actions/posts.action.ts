import { Action } from '@ngrx/store';

export const GET_POSTS = '[POSTS] Get Posts';
export const GET_POSTS_SUCCESS = '[POSTS] Get Posts Success';
export const GET_POSTS_ERROR = '[POSTS] Get Posts Error';

export class GetPosts implements Action {
  readonly type = GET_POSTS;
}

export class GetPostsSuccess implements Action {
  readonly type = GET_POSTS_SUCCESS;

  constructor(public payload: any) {}
}

export class GetPostsError implements Action {
  readonly type = GET_POSTS_ERROR;

  constructor(public payload: any) {}
}

export type All = GetPosts | GetPostsSuccess | GetPostsError;
