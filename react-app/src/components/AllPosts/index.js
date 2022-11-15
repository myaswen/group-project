import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as postActions from '../../store/post'
import * as followActions from '../../store/follow'

import PostCard from "../PostCard"

const AllPosts = () => {

  // subscribe to posts reducer
  // have a spot card for each post in posts state
  //
  const allPosts = useSelector(state => state.posts.allPosts)
  const user = useSelector(state => state.session.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(postActions.getAllPosts())
    if (user.id) dispatch(followActions.getAllFollowing(user.id))
  }, [dispatch])

  const allPostsArray = []
  for (let post in allPosts) {
    allPostsArray.unshift(allPosts[post])
  }

  console.log('allPosts in AllPosts component: ', allPostsArray)

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div>
          Placeholder for Form Bar
        </div>
        <div className="postsHolder">
          {allPostsArray.map(post => (
              <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllPosts;
