import "./leftBar.scss";
import Friends from "../../../assets/a3.jpg";
import Groups from "../../../assets/a1.jpg";
import Market from "../../../assets/a2.jpg";
import Watch from "../../../assets/a4.jpg";
import Memories from "../../../assets/c1.jpeg";
import Events from "../../../assets/c2.jpeg";
import Gaming from "../../../assets/c3.jpeg";
import Gallery from "../../../assets/c4.jpeg";
import Videos from "../../../assets/n1.jpg";
import Messages from "../../../assets/n2.jpg";
import Tutorials from "../../../assets/n3.jpg";
import Courses from "../../../assets/n4.jpg";
import Fund from "../../../assets/n5.jpg";
import { Style } from "@mui/icons-material";

const LeftBar = () => {
    return (
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img
                            src={Friends}
                            alt=""
                        />
                        <span>Vensi Italiya</span>
                    </div>
                    <div className="item">
                        <img src={Friends}
                            alt="" srcset="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups}
                            alt="" srcset="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Market}
                            alt="" srcset="" />
                        <span>Market</span>
                    </div>
                    <div className="item">
                        <img src={Watch}
                            alt="" srcset="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories}
                            alt="" srcset="" />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your Shortcuts</span>
                    <div className="item">
                        <img src={Events}
                            alt="" srcset="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gaming}
                            alt="" srcset="" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={Gallery}
                            alt="" srcset="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Messages}
                            alt="" srcset="" />
                        <span>Messages</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={Videos}
                            alt="" srcset="" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Tutorials}
                            alt="" srcset="" />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={Courses}
                            alt="" srcset="" />
                        <span>Courses</span>
                    </div>
                    <div className="item">
                        <img src={Fund}
                            alt="" srcset="" />
                        <span>Fund</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LeftBar;