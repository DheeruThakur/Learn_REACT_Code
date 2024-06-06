import { IMG_CDN_LINK } from "../Constants"
import { useContext } from "react"
import UserContext from "../utils/UserContext"
import { useDispatch } from "react-redux"
import { removeItem } from "../utils/cartSlice"

const CartCard = ({...restaurant}) => {

    const {user} = useContext(UserContext);
    const dispatch = useDispatch();

    const handleCart = () => {
        dispatch(removeItem(restaurant))
    }

    return (
        
        <div className="h-[340] w-[225] border-solid border-2 border-gray-500 rounded-md m-3 bg-pink-50">
            <img className="h-[180] w-[225]" alt="photo" src={IMG_CDN_LINK + restaurant.cloudinaryImageId} />
            <div className="pl-2 mt-1 pb-2">
                <h3 className="text-md">{restaurant.name}</h3>
                <h4 className="truncate text-sm">Price - {restaurant.costForTwo/200} rupees</h4>
                <h5>Rating : {restaurant.avgRating}</h5>
            </div>
            <div className="pl-10">
                <button className="bg-purple-500 px-8" onClick={() => handleCart()}>Remove</button>
            </div>
        </div>
    )
}

export default CartCard