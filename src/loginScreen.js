import React, {Component} from 'react';
import './loginScreen.css';
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],

        }
    }
    render(){

        return(
            <div class = 'loginCard'>
                <div><img class = 'logo' src='logoAllied.png' alt='Allied School'/></div>
                <form onSubmit={(e) =>{
                    e.preventDefault();
                    const data = [...this.state.data,this.state.inputText];
                    this.setState({data, inputText: ''});
                    }}>
                    <h5>Username:</h5>
                    <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                    onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>
                    <br/>
                    <h5>Password:</h5>

                    <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                    onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>
                    <br></br>
                    <button class = 'loginButton' type="submit">Login</button>
                </form>
            </div>
        )
    }
}
export default Login;