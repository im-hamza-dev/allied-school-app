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


class SubmitSalary extends Component{
    constructor(props){
        super(props);
        this.state={
            staffId:'',
            month:'Jan',
            year:'',
            salary:'',
            }
    }

    onChangeSalary = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
  

    onSubmitStaffSalary = async(e) =>{

        e.preventDefault();

        const {staffId, month, year, salary} = this.state;
        const formBody = {salary, month, year, staffId};
        const axios = require('axios');

        await axios({
            method: 'post',
            url: '/api/salary',
            data: formBody,
            headers: {'Authorization': "Bearer " + localStorage.getItem("Token")}

            // config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                //handle success
                if(localStorage.getItem("Token"))
                {
                    alert(response.data.message);
                }
                else{
                    alert("Action Denied");
                }
                console.log(response)
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
           
            this.props.trigger03Staff();
            this.setState({staffId:'',
            month:'Jan',
            year:'',
            salary:'',});

    }
    
     
    render(){ 
        const {staffId, month, year, salary} = this.state;
        return(
            <form onSubmit = {this.onSubmitStaffSalary}>

                            <h5>Staff Id:</h5>
                            <input class = 'input' type = 'text' name = 'staffId' value = {staffId} onChange = {this.onChangeSalary}/>
                            <br/>

                            <h5>Salary:</h5>
                            <input class = 'input' type = 'number' name = 'salary' value = {salary} onChange = {this.onChangeSalary}/>
                            <br/>
                            
                            <h5>Month:</h5>
                            <select className = "input" name = "month" value = {month} onChange={this.onChangeSalary}>
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
                            <input class = 'input' type = 'text' name = 'year' value = {year} onChange = {this.onChangeSalary}/>
                            <br/>

                            
                            <MyButton className = 'button' type="submit">Submit</MyButton>
                        </form>
        );
    }
}
export default SubmitSalary;