import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';






class DataTableExpense extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
}



  
  componentDidMount = ()=>{
      this.props.trigger01Expense();   
  
  }
render(){
    const {trigger03Expense} = this.props;
    // console.log(this.props.monthProp);
  return (
  
    <Paper className='paperDesign'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Expense Id</TableCell>
            <TableCell >Title</TableCell>
            <TableCell >Amount</TableCell>
            <TableCell >Comment</TableCell>
            <TableCell >Created At</TableCell>
            <TableCell>Updated At</TableCell>

          </TableRow>
        </TableHead>
        {trigger03Expense && <TableBody>
          {trigger03Expense.map(user => {
              const {id,title,comment,amount,createdAt,updatedAt} = user;
              return(
                <TableRow key={id}>
                <TableCell component="th" scope="row">
                    {id}
                </TableCell>
                <TableCell >{title}</TableCell>
                <TableCell>{amount}</TableCell>
                <TableCell>{comment}</TableCell>
                <TableCell>{createdAt}</TableCell>
                <TableCell>{updatedAt}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>}
      </Table>
    </Paper>
  );
}
}

export default DataTableExpense;
