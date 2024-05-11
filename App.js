import React from "react"
import ReactDOM from "react-dom/client"


const heading1 = React.createElement(
    "h1",
    {
        id : "head1",
        key : "1"
    },
    "Heading1"
)

const heading2 = React.createElement(
    "h2",
    {
        id : "head2",
        key : "2"
    },
    "Heading2"
)

const heading3 = React.createElement(
    "p",
    {
        id : "para",
        key : "3"
    },
    "dheeru@Dheerus-MacBook-Air React_Code % git remote add origin https://github.com/abc/Learn_REACT_Code.git"
)

const heading4 = React.createElement(
    "div",
    {
        id : "div1",
        key : "4"
    },
    [heading3]
)

const container = React.createElement(
    "div",
    {
        id : "container"
    },
    [heading1 , heading2 , heading4]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)

