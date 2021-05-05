import React from 'react';
import s from './Post.module.css'


const Post = (props) => {


  return (
    <div className={s.item}>
      <img src="https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/avatarki-dlya-muzhchin-v-whatsapp-5.jpg" alt="" />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;