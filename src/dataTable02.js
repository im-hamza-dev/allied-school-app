import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class DataTable extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
}
  componentDidMount = ()=>{
      this.props.trigger01();   
  
  }
render(){
    const {trigger03} = this.props;
    // console.log(this.props.monthProp);
  return (
  
    <Paper className='paperDesign'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Student Id</TableCell>
            <TableCell >Student Name</TableCell>
            <TableCell >Father Name</TableCell>
            <TableCell >Grade</TableCell>
            <TableCell >Contact</TableCell>
            <TableCell>Transport Fee</TableCell>
            <TableCell>Tuition Fee</TableCell>

          </TableRow>
        </TableHead>
        {trigger03 && <TableBody>
          {trigger03.map(user => {
              const {id,name,fatherName,grade,contact,transportFee,tuitionFee} = user;
              return(
                <TableRow key={id}>
                <TableCell component="th" scope="row">
                    {id}
                </TableCell>
                <TableCell >{name}</TableCell>
                <TableCell>{fatherName}</TableCell>
                <TableCell>{grade}</TableCell>
                <TableCell>{contact}</TableCell>
                <TableCell>{transportFee}</TableCell>
                <TableCell>{tuitionFee}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>}
      </Table>
    </Paper>
  );
}
}

export default DataTable;
