import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom"
import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact"
import Support from "./components/Support"
import Cart from "./components/Cart"
import RestaurantMenu from "./components/RestaurantMenu"
import Login from "./components/Login"
// import Profile from "./components/Profile"
import ProfileClass from "./components/ProfileClass"

    
    
const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            {/* <Body /> */}
            <Footer />
        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        errorElement : <Error />,
        children : [
            {
                path : "/",
                element : <Body />,
                errorElement : <Error />
            },
            {
                path : "/about",
                element : <About />,
                errorElement : <Error />,
                children : [
                    {
                        path : "profile",
                        element : <ProfileClass />
                    }
                ]
            },
            {
                path : "/contact-us",
                element : <Contact />,
                errorElement : <Error />
            },
            {
                path : "/support",
                element : <Support />,
                errorElement : <Error />
            },
            {
                path : "/cart",
                element : <Cart />,
                errorElement : <Error />
            },
            {
                path : "/restaurant-menu/:resId",
                element : <RestaurantMenu />,
                errorElement : <Error />
            },
        ]
    }, 
    {
        path : "/login",
        element : <Login />,
        errorElement : <Error />,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

