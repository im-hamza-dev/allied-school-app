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


class AddStaff extends Component{
    constructor(props){
        super(props);
        this.state={
            staffName:'',
            position:'',
            contact:'',
            }
    }

    onChangeAddStaff = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
  

    onSubmitAddStaff = async(e) =>{
 
        e.preventDefault();

        const {staffName, position, contact} = this.state;
        const formBody = {staffName, position, contact};
        const axios = require('axios');

        await axios({
            method: 'post',
            url: '/api/staff',
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
           
            this.props.trigger03Staff();
            this.setState({staffName:'', position:'', contact:''});


    }
    
     
    render(){ 
        const {staffName, position, contact} = this.state;
        return(
            <form onSubmit = {this.onSubmitAddStaff}>

                            <h5>Staff Name:</h5>
                            <input class = 'input' type = 'text' name = 'staffName' value = {staffName} onChange = {this.onChangeAddStaff}/>

                            <br/>
                            
                            <h5>Position:</h5>
                            <input class = 'input' type = 'text' name = 'position' value = {position} onChange = {this.onChangeAddStaff}/>
                            <br/>

                            <h5>Contact No:</h5>
                            <input class = 'input' type = 'text' name = 'contact' value = {contact} onChange = {this.onChangeAddStaff}/>
                            <br/>

                            
                            <MyButton className = 'button' type="submit">Add</MyButton>
                        </form>
        );
    }
}
export default AddStaff;
