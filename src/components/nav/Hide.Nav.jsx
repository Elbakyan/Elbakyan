import React, {Component} from 'react';
import "./Hide.Nav.scss"


 class HideNav extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        console.log()
        return(
            <ul className="Hide_Nav">
                {this.props.value.map(object => {
                    return (
                        <li key={object.id}>
                            <img src={object.img} alt=""/>
                            <a href="">{object.name}</a>
                        </li>)
                })}
            </ul>
        )
    }
}

export default HideNav;