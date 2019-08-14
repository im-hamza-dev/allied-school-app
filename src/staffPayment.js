import React, {Component} from 'react';
import './staffPayment.css';
import './scrollTabs';
import './yearSelection';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import DataTableStaff from './dataTableStaff';
import AddStaff from './addStaff';
import UpdateStaff from './updateStaff';
import SubmitSalary from './submitSalary';
 
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
  
class StaffPayment extends Component{
    constructor(props){
        super(props);
        this.state={
            staffId:'',
            staffName:'',
            position:'',
            contact:'',
            salary:'',
            selectedMonthStaff:'June',
            selectedYearStaff:'2019',
            filteredSalaryArray:{},
            totalSalary: 0,
            data:[],
            staffData:[],
        }
    }
    
    getStaffFunction = ()=>
    {
        var config = {
            headers: {'Authorization': "bearer " + localStorage.getItem("Token")}
        };
        console.log("helo friends i'm in");
        const axios = require('axios');
        axios.get("https://allied-school-api.herokuapp.com/api/staff", config)
        .then(response =>
            {
                console.log("i'm in to response")
                console.log(response);
                this.setState({totalSalary:0});
                if(localStorage.getItem("Token"))
                {
                const staffData = response.data.staff.map(user=>
                    {
                        const filteredSalary = user.StaffSalary.filter(singleSalary =>
                            {
                                // console.log(this.state.selectedMonth);
                                // console.log(fee.month);
                            return (singleSalary.month === this.state.selectedMonthStaff)&&(singleSalary.year === this.state.selectedYearStaff);
                            });
                            if(filteredSalary[0]){
                                this.setState({filteredSalaryArray:filteredSalary[0]})
                                this.setState({totalSalary: this.state.totalSalary+filteredSalary[0].salary});
                            }
                            else{
                                this.setState({filteredSalaryArray:{salary:0}})
                            }
                            console.log(this.state.totalSalary);
                            console.log(this.state.filteredFeesArray);

                            return (
                                {
                                    staffId: `${user.staffId}`,
                                    staffName: `${user.staffName}`,
                                    position: `${user.position}`,
                                    contact: `${user.contact}`,
                                    salary: `${this.state.filteredSalaryArray.salary}`,
                                })
                    });
            
                this.setState({staffData});
                console.log(response);
                }
                else{
                    alert(response.data.err + "   Login Please");
                    console.log(response);
                }
            })
            

  
    }

    handleChangeMonthStaff = (e)=>{
        this.setState({[e.target.name]:e.target.value});
        this.getStaffFunction();
    }
    handleChangeYearStaff = (e)=>{
        this.setState({[e.target.name]:e.target.value});
        this.getStaffFunction();
    }
     
    render(){
        console.log("NOW WE ARE HERE");
        return(
            <div className = 'StaffPayment'>
                <div className = 'card-stats-staff rightSide-staff'>
                    <div className = 'heading-staff'>Statistics per month:</div>
                    <hr className = 'line02-staff'></hr>
                    <div class='align-style-staff'>
                        <div className = 'structure-style-staff'>
                            <div className = 'stats-staff'>Total Salary:</div>
                            <div className="numbers-styling-staff">{this.state.totalSalary} Rs</div>
                        </div>
                    </div>
                </div>
                <div class = "menuRow-staff">
                    <div className="label-style-staff student-data-heading-staff align-style-select-row-staff">Staff Data:<span className="notes-style-staff">( Select month and year to show specific data. )</span></div>
                    <label class="label-style-staff label-font-staff">Month: 
                        <select className = "monthMenu-staff" name = "selectedMonthStaff" value = {this.state.selectedMonthStaff} onChange={this.handleChangeMonthStaff}>
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
                    <label className=  "align-style-select-row-staff label-font-staff">Year: 
                        <select className = "monthMenu-staff" name = "selectedYearStaff" value = {this.state.selectedYearStaff} onChange={this.handleChangeYearStaff}>
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

                <div className = 'table-staff'><DataTableStaff trigger01Staff = {this.getStaffFunction} trigger03Staff = {this.state.staffData}/></div>

                <div className="form-heading-style-staff">Submit Form:<span className="notes-style">( Fill form to submit staff data. )</span></div>
                <div className='form-row-staff'>
                    <div className = 'card-design-staff forms-staff leftMostForm-staff'>
                        <div className = 'heading-staff'>Add Staff:</div>
                        <hr className = 'line-staff'></hr>
                        <AddStaff trigger03Staff = {this.getStaffFunction}/>
                        
                    </div>
                    <div className = 'card-design-staff forms-staff'>
                        <div className = 'heading-staff'>Update Staff:</div>
                        <hr className = 'line-staff'></hr>
                        <UpdateStaff trigger03Staff = {this.getStaffFunction}/>
                    </div>
                    <div className = 'card-design-staff forms-staff'>
                        <div className = 'heading-staff'>Submit Salary:</div>
                        <hr className = 'line-staff'></hr>
                        <SubmitSalary trigger03Staff = {this.getStaffFunction}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default StaffPayment;
