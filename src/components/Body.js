import { useEffect, useState } from "react"
import Card from "./Card"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"


function handleSearch(searchText , restaurantList){
    return restaurantList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
}

const Body = () => {
    const [searchText , setSearchText] = useState("")
    const [allRestaurantList , setAllRestaurantList] = useState([])
    const [filteredRestaurantList , setFilteredRestaurantList] = useState([])


    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.60202294167309&lng=77.33847241848707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json()
        setAllRestaurantList(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurantList(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    useEffect(() => {
        
        getRestaurants()
       
    },[])

    // not render the component (Early return)
    if(!allRestaurantList) return null

    // Conditional rendering
    return (allRestaurantList.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="input-search"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="search-btn" onClick={() => {
                    const filteredRestaurants = handleSearch(searchText , allRestaurantList)
                    setFilteredRestaurantList(filteredRestaurants)
                }}>
                    Search
                </button>
            </div>
            <div className="body">
                {   (filteredRestaurantList.length === 0) ? <h1>No Restaurant is available with this search</h1>
                    : filteredRestaurantList.map(restaurant => {
                        return (
                            <Link to={"/restaurant-menu/" + restaurant.info.id} key={restaurant.info.id}><Card {...restaurant.info}/></Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Body