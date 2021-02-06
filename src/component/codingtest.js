import React, { Component } from 'react'
import '../App.css'
import {Card, Input} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import axios from 'axios'

export default class codingtest extends Component {
    constructor(props){
        super(props);
        this.state={
             cans:"",
             cq:[]
        }
    }

    
    onChangeH=event=>{
        let nam=event.target.name;
        let val=event.target.value;
        this.setState({[nam]:val});
    }
    onSubmitH=event=>{
        event.preventDefault();
        let qn=this.state.qn;
        let cans=this.state.cans;
        axios.put('https://600e587a3bb1d100179dee45.mockapi.io/quesandans/'+qn,{cans})
        .then(res=>{
            alert("Success Full");
            console.log(res.data);
        })
    }
    componentDidMount(){
        axios.get('https://600e587a3bb1d100179dee45.mockapi.io/quesandans/')
        .then(res=>{
            console.log(res.data);
            localStorage.setItem("data",res.data); 
            let cq=res.data; 
            this.setState({cq})
        })
    }

    render() {
        return (<>
            <div className="grid-box">
               <div>
                   <Card>
                       Question here..
                       <ul>
                           {this.state.cq.map(data=><li key={data.id}>{data.id}.{data.q}</li>)}
                       </ul>
                   </Card>
               </div>
               <div>
                   {this.state.cans}
                   <Card>
                       Answer here..
                       <form onSubmit={this.onSubmitH}>
                       <Input type="number" name="qn" placeholder="Question number" onChange={this.onChangeH}/>
                       <TextArea type="text" rows="8" name="cans" placeholder="Write your answer" onChange={this.onChangeH}/>
                       <button type="submit">Submit</button>
                       </form>
                   </Card>
               </div>
            </div>
        </>)
    }
}
