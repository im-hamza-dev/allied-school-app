import React, {Component} from 'react';
import './mainScreen.css';
import './tabs'
import SimpleTabs from './tabs';
class Main extends Component{
    constructor(props){
        super(props);
    }
    
     
    render(){ 
        return(
            <div className = 'fullScreen'>
                
                <div class = 'left'>
                    <div className = 'extra'>Allied School</div>
                    <div className = 'user'>User Name</div>
                    <img class = 'admin' src='admin.png' alt='Admin'/>
                   
                </div>
                <div class = 'right'>
                    <SimpleTabs/>
                </div>
                
            </div>
        );
    }
}
export default Main;
