import React,{Component} from 'react';
import './User.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt,faCity,faAt,faPhoneAlt,faCog,faEnvelope,faTags,faClipboard} from '@fortawesome/free-solid-svg-icons';

class User extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <section className="user_container">
                <div className="container row">
                    <div className="user">
                        <div className="user__img">
                            <img src="https://elbakyan.am/Server/img/default.svg" alt=""/>
                        </div>
                        <div className="user__name">
                            <p>Norayr Kokhlikyan</p>
                        </div>

                        <div className="user__nav">
                            <ul className="user__nav-ul">

                                    <li >
                                        <FontAwesomeIcon icon={faEnvelope} className="nav__icon"/>
                                        <a href="">Հաղորրդագրություններ</a>
                                        <span className="count">+3</span>
                                    </li>
                                    <li >
                                        <FontAwesomeIcon icon={faTags} className="nav__icon"/>
                                        <a href="">Խանութներ</a>
                                    </li>
                                    <li >
                                        <FontAwesomeIcon icon={faClipboard} className="nav__icon"/>
                                        <a href="">Նշումներ</a>
                                    </li>
                                    <li >
                                        <FontAwesomeIcon icon={faCog} className="nav__icon"/>
                                        <a href="">Կարգավորումներ</a>
                                    </li>

                            </ul>
                        </div>
                        <div className="user__info">
                            <div className="mail">
                                <FontAwesomeIcon icon={faAt} className="user__icon"/>
                                <span className="mail">koxlikyan1995@gmail.com</span>
                            </div>
                            <div className="phone">
                                <FontAwesomeIcon icon={faPhoneAlt} className="user__icon"/>
                                <span className="phone">+37494419699</span>
                            </div>

                        </div>
                        <div className="user__location">
                            <div className="sircle">
                                <FontAwesomeIcon icon={faMapMarkedAlt} className="user__icon"/>
                                <span className="sircle">Տավուշ</span>
                            </div>
                            <div className="city">
                                <FontAwesomeIcon icon={faCity} className="user__icon"/>
                                <span className="city">Դիլիջան</span>
                            </div>

                        </div>
                    </div>
                    <div className="auto">

                    </div>
                </div>
            </section>
        )
    }
}
export default User;