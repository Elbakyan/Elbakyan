import React,{Component} from 'react';
import 'normalize.css';
import './style/App.scss';
import 'rsuite/lib/styles/themes/default/index.less';
import {userExist} from "./redux/action/actions";
import Header from './components/header/Header';
import { Carousel } from 'rsuite';
import Slider from "./components/slider/Slider";




class App extends Component{
    componentDidMount() {
        const dispach = this.props.dispatch;
        dispach(userExist())

    }

    render() {
        return(
            <div className="wrapper">
                    <Header/>
                <div className="container">
                    <Slider/>
                </div>
            </div>
        )
    }

}


export default App;
