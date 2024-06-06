import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import logoImage from "../assets/img/logo.png"
import useOnline from "../utils/useOnline";


const Header = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const {user} = useContext(UserContext);

    const cartItems = useSelector(state => state.items);
    // console.log(cartItems)

    const isOnline = useOnline();

    return (
        <div className="flex justify-between bg-pink-50 shadow-md">
            <a href="/">
                <img data-testid="logo" className="p-2 h-20" alt="logo" src={logoImage}/> 
            </a>
            <ul className="flex p-6">
                <li className="p-2"><Link to={"/about"}>About</Link></li>
                <li className="p-2"><Link to={"/contact-us"}>Contact Us</Link></li>
                <li className="p-2"><Link to={"/support"}>Support</Link></li>
                <li className="p-2"><Link to={"/instamart"}>Instamart</Link></li>
                <li data-testid="cart-item" className="p-2"><Link to={"/cart"}>Cart - {cartItems.length} items</Link></li>
            </ul>
            <div data-testid="online" className="p-5 m-2">
                {
                    isOnline ? <>&#9989;</> : <>&#10060;</>
                }
            </div>
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