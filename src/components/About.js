
import React from "react"
import { Outlet } from "react-router-dom"
import Profile from "./Profile"
import { useEffect } from "react"
import ProfileClass from "./ProfileClass"

class About extends React.Component {

    constructor(props) {
        super(props)
        console.log("constructor - parent")
        console.log(this.props)
        this.state = {
            count : 0
        }
        
    }

    componentDidMount() {
        // console.log("componentDidMount - parent")
        this.setState({count : 1})
    }

    componentDidUpdate() {
        // console.log("componentDidUpdate - parent")
    }

    componentWillUnmount() {
        // console.log("componentWillUnmount-parent")
    }

    render() {
        // console.log("render - parent")
        console.log(this.props)
        return (
            <>
                <h1>About Us</h1>
                <p>This is information about our organization page</p>
                {/* <ProfileClass name="first"/> */}
                {/* <ProfileClass name="second"/> */}
                <Profile name="functional"></Profile>
            </>
        )
    }
}

// const About = () => {

//     useEffect(() => {
//         console.log("useEffect - Parent")
//     })

//     console.log("render - parent")
//     return (
        
//         <>
//         <h1>About Us</h1>
//         <p>This is information about our organization page</p>
//         <Outlet />
//         <Profile name="Abhay"></Profile>
//         </>
//     )
// }

export default About