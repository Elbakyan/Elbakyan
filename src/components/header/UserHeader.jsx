import React,{Component} from 'react';
import logo from "../../img/logo_1.svg";
import {Button,Avatar,Badge,Icon} from "rsuite";
import {Url}from '../config/Url';
import HideNav from "../nav/Hide.Nav";
import {connect} from "react-redux";


class UserHeader extends  Component{

    render() {
        console.log(this.props.auto.mark)

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
                                <a href="#">Պահեստամասեր</a>
                                <HideNav value={this.props.auto.mark}/>
                            </li>
                            <li>
                                <a href="#">Ծառայություններ</a>
                            </li>
                            <li>
                                <a href="#">Իմ Մեքենան</a>
                            </li>
                            <li>
                                <a href="#">Իմ Խանութը</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="user">
                        <div className="avatar-group">
                            <Badge content="15">
                                <Avatar>
                                    <img src="https://elbakyan.am/Server/img/default.svg" alt="default.svg"/>
                                </Avatar>
                            </Badge>
                        </div>
                        <p className="user_name">Norayr Kokhlikyan</p>
                    </div>
                    <a href={Url.logout}>
                        <Button color="violet" style={{padding: "5px 20px"}}>Ելք</Button>
                    </a>
                </div>

            </header>
        )
    }
}
const MakeStateToProps = (state) => {
    return state
}
const MainUserHeader = connect(MakeStateToProps)(UserHeader)

export default MainUserHeader;
