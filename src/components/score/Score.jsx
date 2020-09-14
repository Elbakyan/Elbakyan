import React, {Component} from "react";
import {connect} from "react-redux";
import  './Score.scss'
import {City} from "../../redux/action/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAt, faCarAlt, faCity,
    faClipboard,
    faCog,
    faEnvelope,
    faMapMarkedAlt,
    faPhoneAlt,
    faTags
} from "@fortawesome/free-solid-svg-icons";
import AutoParts from "./AutoParts";

class Score extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <section className="user_container">
                <div className="container row">
                    <div className="user">
                        <div className="user__img">
                            <img src="https://elbakyan.am/Server/img/default.png" alt=""/>
                        </div>
                        <div className="user__name">
                            <p>Avtopahestamaser.am</p>
                        </div>

                        <div className="user__nav">
                            <ul className="user__nav-ul">
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} className="nav__icon"/>
                                    <a href="">Հաղորրդագրություններ</a>
                                    <span className="count">+3</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCarAlt} className="nav__icon"/>
                                    <a href="">Պահեստամասեր</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faClipboard} className="nav__icon"/>
                                    <a href="">Նշումներ</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCog} className="nav__icon"/>
                                    <a href="">Կարգավորումներ</a>
                                </li>

                            </ul>
                        </div>
                        <div className="user__info">
                            <div className="mail">
                                <FontAwesomeIcon icon={faAt} className="user__icon"/>
                                <span className="mail">info@avtopahestamaser.am</span>
                            </div>
                            <div className="phone">
                                <FontAwesomeIcon icon={faPhoneAlt} className="user__icon"/>
                                <span className="phone">+37494555544</span>
                            </div>

                        </div>

                        <div className="user__location">
                            <div className="sircle">
                                <FontAwesomeIcon icon={faMapMarkedAlt} className="user__icon"/>
                                <span className="sircle">Երևան</span>
                            </div>
                            <div className="city">
                                <FontAwesomeIcon icon={faCity} className="user__icon"/>
                                <span className="city">Շենգավիթղ</span>
                            </div>
                        </div>

                    </div>
                    <div className="user_score">
                        <AutoParts />
                    </div>
                </div>
            </section>
        )
    }
}
const MakeStateToProps = (state) => {
    return state
}
const setScore = connect(MakeStateToProps)(Score)

export  default  setScore;