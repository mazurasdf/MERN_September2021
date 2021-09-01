import React, {Component} from 'react';
import Pixel from './Pixel';

class Row extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="row">
                <Pixel />
                <Pixel />
                <Pixel />
                <Pixel />
                <Pixel />
                <Pixel />
                <Pixel />
                <Pixel />
                <Pixel />
                <Pixel />
            </div>
        )
    }
}

export default Row;