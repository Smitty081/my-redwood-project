import { db } from 'src/lib/db'

export const examplePosts = () => {
  return db.examplePost.findMany()
}
