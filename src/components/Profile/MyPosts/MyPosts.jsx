import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    let postElement = props.posts.map(elem => <Post message={elem.message} likeCount={elem.likeCount}/>)
    let ref = React.createRef()


    let addPost=()=>{
        props.dispatch(addPostActionCreator())


    }

    let onPostChange = ()=>{

        let text = ref.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }


    return (
    <div className={s.postsBlock}>
      My posts
      <div>
          <div>
              <textarea onChange={ onPostChange } ref={ref} value={props.newPostText}/>
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