import React from "react";
import './Footer.scss'
import  {Icon} from "rsuite";

export default function (){
    return (
        <footer >
            <div className="container row footer_container ">
                <div>
                    <nav className="Footer_nav">
                        <ul>
                            <h4>Հասցե</h4>
                            <li>
                                <Icon icon="map-marker" size="1x" />
                                <li>Ք․ԵՐԵՎԱՆ Ռաֆու 19</li>
                            </li>
                            <ul>
                                <ul>
                                    <li>
                                        <Icon icon="mobile" size="1x" />
                                        <li>(374)-41-888844</li>
                                    </li>
                                    <li>
                                        <Icon icon="mobile" size="1x" />
                                        <li>(374)-43-888844</li>
                                    </li>
                                    <li>
                                        <Icon icon="mobile" size="1x" />
                                        <li>(374)-93-888044</li>
                                    </li>
                                </ul>
                            </ul>
                            <li>
                                <Icon icon="envelope" size="1x" />
                                <li>info@v8.am</li>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}