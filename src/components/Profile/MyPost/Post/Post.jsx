import React from "react";
import s from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                 className={s.ava} alt=""/>
            {props.massage}
            <div className={s.like}>
            <span>like</span> {props.like}
            </div>
        </div>
    );
}

export default Post;