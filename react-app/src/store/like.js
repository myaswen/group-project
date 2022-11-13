import normalizeData from "../utils/normalize";

// Action types:
const LOAD_POST_LIKES = '/post/likes/all';


// Action creators:
const loadPostLikes = (postId, postLikes) => ({
  type: LOAD_POST_LIKES,
  payload: {
    postId,
    postLikes
  }
})


// Thunk action creators:
export const getPostLikes = (postId) => async (dispatch) => {
  const response = await fetch(`/api/posts/${postId}/likes`);

  if (response.ok) {
    const postLikes = await response.json();
    dispatch(loadPostLikes(postId, postLikes))
  } else {
    return [`Unable to fetch post ${postId}'s likes.`]
  }
}


// Initial 'likes' state:
const initialState = {
  posts: {}
}

// 'likes' reducer:
const likeReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_POST_LIKES:
      newState = {...state};
      newState.posts[action.payload.postId] = normalizeData(action.payload.postLikes.Likes);
      return newState;
    default:
      return state;
  }
}

export default likeReducer;
