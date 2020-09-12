import React, {Component} from 'react';
import User from "../user/User";
import Score from "../score/Score";



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
}

export default Content;