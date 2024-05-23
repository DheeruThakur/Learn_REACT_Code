import { useState, useEffect } from "react"
import { FETCH_RESTAURANT_URL } from "../Constants"

const useRestaurants = () => {
    const [allRestaurantList , setAllRestaurantList] = useState([])
    const [filteredRestaurantList , setFilteredRestaurantList] = useState([])


    async function getRestaurants() {
        const data = await fetch(FETCH_RESTAURANT_URL)
        const jsonData = await data.json()
        setAllRestaurantList(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurantList(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    useEffect(() => {
        
        getRestaurants()
       
    },[])

    return [allRestaurantList , filteredRestaurantList , setFilteredRestaurantList]
}

export default useRestaurants