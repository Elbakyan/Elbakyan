import React,{Component} from 'react';
import logo from "../../img/logo_1.svg";
import  {Icon, Loader,Button,Modal,ButtonToolbar,Toggle} from 'rsuite';
// import { fas, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class AppHeader extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            overflow: true
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({ show: false });
    }
    open(event) {
        this.setState({ show: true });
    }
    render() {
        const { overflow, show } = this.state;
        return(
            <header>
                <div className="container row header_container">
                    <div className="logo">
                        <a href="#">
                            <img src={logo} alt=""/>
                        </a>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <a href="">Պահեստամասեր</a>
                            </li>
                            <li>
                                <a href="">Ծառայություններ</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="Reg_Aut_container" style={{display:"flex"}}>
                        <div className="modal-container">
                            <ButtonToolbar>
                                <Button color="violet" onClick={this.open}>Գրանցվել</Button>
                            </ButtonToolbar>

                            <Modal overflow={overflow} show={show} onHide={this.close}>
                                <Modal.Header>
                                    <Modal.Title>Modal Title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                </Modal.Body>
                            </Modal>
                        </div>
                        <div className="modal-container">
                            <ButtonToolbar>
                                <Button color="violet" onClick={this.open}>Մուտք</Button>
                            </ButtonToolbar>

                            <Modal overflow={overflow} show={show} onHide={this.close}>
                                <Modal.Header>
                                    <Modal.Title>Modal Title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default AppHeader;
