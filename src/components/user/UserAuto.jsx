import React,{Component} from 'react';
import  {Button,Modal} from "rsuite";
import {City, Model} from "../../redux/action/actions";
import {connect} from "react-redux";

class UserAuto extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({
            show: false
        });
    }
    open(size) {
        this.setState({
            size,
            show: true
        });
    }
    render() {
        return(
            <div className="auto">
                <div className="auto__header">
                    <div className="auto__title">
                        <h2>Դուք դեռ չունեք գրանցված ավտոմեենա․․․․</h2>
                    </div>
                    <div className="add_auto">
                        <Button color="violet" onClick={() => this.open('sm')}>Ավելացնել Ավտոմեենա․․․</Button>
                    </div>
                </div>
                    <div className="modal-container">
                        <Modal size={this.state.size} show={this.state.show} onHide={this.close}>
                            <Modal.Header>
                                <Modal.Title>Ավելացնել Ավտnմքենա․․․</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form className="add__auto-form">
                                        <div className="items">
                                            <label>Մոդել </label>
                                            <select name="" id="" onChange={(e)=> {
                                                this.props.dispatch(Model(e))
                                            }}>

                                                {this.props.auto.mark.map(auto => {
                                                    return (
                                                        <option
                                                            key={auto.id}
                                                            id={auto.id}
                                                            value={auto.name}
                                                            data-id={auto.id}
                                                        >
                                                            {auto.name}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="items">
                                            <label >Մակնիշ</label>
                                            <select name="" id="">
                                                {this.props.auto.model.map(auto => {
                                                    return (
                                                        <option
                                                            key={auto.id}
                                                            id={auto.id}
                                                            value={auto.name}
                                                        >
                                                            {auto.name}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="items">

                                            <label>Գույն </label>
                                            <select name="" id="">
                                                {this.props.auto.color.map(color => {
                                                    return (
                                                        <option
                                                            key={color.color}
                                                            value={color.color}
                                                            style={{color:color.color,backgroundColor: '#101423'}}
                                                        >
                                                            {color.name}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="items">
                                            <label>Տարեթիվ</label>
                                            <select name="" id="">
                                                {this.props.auto.year.map(year => {
                                                    return (
                                                        <option
                                                            key={year}
                                                            value={year}
                                                        >
                                                            {year}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="items">
                                            <label>Շարժիչի Ծավալ</label>
                                            <select name="" id="">
                                                {this.props.auto.engine.map(engine => {
                                                    return (
                                                        <option
                                                            key={engine}
                                                            value={engine}
                                                        >
                                                            {engine}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div className="items">
                                            <label>Պետհամարանիշ</label>
                                            <input type="text" placeholder="77AA777"/>
                                        </div>
                                        <div className="items">
                                            <label>նույնականացման Համար</label>
                                            <input type="text" placeholder="V28-45589875"/>
                                        </div>
                                        <div className="items">
                                            <label>Լուսանկար</label>
                                            <input type="file"/>
                                        </div>
                                            <input type="hidden" name="user_id" value="1"/>
                                       <div className="items">
                                           <Button color="violet" className="user__form-btn">Ավելացնել</Button>
                                       </div>


                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>
            </div>
        )
    }
}

const MakeStateToProps = (state) => {
    return state
}
const MainUserAuto = connect(MakeStateToProps)(UserAuto)

export default  MainUserAuto;