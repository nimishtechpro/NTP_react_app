import {Component} from 'react'

class Header extends Component{
    render(){
        return (<h1> This is header , dev name {this.props.data}  </h1>)
    }
}

export default Header