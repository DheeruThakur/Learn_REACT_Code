import { useState , useContext} from "react"
import Card from "./Card"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { handleSearch } from "../utils/helper"
import useRestaurants from "../utils/useRestaurants"
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext"


const Body = () => {

    // const {user , setUser} = useContext(UserContext);
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
            <div className="bg-pink-50 my-1 p-4">
                <input
                    data-testid="search-input"
                    type="text"
                    className="border-solid border-2 border-sky-500 rounded-md mr-1"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button data-testid="search-btn" className="bg-purple-300 rounded-md p-1 h-7" onClick={() => {
                    const filteredRestaurants = handleSearch(searchText , allRestaurantList)
                    setFilteredRestaurantList(filteredRestaurants)
                }}>
                    Search
                </button>

                {/* <input
                    type="text"
                    className="border-solid border-2 border-sky-500 rounded-md ml-10"
                    value={user.name}
                    onChange={(e) => setUser({...user , name : e.target.value})}
                /> */}
            </div>
            
            <div className="flex flex-wrap justify-between" data-testid="res-list">
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