import * as posts from '../actions/posts.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export const postsAdapter = createEntityAdapter<any>({
  selectId: (post: any) => post.id
});

export interface PostsState extends EntityState<any> {}

const defaultPostsState = {
  error: null,
  pending: false,
  ids: [],
  entities: []
};

export const initialState: PostsState = postsAdapter.getInitialState(defaultPostsState);

export function postsReducer(state = initialState, action: posts.All) {
  switch (action.type) {
    case posts.GET_POSTS: {
      return {
        ...state,
        error: null,
        pending: true
      };
    }

    case posts.GET_POSTS_SUCCESS: {
      console.log(action.payload);
      return {
        ...postsAdapter.addMany(action.payload, state),
        error: null,
        pending: false
      };
    }

    case posts.GET_POSTS_ERROR: {
      return {
        ...state,
        error: action.payload,
        pending: false
      };
    }

    default: {
      return state;
    }
  }
}

export const selectPostsFeature = createFeatureSelector<any>('posts');
export const selectPosts = createSelector(selectPostsFeature, (state: any) => state);

export const getPostById = (id: string) =>
  createSelector(selectPostsEntities, (items: any) => {
    if (items) {
      return items[id];
    }
  });

export const getPosts = () => createSelector(selectAllPosts, (posts: any) => posts);

export const {
  selectIds: selectPostsIds,
  selectEntities: selectPostsEntities,
  selectAll: selectAllPosts,
  selectTotal: selectTotalPosts
} = postsAdapter.getSelectors(selectPosts);
