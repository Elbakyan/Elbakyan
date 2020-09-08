import React,{Component} from "react";
import './MyAuto.scss';
import {Button} from "rsuite";
let props =[
    {
        mark:'BMW',
        model:'X5',
        color:'Black',
        year:'2020',
        auto_number:'xx-xxx-xx',
        engine:'3.0',
        vin:'YT-5889955',
        img:'https://www.autocentre.ua/wp-content/uploads/2020/05/bmw-x5-protection-vr6-2019-2.jpg'
    },
    {
        mark:'Mercedes-Benz',
        model:'G-65',
        color:'Blue',
        year:'2020',
        auto_number:'66AA777',
        engine:'6.0',
        vin:'TT-5479945',
        img:'https://www.ixbt.com/img/n1/news/2019/10/0/EIzLeziU8AAAmV3.jpg'
    }
]

class MyAuto extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="my_auto" >
                {
                    props.map(({mark,
                                   model,
                                   color,
                                   year,
                                   auto_number,
                                   engine,
                                   vin,
                                   img})=>(
                        <div className="my_auto_block" style={{boxShadow: `0px 0px 5px 1px #575757` }}>
                            <div className="my_auto_image">
                                <img src={img} alt=""/>
                            </div>
                            <div className="my_auto_info">
                                <h3>{mark} {model}</h3>
                                <nav>
                                    <ul>
                                        <li>
                                            <span>Գույն</span>
                                            :
                                            <span>{color}</span>
                                        </li>
                                        <li>
                                            <span>Տարեթիվ</span>
                                            :
                                            <span>{year}</span>
                                        </li>
                                        <li>
                                            <span>Պետհամարանիշ</span>
                                            :
                                            <span>{auto_number}</span>
                                        </li>
                                        <li>
                                            <span>Շարժիչի Ծավալը</span>
                                            :
                                            <span>{engine}</span>
                                        </li>
                                        <li>
                                            <span>VIN</span>
                                            :
                                            <span>{vin}</span>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="my_auto_button">
                                    <Button color={"violet"}>Փոխել Տվյալները</Button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default MyAuto;

