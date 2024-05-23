import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false)

    return (
        <div className="header">
            <a href="/">
                <img alt="logo" src="https://i.pinimg.com/736x/53/86/f8/5386f88ec5872dbcd07b49afac02b5f2.jpg"/>
            </a>
            <ul>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact-us"}>Contact Us</Link></li>
                <li><Link to={"/support"}>Support</Link></li>
                <li><Link to={"/cart"}>Cart</Link></li>
                <li><Link to={"/instamart"}>Instamart</Link></li>
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