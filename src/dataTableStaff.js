import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class DataTableStaff extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
}

  componentDidMount = ()=>{
      this.props.trigger01Staff(); 
  }
render(){
    const {trigger03Staff} = this.props;
    // console.log(this.props.monthProp);
  return (
    <Paper className='paperDesign'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Staff Id</TableCell>
            <TableCell >Staff Name</TableCell>
            <TableCell >Position</TableCell>
            <TableCell >Contact</TableCell>
            <TableCell>Salary</TableCell>
          </TableRow>
        </TableHead>
        {trigger03Staff && <TableBody>
          {trigger03Staff.map(user => {
              const {staffId,staffName,position,contact,salary} = user;
              return(
                <TableRow key={staffId}>
                <TableCell component="th" scope="row">
                    {staffId}
                </TableCell>
                <TableCell >{staffName}</TableCell>
                <TableCell>{position}</TableCell>
                <TableCell>{contact}</TableCell>
                <TableCell>{salary}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>}
      </Table>
    </Paper>
  );
}
}

export default DataTableStaff;
