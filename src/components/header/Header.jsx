import React, {Component} from 'react';
import 'rsuite/lib/styles/themes/default/index.less';
import './Header.scss';
import {userExist} from "../../redux/action/actions";
import {connect} from "react-redux";
import { Loader,Button,Modal,ButtonToolbar } from 'rsuite';
import AppHeader from "./AppHeader";
import UserHeader from "./UserHeader";

const test = true

class Header extends Component {
    constructor(props) {
        super(props);


    }
    componentDidMount() {
        const dispach = this.props.dispatch;
        dispach(userExist())
    }


    render() {

        if (this.props.user.status == undefined) {
            return ( <Loader size="lg" backdrop content="loading..." vertical /> )
        } else if (this.props.user.status == false) {
            return (

               <AppHeader/>
        )
        }else if (this.props.user.status == true){
            return (
                <UserHeader/>
            )
        }
    }

}

const MakeStateToProps = (state) => {
    return state
}
const MainHeader = connect(MakeStateToProps)(Header)
export default MainHeader;