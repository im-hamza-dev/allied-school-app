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


class UpdateStaff extends Component{
    constructor(props){
        super(props);
        this.state={
            staffId:'',
            staffName:'',
            position:'',
            contact:'',
            }
    }

    onChangeUpdateStaff = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
  

    onSubmitUpdateStaff = async(e) =>{

        e.preventDefault();

        const {staffId, staffName, position, contact} = this.state;
        const formBody = {staffName, position, contact};
        const axios = require('axios');

        await axios({
            method: 'put',
            url: '/api/staff/' + staffId,
            data: formBody,
            headers: {'Authorization': "Bearer " + localStorage.getItem("Token")}

            // config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                //handle success
                if(localStorage.getItem("Token"))
                {
                    alert("Staff Updated");
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
            staffName:'',
            position:'',
            contact:'',});


    }
    
     
    render(){
        const {staffId, staffName, position, contact} = this.state;
        return(
            <form onSubmit = {this.onSubmitUpdateStaff}>

                            <h5>Staff Id:</h5>
                            <input class = 'input' type = 'number' name = 'staffId' value = {staffId} onChange = {this.onChangeUpdateStaff}/>
                            <br/>

                            <h5>Staff Name:</h5>
                            <input class = 'input' type = 'text' name = 'staffName' value = {staffName} onChange = {this.onChangeUpdateStaff}/>
                            <br/>
                            
                            <h5>Position:</h5>
                            <input class = 'input' type = 'text' name = 'position' value = {position} onChange = {this.onChangeUpdateStaff}/>
                            <br/>

                            <h5>Contact No:</h5>
                            <input class = 'input' type = 'text' name = 'contact' value = {contact} onChange = {this.onChangeUpdateStaff}/>
                            <br/>

                            
                            <MyButton className = 'button' type="submit">Update</MyButton>
                        </form>
        );
    }
}
export default UpdateStaff;
