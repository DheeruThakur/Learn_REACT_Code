import { UseSelector, useSelector } from "react-redux"
import CartCard from "./CartCard"

const Cart = () => {

    const items = useSelector(state => state.items)
    
    return (
        <>
            <h1 className="flex justify-center font-bold text-2xl m-4">This is Cart page</h1>
            {/* <h2>Your cart is empty now</h2> */}
            <div className="flex">
                {
                    items.map(item => <CartCard key={item.id} {...item}/>)
                }
            </div>

        </>
    )
}

export default Cart