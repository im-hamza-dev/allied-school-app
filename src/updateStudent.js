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


class UpdateStudent extends Component{
    constructor(props){
        super(props);
        this.state={
            studentId:'',
            studentName:'',
            fatherName:'',
            contact:'',
            grade:'',
            }
    }

    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmitUpdate = async(e) =>{

        e.preventDefault();
        console.log("i'm in");
        const {studentId, studentName, fatherName, grade, contact} = this.state;
        const formBody = {studentId, studentName, fatherName, grade, contact};
        const axios = require('axios');

        await axios({
            method: 'put',
            url: '/api/student/'+ studentId,
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

            this.props.trigger03();


    }
    
     
    render(){ 
        const {studentId, studentName, fatherName, grade, contact} = this.state;
        return(
            <form onSubmit = {this.onSubmitUpdate}>
                             <h5>Student Id:</h5>
                            <input class = 'input' type = 'text' name = 'studentId' value = {studentId} onChange = {this.onChange}/>

                            <br/>

                            <h5>Student Name:</h5>
                            <input class = 'input' type = 'text' name = 'studentName' value = {studentName} onChange = {this.onChange}/>

                            <br/>
                            
                            <h5>Father Name:</h5>
                            <input class = 'input' type = 'text' name = 'fatherName' value = {fatherName} onChange = {this.onChange}/>

                            <br/>

                            <h5>Grade:</h5>
                            <input class = 'input' type = 'text' name = 'grade' value = {grade} onChange = {this.onChange}/>

                            <br/>

                            <h5>Contact No:</h5>
                            <input class = 'input' type = 'text' name = 'contact' value = {contact} onChange = {this.onChange}/>
                            <br/>

                            
                            <MyButton className = 'button' type="submit">Update</MyButton>
                        </form>
        );
    }
}
export default UpdateStudent;
