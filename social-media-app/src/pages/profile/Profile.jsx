import "./profile.scss";
import cover from "../../assets/Beautiful-Sunset-View-And-Sand-Dunes-Between-Hunder-And-Diskit-Of-Nubra-Valley.jpg"
import profile from "../../assets/a3.jpg"
import { EmailOutlined, FacebookTwoTone, Instagram, Language, LinkedIn, MoreVert, Pinterest, Place, Twitter } from "@mui/icons-material";
import Posts from "../components/posts/Posts";

const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img src={cover} alt="" className="cover" />
                <img src={profile} alt="" className="profilePic" />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="http://Facebook.com">
                            <FacebookTwoTone fontSize="large" />
                        </a>
                        <a href="http://Facebook.com">
                            <Instagram fontSize="large" />
                        </a>
                        <a href="http://Facebook.com">
                            <Twitter fontSize="large" />
                        </a>
                        <a href="http://Facebook.com">
                            <LinkedIn fontSize="large" />
                        </a>
                        <a href="http://Facebook.com">
                            <Pinterest fontSize="large" />
                        </a>
                    </div>
                    <div className="center">
                        <span>Vensi Italiya</span>
                        <div className="info">
                            <div className="item">
                                <Place />
                                <span>USA</span>
                            </div>
                            <div className="item">
                                <Language />
                                <span>Lol.World</span>
                            </div>
                        </div>
                        <button>follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlined />
                        <MoreVert />
                    </div>
                </div>
            <Posts/>
            </div>
        </div>
    )
}
export default Profile;