import React, {Component} from 'react';
import './mainScreen.css';
import './tabs'
import SimpleTabs from './tabs';
class Main extends Component{

    onClickLogout = () => {
        const {history} = this.props;
        history.push("/");
    }

    
    // onClick = {history.push("/")}
    render(){ 
        return(
            <div className = 'fullScreen'>
                <div class = 'left'>
                    <div className = 'extra'>Allied School</div>
                    <div className = 'user' onClick = {this.onClickLogout}>Logout</div>
                    <img className = 'admin' src='admin.png' alt='Admin'/> 
                </div>
                <div className = 'right'>
                    <SimpleTabs/>
                </div>     
            </div>
        );
    }
}
export default Main;
