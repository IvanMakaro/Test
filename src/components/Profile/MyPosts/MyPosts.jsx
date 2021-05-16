import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElement = props.posts.map(elem => <Post message={elem.message} likeCount={elem.likeCount}/>)

    let newPostElement = React.createRef()

    let addPost=()=>{
    let text = newPostElement.current.value
    }

    return (
    <div className={s.postsBlock}>
      My posts
      <div>
          <div>
              <textarea ref={newPostElement} ></textarea>
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
            <button>Remove</button>
          </div>
      </div>

      <div className={s.posts}>
          {postElement}
      </div>

    </div>
  )
}

export default MyPosts;