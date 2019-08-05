import React, {Component} from 'react';
import './loginScreen.css';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import FormDialog from './dialogFormSignUp';
import { Dialog } from '@material-ui/core';


const MyButton = styled(Button)({
    // background: 'linear-gradient(45deg, #9343A3 30%, #B34CC7 90%)',
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px light grey',
    // color: 'white',
    // height: 38,
    // width: 80,
    // padding: '0 30px',
    // fontSize: 10,
    // marginRight: 5,
    // marginTop:20,

    color: 'white',
    padding: '10px 30px',
    fontSize: 11,
    background: 'blueviolet',
    border: 0,
    // font-family: poppins,
    borderRadius: 5,
    marginBottom: 10,
  });



class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:"",
            password:"",
            data:[],

        }
    }

    onSubmitLogin = () => {

    }

    handleChangeLogin = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit = (e)=>{
    }
    render(){

        return(
                <div class = 'loginCard-login'>
                    <div className = "boundary-login">
                        <div><img class = 'logo-login' src='logoAllied.png' alt='Allied School'/></div>
                        <form onSubmit= {this.onSubmitLogin} className = "form-style">
                            <h5>Username:</h5>
                            <input class = 'input-login' type = 'text' name = 'userName' value = {this.state.userName} 
                            onChange = {this.handleChangeLogin}></input>
                            <br/>
                            <h5>Password:</h5>

                            <input type= 'password' class = 'input-login' name = 'password' value = {this.state.password} 
                            onChange = {this.handleChangeLogin}></input>
                            <br></br>
                            <MyButton class = 'loginButton-login' type="submit">Login</MyButton>
                        </form>
                        <div><FormDialog/></div>
                       
                    </div>
                </div>
        )
    }
}
export default Login;