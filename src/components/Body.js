import { useState } from "react"
import Card from "./Card"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { handleSearch } from "../utils/helper"
import useRestaurants from "../utils/useRestaurants"
import useOnline from "../utils/useOnline"


const Body = () => {
    const [searchText , setSearchText] = useState("")

    const [allRestaurantList , filteredRestaurantList , setFilteredRestaurantList] = useRestaurants();

    // not render the component (Early return)
    if(!allRestaurantList) return null


    const isOnline = useOnline();

    if(!isOnline){
        return <>
                <h1>you are Offline</h1>
                <h1>please check your internet connection</h1>
              </>
    }


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