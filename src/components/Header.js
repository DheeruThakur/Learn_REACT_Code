import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    console.log(useState())

    return (
        <div className="header">
            <a href="/">
                <img alt="logo" src="https://scontent.fdel76-1.fna.fbcdn.net/v/t39.30808-6/300375900_587661383052236_9166723355242974276_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r8uRL0_p-VMQ7kNvgHRhD9W&_nc_ht=scontent.fdel76-1.fna&oh=00_AYDuwMrV7fywGRQxcsCfJZvjrRyFwYxqYHT0GhNwEwNXXw&oe=6644D738"/>
            </a>
            <ul>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact-us"}>Contact Us</Link></li>
                <li><Link to={"/support"}>Support</Link></li>
                <li><Link to={"/cart"}>Cart</Link></li>
            </ul>
            {
                (isLoggedIn) 
                ? 
                <button onClick={() => setIsLoggedIn(false)}>logout</button> 
                : 
                <Link to="/login"><button onClick={() => setIsLoggedIn(true)}>login</button></Link>
            }
            
        </div>
    )
}

export default Header ;