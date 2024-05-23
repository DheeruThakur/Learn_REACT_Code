import { useState, useEffect } from "react"

const useRestaurantMenu = (resId) => {
    const [restaurantData , setRestaurantData] = useState(null)

    useEffect(() => {
        getRestaurantMenu()
    },[])

    async function getRestaurantMenu() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.60202294167309&lng=77.33847241848707&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        const menuData = await data.json()
        setRestaurantData(menuData.data.cards[2].card.card.info)
    }
    return restaurantData;
}

export default useRestaurantMenu;