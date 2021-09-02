import React, {Component} from 'react';

class ClassBox extends Component{
    constructor(props){
        super(props);
        this.state={
            "likes":this.props.likes
        }
    }

    render(){
        const addLike = () => {
            console.log("clicked");
            this.setState({
                "likes": this.state.likes+1
            })
        }

        return(
            <div className="componentBox">
                <h1>class time!!!!!</h1>
                <h2><i>{this.props.message}</i></h2>
                <button onClick={addLike}>Likes: {this.state.likes}</button>
            </div>
        )
    }
}

export default ClassBox;