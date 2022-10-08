import React from 'react'
import type { NextPage } from 'next'
import { Post } from "../types"

const Post: NextPage<{posts: Post}> = ({posts}): any => {

  const published_post = async (id: number) => {
    await fetch(`http://127.0.0.1:8000/api/publish/${id}`).then( feedback => alert(feedback))
      .catch(err => console.error(err))
  }

  const delete_post = async (title: string) => {
    let keyword = title.trim().split(" ")[0]

    if (confirm("Are you sure you want to delete this post?") === true){
        await fetch(`http://127.0.0.1:8000/api/delete/${keyword}`).then( feedback => window.location.reload())
        .catch(err => console.error(err))
    }
    window.location.reload()
  }

  return (
    <>
        <h1>{posts.title}</h1>
        <p>{posts.body}</p>
        { !posts.published && <button onClick={() => published_post(posts.id)}>Publish</button>}
        { posts.published && <button onClick={() => delete_post(posts.title)}>Delete</button> }

        
  </>
  )
   
}

export default Post