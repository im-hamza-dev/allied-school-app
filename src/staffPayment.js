import React, {Component} from 'react';
import './staffPayment.css';
import './scrollTabs';
import ScrollableTabsButtonAuto from './scrollTabs';
import './yearSelection';
import ControlledOpenSelect from './yearSelection';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

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
  
class StaffPayment extends Component{
    constructor(props){
        super(props);
        this.state={
            
            data:[],
        }
    }
    
     
    render(){
        console.log("NOW WE ARE HERE");
        return(
            <div className = 'StudentFee'>
                <div className = 'top'>
                    <div className = 'table'><ScrollableTabsButtonAuto/></div>
                    <div className = 'rightSide'>
                        <div className = 'card padLeft'>
                            <div><ControlledOpenSelect/></div>
                        </div>
                        <div className = 'card extraCard'>
                            <div className = 'heading'>Statistics per month:</div>
                            <hr className = 'line02'></hr>
                            <div className = 'stats'>Total Salary Paid:</div>
                            <div>360000 Rs</div>
                           
                        </div>        
                    </div>
                </div>
                <div className = 'bottom'>
                    <div className = 'card forms leftMostForm'>
                        <div className = 'heading'>Add Staff:</div>
                        <hr className = 'line'></hr>
                        <form onSubmit={(e) =>{
                        e.preventDefault();
                        const data = [...this.state.data,this.state.inputText];
                        this.setState({data, inputText: ''});
                        }}>

                            <h5>Staff Id:</h5>
                            <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                            onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>
                            
                            <br/>

                            <h5>Staff Name:</h5>
                            <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                            onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>

                            <br/>
                            
                            <h5>Position:</h5>
                            <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                            onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>
                            <br></br>

                            <h5>Contact No:</h5>
                            <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                            onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>
                            <br></br>

                            
                            <MyButton className = 'button' type="submit">Update</MyButton>
                        </form>
                    </div>
                    <div className = 'card forms'>
                        <div className = 'heading'>Update Staff:</div>
                        <hr className = 'line'></hr>
                        <form onSubmit={(e) =>{
                        e.preventDefault();
                        const data = [...this.state.data,this.state.inputText];
                        this.setState({data, inputText: ''});
                        }}>

                            <h5>Staff Id:</h5>
                            <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                            onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>
                            
                            <br/>

                            <h5>Staff Name:</h5>
                            <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                            onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>

                            <br/>
                            
                            <h5>Position:</h5>
                            <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                            onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>
                            <br></br>

                            <h5>Contact No:</h5>
                            <input class = 'input' type = 'text' name = 'inputText' value = {this.state.inputText} 
                            onChange = {(e) =>{this.setState({[e.target.name]:e.target.value})}}></input>
                            <br></br>

                            
                            <MyButton className = 'button' type="submit">Update</MyButton>
                        </form>
                    </div>
                    <div className = 'card forms'>
                        <div className = 'heading'>Submit Pay:</div>
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

                            <h5>Student Name:</h5>
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

                            
                            <MyButton className = 'button' type="submit">Submit</MyButton>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default StaffPayment;
