import "./comments.scss";
import me from "../../../assets/a1.jpg"
import hey from "../../../assets/a2.jpg"
import { useContext, useState } from "react";
import{AuthContext} from "../../../context/authContext"


function Comments() {
    const {currentUser}= useContext(AuthContext);
    //temporary
    const comments=[
        {
            id:1,
            desc:"Loa world is good for branding",
            name:"Vensi italiya",
            userId:1,
            profilePocture:me
        },
        {
            id:2,
            desc:"Loa world is good for Baking",
            name:"Vensi italiya",
            userId:2,
            profilePocture:hey
        }
    ]
  return (
    <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="Write a comment"/>
                <button>Send</button>
            </div>

        {
            comments.map(comment=>(
                <div className="comment">
                    <img src={comment.profilePocture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))
        }
    </div>
  )
}

export default Comments