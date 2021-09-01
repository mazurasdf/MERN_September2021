import React, {Component} from 'react';
var randomColor = require('randomcolor');

class Pixel extends Component{
    constructor(props){
        super(props);
        this.state = {
            "filled": false,
            "fillColor": "black",
        }
    }

    render(){
        const flipFill = () => {
            this.setState({
                "filled": !this.state.filled,
                "fillColor": randomColor()
            })
        }

        const style = {
            "backgroundColor": this.state.fillColor
        }
        return(
            <div onClick={flipFill} className="pixel" style={this.state.filled ? style : {}}></div>
        )
    }
}

export default Pixel;