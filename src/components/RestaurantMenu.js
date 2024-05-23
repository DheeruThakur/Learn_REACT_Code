import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import { IMG_CDN_LINK } from "../Constants"
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu"


const RestaurantMenu = () => {

    const {resId} = useParams()

    const restaurantData = useRestaurantMenu(resId)

    return (!restaurantData) 
            ? 
            <Shimmer /> 
            :
            (
                <div className="menu-container" style={{display:"flex"}}>
                    <div style={{marginRight:500}}>
                        <h1>Restaurant Id : {restaurantData.id}</h1>
                        <h2>{restaurantData.name}</h2>
                        <img src={IMG_CDN_LINK + restaurantData.cloudinaryImageId} style={{height:400}}/>
                        <h3>price : {parseInt(restaurantData.costForTwo)/200} Rs</h3>
                        <h3>{restaurantData.avgRating} stars</h3>
                        <h3>{restaurantData.areaName}</h3>
                        <h3>{restaurantData.city}</h3>
                    </div>
                    <div>
                        <h2>MENU</h2>
                        <li></li>
                        <li></li>
                        <li></li>

                    </div>
                </div>
            )
}

export default RestaurantMenu