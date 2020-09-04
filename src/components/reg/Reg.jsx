import React, {Component} from 'react';
import {Button, ButtonToolbar, Modal} from "rsuite";
import './Reg.scss';


export default class Reg extends Component {
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

        return (
            <div className="modal-container">
                <ButtonToolbar>
                    <Button color="violet" onClick={this.open}>Գրանցվել</Button>
                </ButtonToolbar>

                <Modal overflow={overflow} show={show} onHide={this.close}>
                    <Modal.Header>
                        <Modal.Title>Գրեք ձեր գրանցման տվյալները․․․</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="Signup">
                            <h2>Hello World</h2>
                            <form onSubmit={this.SendUserData}>
                                <div>
                                    <label className="fullname">
                                        <input
                                            required
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="Անուն․․․"
                                        />
                                    </label>
                                    <div className="margin"></div>
                                    <label className="fullname">
                                        <input
                                            required
                                            type="text"
                                            name="surname"
                                            placeholder="Ազգանուն․․․"
                                        />
                                    </label>
                                </div>
                                <label className="phone">
                                    <input
                                        required
                                        type="number"
                                        name="phone"
                                        placeholder="Հեռախոսահամար․․․"
                                    />
                                </label>
                                <label className="email">
                                    <input required type="email" name="email" placeholder="E-mail..." />
                                </label>
                                <div>
                                    <label className="password">
                                        <input
                                            required
                                            type="password"
                                            name="password"
                                            placeholder="Գախտնաբառ․․․"
                                        />
                                    </label>
                                    <div className="margin"></div>
                                    <label className="password">
                                        <input
                                            required
                                            type="password"
                                            name="password2"
                                            placeholder="Կրկնել Գախտնաբառը․․․"
                                        />
                                    </label>
                                </div>
                                {/*<div>*/}
                                {/*    <label className="location">*/}
                                {/*        <select name="sircle" id="" onChange={this.getCity}>*/}
                                {/*            {this.state.keys.map((data, id) => {*/}
                                {/*                return (*/}
                                {/*                    <option value={data} key={id}>*/}
                                {/*                        {data}*/}
                                {/*                    </option>*/}
                                {/*                );*/}
                                {/*            })}*/}
                                {/*        </select>*/}
                                {/*    </label>*/}
                                {/*    <div className="margin"></div>*/}
                                {/*    <label className="location">*/}
                                {/*        <select name="city">*/}
                                {/*            {this.state.city.map((data, id) => {*/}
                                {/*                return (*/}
                                {/*                    <option value={data} key={id}>*/}
                                {/*                        {data}*/}
                                {/*                    </option>*/}
                                {/*                );*/}
                                {/*            })}*/}
                                {/*        </select>*/}
                                {/*    </label>*/}
                                {/*</div>*/}
                                <Button color="violet" type="submit">Գրանցվել</Button>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>

            </div>

        )

    }
}
