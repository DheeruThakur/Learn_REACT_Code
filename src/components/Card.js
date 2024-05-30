import { IMG_CDN_LINK } from "../Constants"
import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Card = ({...restaurant}) => {

    const {user} = useContext(UserContext);

    return (
        
        <div className="h-[340] w-[225] border-solid border-2 border-gray-500 rounded-md m-3 bg-pink-50 ">
            <img className="h-[180] w-[225]" alt="photo" src={IMG_CDN_LINK + restaurant.cloudinaryImageId} />
            <div className="pl-2 mt-1 pb-2">
                <h3 className="text-md">{restaurant.name}</h3>
                <h4 className="truncate text-sm">{restaurant.cuisines.join(", ")}</h4>
                <h5>Rating : {restaurant.avgRating}</h5>
                <span className="text-red-900 text-sm">
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                </span>
            </div>
        </div>
    )
}

export default Card