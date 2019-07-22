import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './studentFee';
import './staffPayment';
import './otherExpense';
import StudentFee from './studentFee';
import StaffPayment from './staffPayment';
import OtherExpense from './otherExpense';
import TotalIncome from './totalIncome';
import './tabs.css'


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 0 * 0 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  console.log("THIS IS THE VALUE: ", value);

  return (
    <div className={classes.root}>
      <AppBar position="static"
      className='app-bar-styling'>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Student Fee" />
          <Tab label="Staff Payments" />
          <Tab label="Other Expense" />
          <Tab label="Total Income" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><StudentFee /></TabContainer>}
      {value === 1 && <TabContainer><StaffPayment /></TabContainer>}
      {value === 2 && <TabContainer><OtherExpense /></TabContainer>}
      {value === 3 && <TabContainer><TotalIncome /></TabContainer>}
    </div>
  );
}