import React, {Component} from 'react';
import Pixel from './Pixel';

class Frame extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="frame">
                {this.props.children}
                <input type="text"></input>
            </div>
        )
    }
}

export default Frame;