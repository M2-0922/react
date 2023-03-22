import { Component } from "react"

class Header extends Component {

    state = {
        count: this.props.count
    }

    static getDerivedStateFromProps(props, state){
        // it will called once when the ui rendered, and it will automatically will call once gets different props than before
        if(props.count !== state.count){
            return {
                count: props.count
            }
        }
        return null;
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     // this method is going to be called just before re-render. So you can render or not depend on your logic.

    //     // if(nextProps.count !== this.props.count){
    //     //     return true;
    //     // }
    //     // return false;
    //     return nextProps.count !== this.props.count;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     // console.log(prevProps);
    //     // console.log(this.props);
    //     // console.log(prevState);
    //     // if (prevProps.items.length < this.props.items.length) {
    //     //     const list = document.getElementById('list');
    //     //     console.log(list);
    //     //     console.log(list.scrollHeight - list.scrollTop);
    //     //     return list.scrollHeight - list.scrollTop;
    //     // }
    //     // return null;
    // }


    render(){
        return (
            <nav>
                <h1>Logo {this.state.count}</h1>
                <ul id="list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Header;