import React , {Component} from "react"


class ProfileClass extends Component {

    constructor(props){
        super(props)

        this.state = {
            count : 0,
            userInfo : {
                name : "",
                avatar_url : "",
                bio : "",
                location : "",
                followers : "",
                following : ""
            }
        }
        console.log("constructor - " + this.props.name)
    }

    // life cycle methods
    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/DheeruThakur")
        const jsonData = await data.json()
        this.setState({
            userInfo : jsonData
        })
        console.log("Component Did mount - child" + this.props.name)
    }
    componentDidUpdate() {
        console.log("componentDidUpdate - child")
    }

    render() {
        console.log("render - child" + this.props.name)
        return (
            <>
                <h1>This is class based profile component</h1>
                <h2> { this.state?.userInfo?.name }</h2>
                <img src={this.state?.userInfo?.avatar_url} />
                <h3>{this.state?.userInfo?.bio}</h3>
                <h4>{this.state?.userInfo?.location}</h4>
                <h4>Followers - {this.state?.userInfo?.followers}</h4>
                <h4>Following - {this.state?.userInfo?.following}</h4>
                <button onClick={() => this.setState((prevState) => ({count : prevState.count +1}))}>Click me {this.state.count}</button>
            </>
        )
        
    }
}

export default ProfileClass