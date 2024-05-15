import { useState } from "react";


const Header = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false)

    return (
        <div className="header">
            <a href="/">
                <img alt="Logo" src="https://scontent.fdel76-1.fna.fbcdn.net/v/t39.30808-6/300375900_587661383052236_9166723355242974276_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r8uRL0_p-VMQ7kNvgHRhD9W&_nc_ht=scontent.fdel76-1.fna&oh=00_AYDuwMrV7fywGRQxcsCfJZvjrRyFwYxqYHT0GhNwEwNXXw&oe=6644D738"/>
            </a>
            
            <ul>
                <li>About</li>
                <li>Contact Us</li>
                <li>Support</li>
                <li>Cart</li>
            </ul>
            {
                (isLoggedIn) 
                ? 
                <button onClick={() => setIsLoggedIn(false)}>logout</button> 
                : 
                <button onClick={() => setIsLoggedIn(true)}>login</button>
            }
            
        </div>
    )
}

export default Header ;