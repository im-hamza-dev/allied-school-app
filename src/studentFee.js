import React, {Component} from 'react';
import './studentFee.css';
import './scrollTabs';
import ScrollableTabsButtonAuto from './scrollTabs';
import './yearSelection';
import ControlledOpenSelect from './yearSelection';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import './dataTable';
import Axios from 'axios';
import MaterialUIPickers from './datePicker';
import MonthYearPicker from './datePicker';
import DialogSelect from './datePicker';
import DataTable from './dataTable02';
import './datePicker';
import DatePicker from './datePicker';
import AddStudent from './addStudent';

  
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
        month:"",
        studentData:[]
        }
    }
    

    getStudentFunction = () => {
        const axios = require('axios');
        axios.get("/api/student")
        .then(response =>
          response.data.students.map(user=>({
              id: `${user.studentId}`,
              name: `${user.studentName}`,
          }))
          
      )
  
      .then(studentData => {
          this.setState({
              studentData
          });
      })
  
    }

    handleChangeMonth = (e)=>{
        this.setState({month:e.target.value});
    }
    onChangeAddStudent = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    
    onSubmitUpdateStudent = (e) =>{

        e.preventDefault();

        const {studentId, studentName, fatherName, grade, contact} = this.state;
        const formBody = {studentId, studentName, fatherName, grade, contact};
        const axios = require('axios');

        axios({
            method: 'put',
            url: '/api/student/:studentId',
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
       
        
        this.setState({triggerRequest:true});

    }
    setStateTrigger = (val) => {
        this.setState({triggerRequest:val});
    }


    render(){ 


        const {studentId, studentName, fatherName, grade, contact,triggerRequest,month, studentData} = this.state;


        return(
            <div className = 'StudentFee'>
                <div class = "menuRow">
                    <label>Month:
                        <select class = "monthMenu" value = {month} onChange={this.handleChangeMonth}>
                            <option defaultValue value = "Jan">Jan</option>
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
                </div>
                <div className = 'top'>
                    <div className = 'table'><DataTable trigger01 = {this.getStudentFunction} trigger03 = {studentData} monthProp = {month}/></div>
                    <div className = 'rightSide'>
                        <div className = 'card extraCard'>
                            <div className = 'heading'>Statistics per month:</div>
                            <hr className = 'line02'></hr>
                            <div className = 'stats'>Total Salary Fee:</div>
                            <div>360000 Rs</div>
                            <div className = 'stats'>Total Tution Fee:</div>
                            <div>960000 Rs</div>
                            <div className = 'stats'>Total Incoming Fee:</div>
                            <div>1230000 Rs</div>
                        </div>        
                    </div>
                </div>
                <div className = 'bottom'>
                    <div className = 'card forms leftMostForm'>
                        <div className = 'heading'>Add Student:</div>
                        <hr className = 'line'></hr>
                        <AddStudent trigger03 = {this.getStudentFunction}/>
                        
                    </div>
                    <div className = 'card forms'>
                        <div className = 'heading'>Update Student:</div>
                        <hr className = 'line'></hr>
                        <form onSubmit = {this.onSubmitUpdateStudent}>


                            <h5>Student Id:</h5>
                            <input class = 'input' type = 'text' name = 'studentId' value = {studentId} onChange = {this.onChangeAddStudent}/>

                            <br/>

                            <h5>Student Name:</h5>
                            <input class = 'input' type = 'text' name = 'studentName' value = {studentName} onChange = {this.onChangeAddStudent}/>

                            <br/>
                            
                            <h5>Father Name:</h5>
                            <input class = 'input' type = 'text' name = 'fatherName' value = {fatherName} onChange = {this.onChangeAddStudent}/>

                            <br/>

                            <h5>Grade:</h5>
                            <input class = 'input' type = 'text' name = 'grade' value = {grade} onChange = {this.onChangeAddStudent}/>

                            <br/>

                            <h5>Contact No:</h5>
                            <input class = 'input' type = 'text' name = 'contact' value = {contact} onChange = {this.onChangeAddStudent}/>
                            <br/>

                            
                            <MyButton className = 'button' type="submit">Update</MyButton>
                        </form>
                    </div>
                    <div className = 'card forms'>
                        <div className = 'heading'>Submit Fee:</div>
                        <hr className = 'line'></hr>
                        <form onSubmit={(e) =>{
                        e.preventDefault();
                        const data = [...this.state.data,this.state.inputText];
                        this.setState({data, inputText: ''});
                        }}>

                            <h5>Student Id:</h5>
                            <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                            onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>
                            
                            <br/>
                            
                            <h5>Transport Fee:</h5>
                            <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                            onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>
                            <br></br>

                            <h5>Education Fee:</h5>
                            <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                            onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>
                            <br></br>

                            <h5>Month:</h5>
                            <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                            onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>
                            <br></br>

                            <h5>Year:</h5>
                            <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                            onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>
                            <br></br>

                            
                            <MyButton className = 'button' type="submit">Submit</MyButton>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default StudentFee;
