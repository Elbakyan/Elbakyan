import React,{Component} from 'react';
import logo from "../../img/logo_1.svg";
import  {Icon, Loader,Button,Modal,ButtonToolbar,Toggle} from 'rsuite';
import Login from "../login/Login";
import Reg from "../reg/Reg"
import HideNav from "../nav/Hide.Nav";

// import { fas, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class AppHeader extends  Component{
    constructor(props) {
        super(props);
    }
    getSircle() {

    }
    render() {

        return(
            <header>
                <div className="container row header_container">
                    <div className="logo">
                        <a href="#">
                            <img src={logo} alt=""/>
                        </a>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <a href="">Պահեստամասեր</a>
                               <HideNav />
                            </li>
                            <li>
                                <a href="">Ծառայություններ</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="Reg_Aut_container" style={{display:"flex"}}>
                        <Reg/>
                        <Login/>
                    </div>
                </div>
            </header>
        )
    }
}
export default AppHeader;
