import "./rightBar.scss"
import friend from "../../../assets/attrection in leh ladakh.jpg"

const RightBar=()=>{
    return(
        <div className="rightbar">
            <div className="container">
                <div className="item">
                    <span>Suggest for You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend}/> 
                            <span>Vensi Italiya</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend}/> 
                            <span>Vensi Italiya</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activity</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend}/> 
                            <p>
                            <span>Vensi Italiya</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend}/> 
                            <p>
                            <span>Vensi Italiya</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend}/> 
                            <p>
                            <span>Vensi Italiya</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend}/> 
                            <p>
                            <span>Vensi Italiya</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend}/> 
                            <div className="online"></div>
                            <span>Vensi Italiya</span> 
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend}/> 
                            <div className="online"></div>
                            <span>Vensi Italiya</span> 
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend}/> 
                            <div className="online"></div>
                            <span>Vensi Italiya</span> 
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend}/> 
                            <div className="online"></div>
                            <span>Vensi Italiya</span> 
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend}/> 
                            <div className="online"></div>
                            <span>Vensi Italiya</span> 
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend}/> 
                            <div className="online"></div>
                            <span>Vensi Italiya</span> 
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend}/> 
                            <div className="online"></div>
                            <span>Vensi Italiya</span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar