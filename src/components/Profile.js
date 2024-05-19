import {useEffect, useState} from "react"


const Profile = (props) => {

    const [count , setCount] = useState(0);

    useEffect(() => {
        // console.log("useEffect - " + props.name)
        // const timer = setInterval(() => {
        //     console.log("Dheeru")
        // } , 1000)

        return () => {
            // clearInterval(timer)
        }
    })
    // console.log("render - " + props.name)
    return (
        
        <>
            <h1>This is Profile section </h1>
            <h2>Name : {props.name}</h2>
            <button onClick={() => setCount(count+1)}>Click me {count}</button>
        </>
    )
}

export default Profile