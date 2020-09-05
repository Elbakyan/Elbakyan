import React, {Component} from "react";
import {connect} from "react-redux";
import {City} from "../../redux/action/actions";

const auto = {
    id:'1',
    name:'BMW',
}

const Option = (props) => (

    <select
        name="auto_mark"
        id=""
    >
        {this.props.name.map((data, id) => {
            return (
                <option
                    id={data.id}
                    value={data.name}
                >
                    {data.name}
                </option>
            );
        })}
    </select>
)

class Score extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div>
              <div className="add_auto_score">
                  <form action="">
                      <label className="location">
                          <select
                              name="auto_mark"
                              id=""
                          >
                           <Option name = {auto} />
                          </select>
                      </label>
                  </form>
              </div>
            </div>
        )
    }
}
const MakeStateToProps = (state) => {
    return state
}
const RScore = connect(MakeStateToProps)(Score)

export  default  RScore;