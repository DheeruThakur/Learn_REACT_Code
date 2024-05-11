import React from "react"
import ReactDOM from "react-dom/client"

// const li1 = React.createElement(
//     "li",
//     {
//         id : "li"
//     },
//     "About Us"
// )

// const li2 = React.createElement(
//     "li",
//     {
//         id : "li"
//     },
//     "Support"
// )

// const li3 = React.createElement(
//     "li",
//     {
//         id : "li"
//     },
//     "Home"
// )


// const heading2 = React.createElement(
//     "ul",
//     {
//         id : "ul"
//     },
//     [li1 , li2 , li3]
// )

// const heading1 = React.createElement(
//     "h1",
//     {
//         id : "h1"
//     },
//     "Namaste React"
// )

// const conatiner = React.createElement(
//     "div",
//     {
//         id : "container",
//         class : "header"
//     },
//     [heading1 , heading2]
// )

const container = (
    <div class="header">
        <h1>Namaste React</h1>
        <ul>
            <li>About Us</li>
            <li>Support</li>
            <li>Home</li>
        </ul>
    </div>
)

const Container = () => (
    <div class="header">
        {container}
        <h1>Namaste React</h1>
        <ul>
            <li>About Us</li>
            <li>Support</li>
            <li>Home</li>
        </ul>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>);
