import React, {Component} from 'react';
import './totalIncome.css';
import './scrollTabs';
import './yearSelection';
import { async } from 'q';

class TotalIncome extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            selectedMonthTotal:'June',
            selectedYearTotal:'2019',
            totalIncomingFee: 0,
            totalSalaryPaid: 0,
            totalExpensePaid: 0,
            totalIncome: 0,
        }
    }

    getData = async() => {
        var config = {
            headers: {'Authorization': "bearer " + localStorage.getItem("Token")}
        };
        if(localStorage.getItem("Token"))
        {
        const axios = require('axios');
        await axios.get("https://allied-school-api.herokuapp.com/api/student/", config)
        .then(response =>
            {
                this.setState({totalIncomingFee:0});
                const dataStudent = response.data.students.map(student =>
                {
                    const filteredStudent = student.fees.filter(fee =>
                    
                    {
                        // console.log(fee);
                        return (fee.month === this.state.selectedMonthTotal)&&(fee.year === parseInt(this.state.selectedYearTotal));
                    })
                    // console.log(filteredData);
                    // console.log(student);
                    // console.log(filteredData);
                    if(filteredStudent[0])
                    {
                        this.setState({totalIncomingFee:this.state.totalIncomingFee + filteredStudent[0].tuitionFee + filteredStudent[0].transportFee});
                    }
                    return ({});
                })
            })
        await axios.get("https://allied-school-api.herokuapp.com/api/expense", config)
        .then(response =>
            {
                this.setState({totalExpensePaid:0});
                const dataExpense = response.data.expenses.filter(expense =>
                {
                    console.log(expense)
                    console.log(expense.month);
                    console.log(this.state.selectedMonthTotal)
                    console.log(expense.year);
                    console.log(this.state.selectedYearTotal)
                    return (expense.month === this.state.selectedMonthTotal)&&(expense.year === this.state.selectedYearTotal);
                })
                console.log(dataExpense);
                dataExpense.map(filteredExpense =>
                    {
                        this.setState({totalExpensePaid:this.state.totalExpensePaid + filteredExpense.amount});
                        return({});
                    })
            })
        await axios.get("https://allied-school-api.herokuapp.com/api/staff", config)
        .then(response =>
            {
                this.setState({totalSalaryPaid:0});
                const dataStaff = response.data.staff.map(staffSingle =>
                    {
                        const filteredStaff = staffSingle.StaffSalary.filter(salarySingle =>
                    
                            {
                                // console.log(fee);
                                return (salarySingle.month === this.state.selectedMonthTotal)&&(salarySingle.year === this.state.selectedYearTotal);
                            })
                            // console.log(filteredData);
                            // console.log(student);
                            // console.log(filteredData);
                            if(filteredStaff[0])
                            {
                                this.setState({totalSalaryPaid:this.state.totalSalaryPaid + filteredStaff[0].salary});
                            }
                            return ({});
                    })
            })
            // this.setState({totalIncome:0});
            this.setState({totalIncome:this.state.totalIncomingFee - (this.state.totalExpensePaid + this.state.totalSalaryPaid)});
        }
        else{
            alert("Authentication Failed!  Login Please.");
        }
    }
    componentDidMount = () => {
        this.getData();
    }

    handleChangeMonthTotal = (e)=>{
        this.setState({[e.target.name]:e.target.value});
        this.getData();
    }
    handleChangeYearTotal = (e)=>{
        this.setState({[e.target.name]:e.target.value});
        this.getData();
    }
    render(){

        return(
            <div className = "total">
                <div class = "menuRow-total">
                    <div className="label-style-total student-data-heading-total align-style-select-row-total">Overview:<span className="notes-style-total">( Select month and year to show specific data. )</span></div>
                    <label class="label-style-total label-font-total">Month: 
                        <select className = "monthMenu-total" name = "selectedMonthTotal" value = {this.state.selectedMonthTotal} onChange={this.handleChangeMonthTotal}>
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
                    <label className=  "align-style-select-row-total label-font-total">Year: 
                        <select className = "monthMenu-total" name = "selectedYearTotal" value = {this.state.selectedYearTotal} onChange={this.handleChangeYearTotal}>
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

                <div className = 'card-stats-total rightSide-total'>
                    <div className = 'heading-total'>Statistics per month:</div>
                    <hr className = 'line02-total'></hr>
                    <div class='align-style-total'>
                        <div className = 'structure-style-total'>
                            <div className = 'stats-total'>Total Incoming Fee:</div>
                            <div className="numbers-styling-total">{this.state.totalIncomingFee} Rs</div>
                        </div>
                        <div className = 'structure-style-total'>
                            <div className = 'stats-total'>Total Salary Paid:</div>
                            <div className="numbers-styling-total">{this.state.totalSalaryPaid} Rs</div>
                        </div>
                        <div className = 'structure-style-total'>
                            <div className = 'stats-total'>Total Expense:</div>
                            <div className="numbers-styling-total" >{this.state.totalExpensePaid} Rs</div>
                        </div>
                    </div>
                    {/* <hr className = 'line03-total'></hr> */}

                </div>
                <div className="label-style-total student-data-heading-total align-style-select-row-total menuRow-total final-statement">Final Statement:<span className="notes-style-total">Total Income of {this.state.selectedMonthTotal} {this.state.selectedYearTotal} is <span className="final-amount-style">{this.state.totalIncome} Rs</span></span></div>

                
            </div>
        )
    }
}
export default TotalIncome;