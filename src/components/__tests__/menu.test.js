import { fireEvent, render, waitFor } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_MENU } from "../../mocks/data"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => { 
            return Promise.resolve(RESTAURANT_MENU)
        }
    })
})

test("Add items to cart" , async () => {
    const menu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(menu.getByTestId("menu-items")))

    const btn = menu.getByTestId("add-btn")

    fireEvent.click(btn)

    const cart = menu.getByTestId("cart-item")
    // console.log(cart)
    expect(cart.textContent).toBe("Cart - 1 items")
})