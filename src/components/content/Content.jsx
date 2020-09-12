import React, {Component} from 'react';
import User from "../user/User";
import Score from "../score/Score";
import {connect} from "react-redux";
import LogScore from "../score/LogScore";
import {Route,Router,Link,Switch} from "react-router-dom";

import Score from "../score/Score";

class  Content extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        console.log(this.props,'Content')
        switch(this.props.link){
            case 'user':
                return (
                    <User/>
                )
            case 'score':
                return (
                    <LogScore />
                )
        }
    }
}


const MakeStateToProps = (state) => {
    return state.userLink
}
const MainContent = connect(MakeStateToProps)(Content)

export default MainContent;