import React, {useState} from 'react'


function createForm() {
    const [post, setPost] = useState({ title: "", content: ""})
    
    const submit = (e: any) => {
      e.preventDefault()

      let formData = new FormData()
      formData.append("title", post.title)
      formData.append("body", post.content)

      fetch("http://127.0.0.1:8000/api/create-post",
            {
              body: formData,
              method: "post"
            }
      ).then( feedback => console.log(feedback))
      .catch(err => console.error(err))
        
    }
    const handleChange = (e: any) => {
      const name = e.target.name
      const value = e.target.value

      setPost({...post, [name]: value })
    }
  return (
    <>
        <h3>Create Post</h3>
        <form action="" onSubmit={submit}>
            <fieldset>
                <legend>Post</legend>
                <p> <input type="text" name="title" onChange={handleChange} placeholder="Post Title" size={40}/> </p>
                <p> <textarea cols={50} rows={10} name="content" onChange={handleChange}>Post content</textarea> </p>

                <button type="submit">Create</button>
            </fieldset>
            
        </form>
    
    </>
  )
}

export default createForm