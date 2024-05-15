import { IMG_CDN_LINK } from "../Constants"

const Card = ({...restaurant}) => {
    return (
        
        <div className="card">
            <img alt="photo" src={IMG_CDN_LINK + restaurant.cloudinaryImageId} />
            <div className="card-content">
                <h3>{restaurant.name}</h3>
                <h4>{restaurant.cuisines.join(", ")}</h4>
                <h5>Rating : {restaurant.avgRating}</h5>
            </div>
        </div>
    )
}

export default Card