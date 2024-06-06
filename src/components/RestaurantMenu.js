import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import { IMG_CDN_LINK } from "../Constants"
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"


const RestaurantMenu = () => {

    const {resId} = useParams()
    const dispatch = useDispatch();

    const restaurantData = useRestaurantMenu(resId)

    const handleCart = () => {
        dispatch(addItem(restaurantData))
    }

    return (!restaurantData) 
            ? 
            <Shimmer /> 
            :
            (
                <div className="flex justify-between" data-testid="menu-items">
                    <div  className="m-5">
                        <h1 className="px-10">Restaurant Id : {restaurantData.id}</h1>
                        <h2 className="px-10">{restaurantData.name}</h2>
                        <img src={IMG_CDN_LINK + restaurantData.cloudinaryImageId} style={{height:400}}/>
                        <h3 className="px-28">price : {parseInt(restaurantData.costForTwo)/200} Rs</h3>
                        <h3 className="px-28">{restaurantData.avgRating} stars</h3>
                        <h3 className="px-28">{restaurantData.areaName}</h3>
                        <h3 className="px-28">{restaurantData.city}</h3>
                        <button data-testid="add-btn" className="bg-purple-500 px-36 rounded-md" onClick={() => handleCart()}>Add</button>
                    </div>
                    <div className="mt-10 mr-5">
                        <h2 >MENU</h2>
                        <li></li>
                        <li></li>
                        <li></li>

                    </div>
                </div>
            )
}

export default RestaurantMenu