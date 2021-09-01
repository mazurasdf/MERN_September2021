import React, {Component} from 'react';

class Test extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={this.props.background ? "oppositeBox" : "normalBox"}>
                <h1>your message here: {this.props.message}</h1>
            </div>
        )
    }
}

export default Test;