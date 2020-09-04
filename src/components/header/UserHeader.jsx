import React,{Component} from 'react';
import logo from "../../img/logo_1.svg";
import {Button,Avatar,Badge,Icon} from "rsuite";
import defaultImg from '../../img/default.svg'
import {Url}from '../config/Url';


class UserHeader extends  Component{

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
                            </li>
                            <li>
                                <a href="">Ծառայություններ</a>
                            </li>
                            <li>
                                <a href="">Իմ Մեքենան</a>
                            </li>
                            <li>
                                <a href="">Իմ Խանութը</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="user">
                        <div className="avatar-group">
                            <Badge content="15">
                                <Avatar>
                                    <img src={defaultImg} alt=""/>
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
export default UserHeader;
