import React from 'react'
import type { NextPage } from 'next'
import { Post } from "../types"

const Post: NextPage<{posts: Post}> = ({posts}) => {
  return (
    <>
        <h1>{posts.title}</h1>
        <p>{posts.body}</p>
    </>
  )
}

export default Post