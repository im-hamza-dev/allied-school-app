import React, {Component} from 'react';
import './otherExpense.css';
import './scrollTabs';
import './yearSelection';

import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import DataTableExpense from './dataTableExpense';
import AddExpense from './addExpense';
import UpdateExpense from './updateExpense';
import baseURL from './instance';


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
  
class OtherExpense extends Component{
    constructor(props){
        super(props);
        this.state={
            expenseTitle:'',
            comment:'',
            amount:'',
            expenseData:[],
            data:[],
            selectedMonthExpense:'June',
            selectedYearExpense: '2019',
            filteredExpenseArray:{},
            totalExpense:0,
        }
    }
    
    getExpenseFunction = ()=>
    {
        var config = {
            headers: {'Authorization': "bearer " + localStorage.getItem("Token")}
        };
        const axios = require('axios');
        axios.get(baseURL + "/api/expense", config)
        .then(response =>
            {
                this.setState({totalExpense:0});
                // console.log(response);
                if(localStorage.getItem("Token"))
                {
                
                    const filteredExpenseData = response.data.expenses.filter(expense =>
                        {
                            return (expense.month === this.state.selectedMonthExpense)&&(expense.year === this.state.selectedYearExpense);
                        });    
                        // console.log(filteredExpenseData);
                    const expenseData = filteredExpenseData.map(user=>
                        {
                            this.setState({totalExpense:this.state.totalExpense+user.amount});
                                return (
                                    {
                                        id: `${user.expenseId}`,
                                        title: `${user.expenseTitle}`,
                                        comment: `${user.comment}`,
                                        amount: `${user.amount}`,
                                        createdAt: `${user.createdAt}`,
                                        updatedAt: `${user.createdAt}`,
                                    })
                        });
            
                    this.setState({expenseData});
                }
                else
                {
                    alert(response.data.err + "   Login Please");
                    console.log(response);
                }
            // console.log(response);
            })

    }

    handleChangeMonthExpense = (e)=>{
        this.setState({[e.target.name]:e.target.value});
        this.getExpenseFunction();
    }
    handleChangeYearExpense = (e)=>{
        this.setState({[e.target.name]:e.target.value});
        this.getExpenseFunction();
    } 


    render(){ 

        return(
            <div className = 'OtherExpense'>
                
                <div className = 'card-stats-expense rightSide-expense'>
                    <div className = 'heading-expense'>Statistics per month:</div>
                    <hr className = 'line02-expense'></hr>
                    <div class='align-style-expense'>
                        <div className = 'structure-style-expense'>
                            <div className = 'stats-expense'>Total Expense:</div>
                            <div className="numbers-styling-expense">{this.state.totalExpense} Rs</div>
                        </div>
                    </div>
                </div>
                <div class = "menuRow-expense">
                    <div className="label-style-expense student-data-heading-expense align-style-select-row-expense">Expense Data:<span className="notes-style-expense">( Select month and year to show specific data. )</span></div>
                    <label class="label-style-expense label-font-expense">Month: 
                        <select className = "monthMenu-expense" name = "selectedMonthExpense" value = {this.state.selectedMonthExpense} onChange={this.handleChangeMonthExpense}>
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
                    </label>
                    <label className=  "align-style-select-row-expense label-font-expense">Year: 
                        <select className = "monthMenu-expense" name = "selectedYearExpense" value = {this.state.selectedYearExpense} onChange={this.handleChangeYearExpense}>
                            <option value = "2019">2019</option>
                            <option value = "2020">2020</option>
                            <option value = "2021">2021</option>
                            <option value = "2022">2022</option>
                            <option value = "2023">2023</option>
                            <option value = "2024">2024</option>
                            <option value = "2025">2025</option>
                            <option value = "2026">2026</option>
                            <option value = "2027">2027</option>
                            <option value = "2028">2028</option>
                            <option value = "2029">2029</option>
                            <option value = "2030">2030</option>
                        </select>
                    </label>
                </div>

                <div className = 'table-expense'><DataTableExpense trigger01Expense = {this.getExpenseFunction} trigger03Expense = {this.state.expenseData}/></div>

                <div className="form-heading-style-expense">Submit Form:<span className="notes-style">( Fill form to submit expense data. )</span></div>
                <div className='form-row-expense'>
                    <div className = 'card-design-expense forms-expense leftMostForm-expense'>
                        <div className = 'heading-expense'>Add Expense:</div>
                        <hr className = 'line-expense'></hr>
                        <AddExpense trigger03Expense = {this.getExpenseFunction}/>
                        
                    </div>
                    <div className = 'card-design-expense forms-expense'>
                        <div className = 'heading-expense'>Update Expense:</div>
                        <hr className = 'line-expense'></hr>
                        <UpdateExpense trigger03Expense = {this.getExpenseFunction}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default OtherExpense;
