import { useState } from "react"

const Section = ({name , description , isVisible , setIsVisible}) => {

    return (
    <>
        <div className="border border-solid border-black m-2 p-2">
            <h1 className="m-2 p-2">{name}</h1>
            {
                isVisible ?  
                            <>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white p-1 m-2 rounded" onClick={() => setIsVisible()}>hide</button> 
                                <p className="m-2 p-2">{description}</p>
                            </> 
                        : 
                            <button className="bg-blue-500 hover:bg-blue-700 text-white p-1 m-2 rounded" onClick={() => setIsVisible()}>show</button>
            }
        </div>
        
    </>  
    )
}

const Instamart = () => {
    const [isVisibleSection , setIsVisibleSection] = useState("")
    return <>
        <h1 className="text-2xl font-bold justify-center flex m-2 p-2">Welcome to Instamart by Swiggy</h1>
        <Section 
            isVisible={isVisibleSection === "about"} 
            setIsVisible={() => isVisibleSection === "about" ? setIsVisibleSection("") : setIsVisibleSection("about")} 
            name={"AboutSection"} 
            description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32."}/>
        
        <Section 
            isVisible={isVisibleSection === "profile"}
            setIsVisible={() => isVisibleSection === "profile" ? setIsVisibleSection("") : setIsVisibleSection("profile")} 
            name={"profileSection"} 
            description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32."}/>
        
        <Section 
            isVisible={isVisibleSection === "career"} 
            setIsVisible={() => isVisibleSection === "career" ? setIsVisibleSection("") : setIsVisibleSection("career")} 
            name={"CareerSection"} 
            description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32."}/>
        
        <Section 
            isVisible={isVisibleSection === "payment"}
            setIsVisible={() => isVisibleSection === "payment" ? setIsVisibleSection("") : setIsVisibleSection("payment")} 
            name={"PaymentSection"} 
            description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32."}/>
    </>
}

export default Instamart