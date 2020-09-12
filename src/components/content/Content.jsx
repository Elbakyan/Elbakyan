import React, {Component} from 'react';
import User from "../user/User";
import Score from "../score/Score";
import {connect} from "react-redux";
import LogScore from "../score/LogScore";
import {Route,Router,Link,Switch} from "react-router-dom";

<<<<<<< HEAD
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
=======


class Content extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        return (

                <div className='user_content'>
                    <User />
                    <Score />
                </div>

        )
    }
>>>>>>> 97e7f44467573e004815054f9aff327162c6823c
}
const MainContent = connect(MakeStateToProps)(Content)

export default MainContent;