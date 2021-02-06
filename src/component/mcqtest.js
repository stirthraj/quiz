import React, { Component } from 'react'
import {Button} from 'antd';
import axios from 'axios';

export default class mcqtest extends Component {
    constructor(props){
        super(props);
        this.state={
           mcqs:[],
           q1:"",
           q2:"",
           q3:"",
           q4:""
        }
        this.state.marks=0;
    }
    componentDidMount(){
        axios.get('https://600e587a3bb1d100179dee45.mockapi.io/quizcode')
        .then(res=>{
            console.log(res.data);
            let mcqs=res.data;
            this.setState({mcqs});
        })
    }
    onChangeH1=event=>{
        let nam=event.target.name;
        let val=event.target.value;
        this.setState({[nam]:val});
    }
    onChangeH2=event=>{
        let nam=event.target.name;
        let val=event.target.value;
        this.setState({[nam]:val});
    }
    onChangeH3=event=>{
        let nam=event.target.name;
        let val=event.target.value;
        this.setState({[nam]:val});
    }
    onChangeH4=event=>{
        let nam=event.target.name;
        let val=event.target.value;
        this.setState({[nam]:val});
    }
    onSubmitH=event=>{
        event.preventDefault();

        let score=0;
        
        if(this.state.q1===true)
        {
         alert("You got:"+score);
        }
        else
            alert("You Fail");

    }
    
    render() {
        return (
        <div className="grid-box">
        <div className="grid-item1">
            <form onSubmit={this.onSubmitH}>
            {this.state.mcqs.map(data=><div key={data.id}>
            <h1>{data.id}.{data.q}</h1>{this.state.c1}
            <input type="radio" name={'q'+data.id} value={data.o1===data.co} onChange={this.onChangeH1}/>{data.o1}<br/>
            <input type="radio" name={'q'+data.id} value={data.o2===data.co} onChange={this.onChangeH2}/>{data.o2}<br/>
            <input type="radio" name={'q'+data.id} value={data.o3===data.co} onChange={this.onChangeH3}/>{data.o3}<br/>
            <input type="radio" name={'q'+data.id} value={data.o4===data.co} onChange={this.onChangeH4}/>{data.o4}<br/>
            </div>)}
            <button type="submit">Submit</button>
            </form>
        </div>
        </div>
        )
    }
}
