import type { IPosts } from '@/types/IPosts'
import axios from 'axios'

const PostService = () => {

  const getAll = async () => {
    const response = await axios.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts')
    return response.data
  }

  return {getAll}
}

export default PostService