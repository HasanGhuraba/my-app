import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post.jsx";


const MyPost = () => {
    return (

            <div className={s.item}>
                my post
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>

                    <Post massage='hi, how are you' like="2"/>
                    <Post massage="It' s my first post" like="5"/>
                </div>
            </div>

    );
}

export default MyPost;