import React, {Component} from 'react';
import './mainScreen.css';
import './tabs'
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { async } from 'q';


const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #9343A3 30%, #B34CC7 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px light grey',
    color: 'white',
    height: 38,
    width: 80,
    padding: '0 30px',
    fontSize: 10,
    marginRight: 5,
    marginTop:20,
  });


class SubmitFee extends Component{
    constructor(props){
        super(props);
        this.state={
            studentId:'',
            transportFee:'',
            tuitionFee:'',
            month:'Jan',
            year:'',
            }
    }

    onChangeSubmitFee = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmitsubmitFee = async(e) =>{

        e.preventDefault();

        const {studentId, transportFee, tuitionFee, month, year} = this.state;
        const formBody = {transportFee, tuitionFee, month, year, studentId};
        const axios = require('axios');

        await axios({
            method: 'post',
            url: '/api/fee',
            data: formBody,
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

            this.props.trigger03();


    }
    
     
    render(){ 
        const {studentId, transportFee, tuitionFee, month, year} = this.state;
        return(
            <form onSubmit = {this.onSubmitsubmitFee}>

                            <h5>Student Id:</h5>
                            <input class = 'input' type = 'text' name = 'studentId' value = {studentId} onChange = {this.onChangeSubmitFee}/>

                            <br/>
                            
                            <h5>Transport Fee:</h5>
                            <input class = 'input' type = 'text' name = 'transportFee' value = {transportFee} onChange = {this.onChangeSubmitFee}/>

                            <br/>

                            <h5>Tuition Fee:</h5>
                            <input class = 'input' type = 'text' name = 'tuitionFee' value = {tuitionFee} onChange = {this.onChangeSubmitFee}/>

                            <br/>

                            <h5>Month:</h5>
                            <select className = "input" name = "month" value = {month} onChange={this.onChangeSubmitFee}>
                            <option value = "Jan">Jan</option>
                            <option value = "Feb">Feb</option>
                            <option value = "Mar">Mar</option>
                            <option value = "Apr">Apr</option>
                            <option value = "May">May</option>
                            <option value = "June">June</option>
                            <option value = "July">July</option>
                            <option value = "Aug">Aug</option>
                            <option value = "Sept">Sept</option>
                            <option value = "Oct">Oct</option>
                            <option value = "Nov">Nov</option>
                            <option value = "Dec">Dec</option>
                            </select>
                            <br/>

                            <h5>Year:</h5>
                            <input class = 'input' type = 'text' name = 'year' value = {year} onChange = {this.onChangeSubmitFee}/>
                            <br/>
                            <MyButton className = 'button' type="submit">Submit</MyButton>
                        </form>
        );
    }
}
export default SubmitFee;
