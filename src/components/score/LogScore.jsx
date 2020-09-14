import React, {Component} from "react";
import Score from "./Score";
import RegScore from "./RegScore";
import {connect} from "react-redux";
import {ScoreAction} from "../../redux/action/actions";

let {yesScore,noSocre} = {yesScore:true,noSocre:false};

class LogScore extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(ScoreAction(this.props.user.id))

    }
    render() {
<<<<<<< HEAD
        if(noSocre){
=======
        console.log(this.props)
        if(this.props.score.status){
>>>>>>> 3ed97b0c0d599653c33f0f2edd48588bc6f3eef4
            return(
                <Score />
            )
        }else{
            return (
                <RegScore />
            )
        }

    }
}


const MakeStateToProps = (state) => {
    return state;
}
const MainLogScore = connect(MakeStateToProps)(LogScore)

export default MainLogScore;