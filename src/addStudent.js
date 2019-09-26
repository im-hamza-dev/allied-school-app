import React, {Component} from 'react';
import './mainScreen.css';
import './tabs'
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { delay, async } from 'q';
import {Alert} from 'reactstrap'
import AlterDialog from './alertForm';
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


class AddStudent extends Component{
    constructor(props){
        super(props);
        this.state={
            studentName:'',
            fatherName:'',
            contact:'',
            grade:'',
            alliedId:'',
            }
    }

    onChangeAddStudent = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmitAddStudent = async(e) =>{

        e.preventDefault();
        console.log(localStorage.getItem("Token"));
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem("Token")}
        };
        const {studentName, fatherName, grade, contact, alliedId} = this.state;
        const formBody = {alliedId, studentName, fatherName, grade, contact};
        const axios = require('axios');

        await axios({
            method: 'post',
            url: baseURL+'/api/student',
            data: formBody,
            headers: {'Authorization': "Bearer " + localStorage.getItem("Token")}
        })
            .then(function (response) {
                //handle success
                if(localStorage.getItem("Token"))
                {
                    alert("Student Created");
                }
                else{
                    alert("Action Denied");
                }
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                alert("Request Failed");
                console.log(response);
            });
           
            this.props.trigger03();
            this.setState({studentName:'', fatherName:'', contact:'', grade:'', alliedId:''});


    }
    
     
    render(){ 
        const {alliedId, studentName, fatherName, grade, contact} = this.state;
        return(
            <form onSubmit = {this.onSubmitAddStudent}>

                            <h5>Student Name:</h5>
                            <input class = 'input' type = 'text' name = 'studentName' value = {studentName} onChange = {this.onChangeAddStudent}/>

                            <br/>

                            <h5>Allied Id:</h5>
                            <input class = 'input' type = 'text' name = 'alliedId' value = {alliedId} onChange = {this.onChangeAddStudent}/>

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

                            
                            <MyButton className = 'button' type="submit">Add</MyButton>
                        </form>
        );
    }
}
export default AddStudent;
