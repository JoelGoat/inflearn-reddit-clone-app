import { Post } from '@/src/types'
import axios from 'axios'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const PostPage = () => {
  const router = useRouter()
  const { identifier, sub, slug } = router.query

  const { data: post, error } = useSWR<Post>(identifier && slug ? `/posts/${identifier}/${slug}` : null)

  return <div>slug</div>
}

export default PostPage
