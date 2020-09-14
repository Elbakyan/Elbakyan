import React, {Component} from "react";
import Score from "./Score";
import RegScore from "./RegScore";

let {yesScore,noSocre} = {yesScore:true,noSocre:false};

class LogScore extends Component {
    render() {
        if(noSocre){
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

export default LogScore;