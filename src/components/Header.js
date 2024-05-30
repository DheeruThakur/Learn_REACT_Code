import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Header = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const {user} = useContext(UserContext);
    return (
        <div className="flex justify-between bg-pink-50 shadow-md">
            <a href="/">
                <img className="p-2 h-20" alt="logo" src="https://i.pinimg.com/736x/53/86/f8/5386f88ec5872dbcd07b49afac02b5f2.jpg"/>
            </a>
            <ul className="flex p-6">
                <li className="p-2"><Link to={"/about"}>About</Link></li>
                <li className="p-2"><Link to={"/contact-us"}>Contact Us</Link></li>
                <li className="p-2"><Link to={"/support"}>Support</Link></li>
                <li className="p-2"><Link to={"/cart"}>Cart</Link></li>
                <li className="p-2"><Link to={"/instamart"}>Instamart</Link></li>
            </ul>
            <span className="p-5 m-2 text-red-900">
                {user.name}
            </span>
            {
                (isLoggedIn) 
                ? 
                <button className="py-6 px-3" onClick={() => setIsLoggedIn(false)}>logout</button> 
                : 
                <Link to="/login"><button className="py-6 px-3" onClick={() => setIsLoggedIn(true)}>login</button></Link>
            }
            
        </div>
    )
}

export default Header ;