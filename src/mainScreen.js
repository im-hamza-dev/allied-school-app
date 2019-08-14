import React, {Component} from 'react';
import './mainScreen.css';
import './tabs'
import SimpleTabs from './tabs';
import Button from '@material-ui/core/Button';

class Main extends Component{

    onClickLogout = () => {
        const {history} = this.props;
        localStorage.removeItem("Token");
        console.log(localStorage.getItem("Token"));
        history.push("/");
    }

    
    // onClick = {history.push("/")}
    render(){ 
        return(
            <div className = 'fullScreen'>
                <div class = 'left'>
                    <div className = 'extra'>Allied School</div>
                    <Button className = 'user' onClick = {this.onClickLogout}>Logout</Button>
                </div>
                <div className = 'right'>
                    <SimpleTabs/>
                </div>     
            </div>
        );
    }
}
export default Main;
