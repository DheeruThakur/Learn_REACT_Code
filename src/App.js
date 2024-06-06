import React , {useState, lazy , Suspense} from "react"
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
import Shimmer from "./components/Shimmer"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import CartStore from "./utils/store"

const Instamart = lazy(() => import('./components/Instamart'));

    
    
const AppLayout = () => {

    const [user , setUser] = useState({
        name : "dheeru",
        email : "abc@gmail.com"
    })

    return (
        <>
            <Provider store={CartStore}>
                <UserContext.Provider value={{
                    user : user,
                    setUser
                }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </UserContext.Provider>
            </Provider>
        </>
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
        path : "/instamart",
        element : <Suspense fallback={<Shimmer />}>
                    <Instamart />
                </Suspense>,
        errorElement : <Error />,
    },
    {
        path : "/login",
        element : <Login />,
        errorElement : <Error />,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

