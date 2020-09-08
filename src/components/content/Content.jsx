import React from 'react';
import User from "../user/User";
import Score from "../score/Score";

function Content(){
    return (
        <div className='user_content'>
            <User />
            {/*<Score />*/}
        </div>
    )
}

export default Content;