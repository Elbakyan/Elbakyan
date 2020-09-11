import React,{Component} from 'react';
import 'normalize.css';
import './style/App.scss';
import 'rsuite/lib/styles/themes/default/index.less';
import {userExist, Location, Auto} from "./redux/action/actions";
import Header from './components/header/Header'
import Footer from "./components/footer/Footer";
import {Loader} from 'rsuite';
import Slider from "./components/slider/Slider";
import Content from "./components/content/Content";
import User from "./components/user/User"
import Score from "./components/score/Score";
import AppHeader from "./components/header/AppHeader";
import UserHeader from "./components/header/UserHeader";





class App extends Component{
    componentDidMount() {
        const dispach = this.props.dispatch;
        dispach(userExist())
        dispach(Location())
        dispach(Auto())

    }

    render() {
        switch (this.props.user.status){
            case undefined:
                return ( <Loader size="lg" backdrop content="loading..." vertical /> )
                break;
            case false:
                return(
                    <div className="wrapper">
                        <Header />
                        <div className="container">
                            <Slider/>
                        </div>
                        <Footer />
                    </div>
                )
                break;
            case true:
                return(
                    <div className="wrapper">
                        <Header />
                        <Content />
                        <Footer />
                    </div>
                )
        }

    }

}


export default App;
