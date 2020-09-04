import React, {Component} from 'react';
import 'normalize.css';
import './style/App.scss';
import 'rsuite/lib/styles/themes/default/index.less';
import {userExist} from "./redux/action/actions";
import Header from './components/header/Header'
import Footer from "./components/footer/Footer";


class App extends Component {
    componentDidMount() {
        const dispach = this.props.dispatch;
        dispach(userExist())
        console.log(this.props)
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <Footer />
            </div>
        )
    }

}


export default App;
