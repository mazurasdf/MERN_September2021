import React, {Component} from 'react';

class Pixel extends Component{
    constructor(props){
        super(props);
        this.state = {
            "filled": false
        }
    }

    render(){
        const flipState = () => {
            this.setState({"filled": !this.state.filled})
        }

        return(
            <div onClick={flipState} className={this.state.filled ? "pixel filled" : "pixel"}>
            </div>
        )
    }
}

export default Pixel;