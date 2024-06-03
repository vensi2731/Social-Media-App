import "./share.scss";
import Image from "../../../assets/attrection in leh ladakh.jpg";
import Map from "../../../assets/attrection in leh ladakh.jpg";
import Friend from "../../../assets/attrection in leh ladakh.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../axios.js";

const Share = () => {
    // const [file, setFile] = useState(null);
    // const [desc, setDesc] = useState("");

    const { currentUser } = useContext(AuthContext);

    // const queryClient = useQueryClient();

    // const mutation = useMutation(
    //     (newPost) => {
    //         return makeRequest.post("/posts", newPost);
    //     },
    //     {
    //         onSuccess: () => {
    //             queryClient.invalidateQueries(["posts"]);
    //         },
    //     }
    // );

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     mutation.mutate({ desc });
    // };

    return (
        <div className="share">
            <div className="container">
                <div className="top">
                    <img src={currentUser.profilePic} alt="" />
                    <input
                        type="text"
                        placeholder={`What's on your mind ${currentUser.name}?`}
                        // onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <input
                            type="file"
                            id="file"
                            style={{ display: "none" }}
                            // onChange={(e) => setFile(e.target.files[0])}
                        />
                        <label htmlFor="file">
                            <div className="item">
                                <img src={Image} alt="" />
                                <span>Add Image</span>
                            </div>
                        </label>
                        <div className="item">
                            <img src={Map} alt="" />
                            <span>Add Place</span>
                        </div>
                        <div className="item">
                            <img src={Friend} alt="" />
                            <span>Tag Friends</span>
                        </div>
                    </div>
                    <div className="right">
                        <button 
                        // onClick={handleClick}
                        >Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;
