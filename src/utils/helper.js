export function handleSearch(searchText , restaurantList){
    return restaurantList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
}