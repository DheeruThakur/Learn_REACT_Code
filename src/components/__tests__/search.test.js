import { render, waitFor , fireEvent } from "@testing-library/react"
import Body from "../Body"
import { RESTAURANT_DATA } from "../../mocks/data"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(RESTAURANT_DATA)
        }
    })
})

test("Shimmer should load on rendering body" , () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )
    const shimmer = body.getByTestId("shimmer");
    // console.log(shimmer)
    expect(shimmer).toBeInTheDocument()
    expect(shimmer.children.length).toBe(10)
})

test("Restaurants should be on home page" , async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(body.getByTestId("search-btn")))

    const list = body.getByTestId("res-list");
    // console.log(list)
    expect(list.children.length).toBe(9)
})

test("Search should work properly on home page" , async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(body.getByTestId("search-btn")))

    const searchInput = body.getByTestId("search-input");

    // important hai 
    fireEvent.change(searchInput , {
        target : {
            value : "pizza"
        }
    })

    const searchBtn = body.getByTestId("search-btn")

    fireEvent.click(searchBtn)

    const resList = body.getByTestId("res-list")
    // console.log(resList.children.length)
    expect(resList.children.length).toBe(3)
    
})