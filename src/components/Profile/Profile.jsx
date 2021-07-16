import React from "react";
import s from "./Profile.module.css";
import MyPost from "./MyPost/MyPost";


const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
            </div>
            <div>
                ava + profile
            </div>
            <MyPost/>
        </div>
    );
}

export default Profile;