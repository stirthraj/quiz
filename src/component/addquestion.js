import React, { Component } from 'react'
import '../App.css'
import {Button, Card, Input} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';

export default class addquestion extends Component {
    constructor(props){
        super(props);
        this.state={
            question:"",
            option1:"",
            option2:"",
            option3:"",
            option4:"",
            coption:"",
            fullquesans:[]
        }
    }
    onChangeH=event=>{
        let nam=event.target.name;
        let val=event.target.value;
        this.setState({[nam]:val});
    }
    onSubmitH=event=>{
        event.preventDefault();
        let q=this.state.question;
        let o1=this.state.option1;
        let o2=this.state.option2;
        let o3=this.state.option3;
        let o4=this.state.option4;
        let co=this.state.coption;
        axios.post('https://600e587a3bb1d100179dee45.mockapi.io/quizcode',{q,o1,o2,o3,o4,co})
        .then(res=>
            {
                console.log(res.data);
                let fullquesans=res.data;
                this.setState({fullquesans});
                alert("Added");
            })
    }

    render() {
        return (<>
    <div className="site-card-border-less-wrapper">
    <Card bordered={false} style={{ width: "100%",color:"white" }}>
        <h3>Add MCQ Questions here</h3>
      <Card style={{ width: "100%" }}>
        <div className="grid-box">
            <div className="grid-item1">
        <form onSubmit={this.onSubmitH}>  
          <TextArea type="textarea" rows="3" name="question" onChange={this.onChangeH} placeholder="write your question here"/>
          <TextArea type="textarea" rows="3" name="option1" onChange={this.onChangeH} placeholder="option1"/>
          <TextArea type="textarea" rows="3" name="option2" onChange={this.onChangeH} placeholder="option2"/>
          <TextArea type="textarea" rows="3" name="option3" onChange={this.onChangeH} placeholder="option3"/>
          <TextArea type="textarea" rows="3" name="option4" onChange={this.onChangeH} placeholder="option4"/>
          <Input type="number" name="coption" onChange={this.onChangeH} placeholder="correct option"/>
          <Button htmlType="submit">Submit</Button>
        </form>
        </div>
        <div className="grid-item2">
            <h2>Your Question here..</h2>
            <table style={{width:"100%"}}>
                <caption>Insert Question</caption>
                <thead>
                    <tr>
                        <th>ques</th>
                        <th>option1</th>
                        <th>option2</th>
                        <th>option3</th>
                        <th>option4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{this.state.fullquesans.q}</td>
                    <td>{this.state.fullquesans.o1}</td>
                    <td>{this.state.fullquesans.o2}</td>
                    <td>{this.state.fullquesans.o3}</td>
                    <td>{this.state.fullquesans.o4}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr><td colSpan="5" style={{textAlign:"center"}}>the end</td></tr>
                </tfoot>
            </table>

        </div>
        </div>

      </Card>
    </Card>
  </div>
        </>)
    }
}
