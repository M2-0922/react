import { Component } from "react";

class Header extends Component {
    
    state = {
        count: this.props.count
    }
    
    static getDerivedStateFromProps(props, state) {
        if(props.count !== state.count) {
            return {
                count: props.count
            }
        }
        return null
        console.log("I'm in getDerivedStateFromProps method")
    }


    render() {
        return(
            <header>
                <nav>Logo {this.state.count}</nav>
                <ul>
                    <li href="#home">Home</li>
                    <li href="#about">About</li>
                    <li href="#contact">Contact</li>
                </ul>
            </header>
        )
    }
}
export default Header;