import { Input } from 'antd';
import React, { Component } from 'react'

export default class game extends Component {
    constructor(props){
        super(props);
        this.state={
            number:""
        }
    }
    onChangeH=e=>{
        this.setState({number:e.target.value});
    }
    onSubmitH=e=>{
        e.preventDefault();
        let a=this.state.number;
        if(a === 49)
        {
            alert("Wow, You win");
        }
        else if(a> 49)
        {
            alert("larger");
        }
        else if(a<49)
        {
            alert("smaller");
        }
    }
    

    render() {
        return (
            <div className="grid-box">
                <div>
                {this.props.name}
                <h1>Guess the a number in 5 chance</h1>
                <h6>Computer help you, number between 1-100, also tell like input smaller or larger</h6>
                </div>
                <div>
                <form onSubmit={this.onSubmitH}>
                <Input type="number" name="number" onChange={this.onChangeH}/>
                <button type="submit">Submit</button>
                </form>
                </div>
            </div>
        )
    }
}
