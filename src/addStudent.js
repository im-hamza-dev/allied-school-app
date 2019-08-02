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


class AddStudent extends Component{
    constructor(props){
        super(props);
        this.state={
            studentName:'',
            fatherName:'',
            contact:'',
            grade:'',
            }
    }

    onChangeAddStudent = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmitAddStudent = async(e) =>{

        e.preventDefault();

        const {studentName, fatherName, grade, contact} = this.state;
        const formBody = {studentName, fatherName, grade, contact};
        const axios = require('axios');

        await axios({
            method: 'post',
            url: '/api/student',
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
            this.setState({studentName:'', fatherName:'', contact:'', grade:''});


    }
    
     
    render(){ 
        const {studentName, fatherName, grade, contact} = this.state;
        return(
            <form onSubmit = {this.onSubmitAddStudent}>

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

                            
                            <MyButton className = 'button' type="submit">Add</MyButton>
                        </form>
        );
    }
}
export default AddStudent;
