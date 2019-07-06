import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './dataTable';
import MaterialTableDemo from './dataTable';
import './scrollTabs.css';
import DataTable from './dataTable02';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
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

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Jan" />
          <Tab label="Feb" />
          <Tab label="Mar" />
          <Tab label="Apr" />
          <Tab label="May" />
          <Tab label="June" />
          <Tab label="July" />
          <Tab label="Aug" />
          <Tab label="Sep" />
          <Tab label="Oct" />
          <Tab label="Nov" />
          <Tab label="Dec" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer className='containerStyle'><DataTable trigger02 = {props.trigger}/></TabContainer>}
      {value === 1 && <TabContainer><MaterialTableDemo/></TabContainer>}
      {value === 2 && <TabContainer><MaterialTableDemo/></TabContainer>}
      {value === 3 && <TabContainer><MaterialTableDemo/></TabContainer>}
      {value === 4 && <TabContainer><MaterialTableDemo/></TabContainer>}
      {value === 5 && <TabContainer><MaterialTableDemo/></TabContainer>}
      {value === 6 && <TabContainer><MaterialTableDemo/></TabContainer>}
      {value === 7 && <TabContainer><MaterialTableDemo/></TabContainer>}
      {value === 8 && <TabContainer><MaterialTableDemo/></TabContainer>}
      {value === 9 && <TabContainer><MaterialTableDemo/></TabContainer>}
      {value === 10 && <TabContainer><MaterialTableDemo/></TabContainer>}
      {value === 11 && <TabContainer><MaterialTableDemo/></TabContainer>}
    </div>
  );
}