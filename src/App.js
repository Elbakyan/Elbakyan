import React,{Component} from 'react';
import 'normalize.css';
import './style/App.scss';
import 'rsuite/lib/styles/themes/default/index.less';
import {userExist, Location, Auto} from "./redux/action/actions";
import Header from './components/header/Header'
import Footer from "./components/footer/Footer";
import {Loader} from 'rsuite';
import Slider from "./components/slider/Slider";
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
        if (this.props.user.status == undefined) {
            return ( <Loader size="lg" backdrop content="loading..." vertical /> )
        } else if (this.props.user.status == false) {
            return(
                <div className="wrapper">
                    <Header />
                    <div className="container">
                        <Slider/>
                    </div>
                    <Footer />
                </div>
            )
        }else if (this.props.user.status == true){
            return(
                <div className="wrapper">
                    <Header />
                    <User/>
                    <Footer />
                </div>
            )
        }

    }

}


export default App;
