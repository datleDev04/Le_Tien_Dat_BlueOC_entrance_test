import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../service/store/posts/posts.thunk'
import { AppDispatch } from '../service/store'
import { selectAllPosts, selectPostsError, selectPostsStatus } from '../service/store/posts/posts.slice'
import { Posts } from '../service/store/posts/posts.model'
import { Card } from 'antd'

function ListPosts() {
  const dispatch = useDispatch<AppDispatch>()
  const posts = useSelector(selectAllPosts)
  const status = useSelector(selectPostsStatus)
  const error = useSelector(selectPostsError)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts())
    }
  }, [status, dispatch])

  if (status === 'loading') {
    return <div>Loading posts...</div>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  return (

    <div className="flex flex-wrap gap-4 justify-center p-4">
      {posts.slice().reverse().map((post: Posts) => (
        <Card
          key={post.id}
          className="w-80"
          title={post.title}
          hoverable = { true }
          bordered = { true }
        >
          <p className="truncate-body">{post.body}</p>
        </Card>
      ))}
    </div>
    
  )
}

export default ListPosts