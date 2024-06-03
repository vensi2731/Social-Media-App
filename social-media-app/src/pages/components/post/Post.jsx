import "./post.scss";
import { FavoriteBorderOutlined, FavoriteOutlined, TextsmsOutlined, ShareOutlined, MoreHoriz } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

function Post({ post }) {

    const[commentOpen,setCommentOpen]=useState(false);
    //Temporary
    const liked = false;

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt={post.name} />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date">1 min ago</span>
                        </div>
                    </div>
                    <MoreHoriz />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    {post.img && <img src={post.img} alt="" />}
                </div>
                <div className="info">
                    <div className="item">
                        {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
                        12 Likes
                    </div>
                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                        <TextsmsOutlined />
                        12 Comments
                    </div>
                    <div className="item">
                        <ShareOutlined />
                        Share
                    </div>
                </div>
                {commentOpen && <Comments/>}
            </div>
        </div>
    );
}

export default Post;
