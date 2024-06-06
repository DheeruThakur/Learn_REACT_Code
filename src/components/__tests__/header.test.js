import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import store from "../../utils/store"
import {StaticRouter} from "react-router-dom/server"

test("Logo should load on rendering the header" , () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )
    const logo = header.getByTestId("logo")
    // console.log(logo.src)

    expect(logo.src).toBe("http://localhost/dummyLogo.png");
})

test("online symbol loads on rendering header" , () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )
    const online = header.getByTestId("online")
    // console.log(online.innerHTML)
    expect(online.innerHTML).toBe("✅")
})

test("cart items should be 0 on rendering header" , () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )
    const cart = header.getByTestId("cart-item")
    // console.log(cart)
    expect(cart.textContent).toBe("Cart - 0 items")
})