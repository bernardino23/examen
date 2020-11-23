import React,{Component} from 'react';
import logo from '../goodEnding.png';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <div className = "HeaderLogo">
                <br></br>
                <img src = {logo} width = "65px" height = "auto" alt = "logo"></img>
                <br></br>
            </div>
        )
    }
}

export default Header;