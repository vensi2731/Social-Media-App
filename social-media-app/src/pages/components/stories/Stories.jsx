import "./stories.scss";
import me from "../../../assets/a1.jpg";
import Archi from "../../../assets/a2.jpg";
import kush from "../../../assets/a3.jpg";
import Isha from "../../../assets/a4.jpg";
import kalu from "../../../assets/n1.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

function Stories() {
    const{currentUser}=useContext(AuthContext)
    // Temporary Data
    const stories = [
        {
            id: 1,
            name: "Vensi Italiya",
            img: Archi
        },
        {
            id: 2,
            name: "Archita Italiya",
            img: Archi
        },
        {
            id: 3,
            name: "Kush Italiya",
            img: Archi
        },
        {
            id: 4,
            name: "Isha Italiya",
            img: Archi
        }
    ];

    return (
        <div className="stories">
            <div  className="story">
                    <img src={currentUser.profilePic} alt=""/>
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
            {stories.map(story => (
                <div  className="story" key={story.id}>
                    <img src={story.img} alt={story.name} />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Stories;
