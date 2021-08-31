import React, {Component} from 'react';

class Box extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const style={
            "backgroundColor": this.props.color
        }
        return(
            <div style={style} className="smallBox">
            </div>
        )
    }
}

export default Box;