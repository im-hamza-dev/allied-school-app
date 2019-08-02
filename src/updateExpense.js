import React, {Component} from 'react';
import './mainScreen.css';
import './tabs'
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { delay, async } from 'q';


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


class UpadteExpense extends Component{
    constructor(props){
        super(props);
        this.state={
            expenseId:'',
            expenseTitle:'',
            comment:'',
            amount:'',
            month:'Jan',
            year:'',
            }
    }

    onChangeUpdateExpense = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    // sleep = (milliseconds) => {
    //     var start = new Date().getTime();
    //     for (var i = 0; i < 1e7; i++) {
    //       if ((new Date().getTime() - start) > milliseconds){
    //         break;
    //       }
    //     }
    //   }

    onSubmitUpdateExpense = async(e) =>{

        e.preventDefault();

        const {expenseId, expenseTitle, comment, amount, month, year} = this.state;
        const formBody = {expenseTitle, amount, comment, month, year};
        const axios = require('axios');

        await axios({
            method: 'put',
            url: '/api/expense/'+ expenseId,
            data: formBody,
            // config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
           
            this.props.trigger03Expense();
            this.setState({
                expenseId:'',
                expenseTitle:'',
                comment:'',
                amount:'',
                month:'Jan',
                year:'',
                })


    }
    
     
    render(){ 
        const {expenseId, expenseTitle, comment, amount, month, year} = this.state;
        return(
            <form onSubmit = {this.onSubmitUpdateExpense}>

                            <h5>Expense Id</h5>
                            <input class = 'input' type = 'text' name = 'expenseId' value = {expenseId} onChange = {this.onChangeUpdateExpense}/>

                            <br/>
                            
                            <h5>Title:</h5>
                            <input class = 'input' type = 'text' name = 'expenseTitle' value = {expenseTitle} onChange = {this.onChangeUpdateExpense}/>

                            <br/>

                            <h5>Amount:</h5>
                            <input class = 'input' type = 'text' name = 'amount' value = {amount} onChange = {this.onChangeUpdateExpense}/>

                            <br/>

                            <h5>Comment:</h5>
                            <input class = 'input' type = 'text' name = 'comment' value = {comment} onChange = {this.onChangeUpdateExpense}/>
                            <br/>

                            <h5>Month:</h5>
                            <select className = "input" name = "month" value = {month} onChange={this.onChangeUpdateExpense}>
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
                            <input class = 'input' type = 'text' name = 'year' value = {year} onChange = {this.onChangeUpdateExpense}/>
                            <br/>
                            
                            <MyButton className = 'button' type="submit">Update</MyButton>
                        </form>
        );
    }
}
export default UpadteExpense;
