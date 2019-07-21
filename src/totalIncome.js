import React, {Component} from 'react';
import './totalIncome.css';
import './scrollTabs';
import './yearSelection';
import ControlledOpenSelect from './yearSelection';
import ScrollableTabsButtonAuto from './scrollTabs';
class TotalIncome extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],

        }
    }
    render(){

        return(
            <div>
                <div className = 'top'>
                    {/* <div className = 'table'><ScrollableTabsButtonAuto/></div> */}
                    <div className = 'rightSide'>
                        <div className = 'card padLeft'>
                            <div><ControlledOpenSelect/></div>
                        </div>
                          
                    </div>
                </div>
                
            </div>
        )
    }
}
export default TotalIncome;