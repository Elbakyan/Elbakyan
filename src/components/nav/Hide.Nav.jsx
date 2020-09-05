import React, {Component} from 'react';
import "./Hide.Nav.scss"
import {connect} from "react-redux";

 class HideNav extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        console.log()
        return(
            <ul className="Hide_Nav">
                {this.props.mark.map(auto => {
                    return (<li key={auto.id}><a href="">{auto.name}</a></li>)
                })}
            </ul>
        )
    }
}
const MakeStateToProps = (state) => {
    return state.auto
}
const MainHideNav = connect(MakeStateToProps)(HideNav)
export default MainHideNav;