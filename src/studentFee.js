import React, {Component} from 'react';
import './studentFee.css';
import './scrollTabs';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import './dataTable';
import DataTable from './dataTable02';
import './datePicker';
import AddStudent from './addStudent';
import UpdateStudent from './updateStudent';
import SubmitFee from './submitFee';
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
 


class StudentFee extends Component{
    constructor(props){
        super(props);
        this.state={
        studentId:'',
        studentName:'',
        fatherName:'',
        contact:'',
        grade:'',
        data:[],
        triggerRequest:false,
        selectedMonth:'June',
        selectedYear: 2019,
        studentData:[],
        filteredFeesArray:{},
        totalTransportFee:0,
        totalTuitionFee:0,
        totalFee:0,
        }
    }
    
    
    getStudentFunction = ()=>
    {

        var config = {
            headers: {'Authorization': "bearer " + localStorage.getItem("Token")}
        };
        const axios = require('axios');
        axios.get("/api/student", config)
        .then(response =>
            {
                console.log(localStorage.getItem("Token"));
                this.setState({totalTransportFee:0, totalTuitionFee:0, totalFee:0});
                if(localStorage.getItem("Token"))
                {
                    const studentData = response.data.students.map(user=>
                        {
                            // console.log(user.fees);
                            const filteredFees = user.fees.filter(fee =>
                                {
                                    // console.log(this.state.selectedMonth);
                                    // console.log(fee.month);
                                return (fee.month === this.state.selectedMonth)&&(fee.year === this.state.selectedYear);
                                });
                                if(filteredFees[0]){
                                    this.setState({filteredFeesArray:filteredFees[0]})
                                    this.setState({totalTransportFee: this.state.totalTransportFee+filteredFees[0].transportFee});
                                    this.setState({totalTuitionFee: this.state.totalTuitionFee+filteredFees[0].tuitionFee});
                                    this.setState({totalFee:this.state.totalFee+filteredFees[0].transportFee+filteredFees[0].tuitionFee});
                                }
                                else{
                                    this.setState({filteredFeesArray:{transportFee: 0, tuitionFee: 0}})
                                }
                                // console.log(this.state.totalTransportFee);
                                // console.log(this.state.filteredFeesArray);

                                return (
                                    {
                                        id: `${user.studentId}`,
                                        name: `${user.studentName}`,
                                        fatherName: `${user.fatherName}`,
                                        grade: `${user.grade}`,
                                        contact: `${user.contact}`,
                                        transportFee: `${this.state.filteredFeesArray.transportFee}`,
                                        tuitionFee: `${this.state.filteredFeesArray.tuitionFee}`,
                                    })
                        });
                        this.setState({studentData});
                        console.log(response);
                }
                else{
                    alert(response.data.err + "   Login Please");
                    console.log(response);
                }
            })

  
    }

    handleChangeMonth = (e)=>{
        this.setState({[e.target.name]:e.target.value});
        this.getStudentFunction();
    }
    handleChangeYear = (e)=>{
        
        this.setState({[e.target.name]:parseInt(e.target.value)});
        this.getStudentFunction();
    }
    
   
    render(){ 


        const {selectedMonth, selectedYear, studentData} = this.state;

        return(
            <div className = 'StudentFee'>
                
                <div className = 'card-stats-studentFee rightSide-studentFee'>
                    <div className = 'heading'>Statistics per month:</div>
                    <hr className = 'line02'></hr>
                    <div class='align-style-studentFee'>
                        <div className = 'structure-style'>
                            <div className = 'stats'>Total Tution Fee:</div>
                            <div className="numbers-styling">{this.state.totalTuitionFee} Rs</div>
                        </div>
                        <div className = 'structure-style'>
                            <div className = 'stats'>Total Transport Fee:</div>
                            <div className="numbers-styling">{this.state.totalTransportFee} Rs</div>
                        </div>
                        <div className = 'structure-style'>     
                            <div className = 'stats'>Total Incoming Fee:</div>
                            <div className="numbers-styling" >{this.state.totalFee} Rs</div>
                        </div>
                    </div>
                </div>
                <div class = "menuRow">
                    <div className="label-style student-data-heading align-style-select-row">Student Data:<span className="notes-style">( Select month and year to show specific data. )</span></div>
                    <label class="label-style label-font">Month: 
                        <select className = "monthMenu" name = "selectedMonth" value = {selectedMonth} onChange={this.handleChangeMonth}>
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
                    <label className=  "align-style-select-row label-font">Year: 
                        <select className = "monthMenu" name = "selectedYear" value = {selectedYear} onChange={this.handleChangeYear}>
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

                <div className = 'table'><DataTable trigger01 = {this.getStudentFunction} trigger03 = {studentData}/></div>

                <div className="form-heading-style">Submit Form:<span className="notes-style">( Fill form to submit students data. )</span></div>
                <div className='form-row'>
                    <div className = 'card-design forms leftMostForm'>
                        <div className = 'heading'>Add Student:</div>
                        <hr className = 'line'></hr>
                        <AddStudent trigger03 = {this.getStudentFunction}/>
                        
                    </div>
                    <div className = 'card-design forms'>
                        <div className = 'heading'>Update Student:</div>
                        <hr className = 'line'></hr>
                        <UpdateStudent trigger03 = {this.getStudentFunction}/>
                    </div>
                    <div className = 'card-design forms'>
                        <div className = 'heading'>Submit Fee:</div>
                        <hr className = 'line'></hr>
                        <SubmitFee trigger03 = {this.getStudentFunction}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default StudentFee;
