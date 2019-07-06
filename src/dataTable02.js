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
        studentData: []
    }
}

  
  
  
  
  // const [state, setState] = React.useState({
  //   columns: [
  //     { title: 'Id', field: 'id', type: 'numeric' },
  //     { title: 'Name', field: 'name' },
  //     { title: 'Father Name', field: 'surname'},
  //     { title: 'Class', field: 'class'},
  //     { title: 'Contact No.', field: 'number', type: 'numeric'},
  //     { title: 'Transport Fee Status', field: 'transport fee'},
  //     { title: 'Tution Fee Status', field: 'education fee'}
  //   ],
  //   data: [
  //     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
  //     {
  //       name: 'Zerya Betül',
  //       surname: 'Baran',
  //       birthYear: 2017,
  //       birthCity: 34,
  //     },
  //   ],
  // });
  componentDidUpdate(){
    // const {trigger02} = this.props;
    if (this.props.trigger02 === true){

      const axios = require('axios');
      axios.get("/api/student")
      .then(response =>
        response.data.students.map(user=>({
            id: `${user.studentId}`,
            name: `${user.studentName}`,
        }))
        
    )

    .then(studentData => {
        this.setState({
            studentData
        });
    })

    console.log("props recieved");

    }
  }
  componentDidMount(){

    const axios = require('axios');
    axios.get("/api/student")
    .then(response =>
        response.data.students.map(user=>({
            id: `${user.studentId}`,
            name: `${user.studentName}`,
        }))
        
    )

    .then(studentData => {
        this.setState({
            studentData
        });
    })
    
  
  }
render(){
    const {studentData} = this.state;
  return (
    //   <div>
    //       {studentData.map(user=>{
    //           const {id,name} = user;
    //           return(
    //             <div key={id}>
    //                 <p>{id}</p>
    //                 <p>{name}</p>
    //                 <hr></hr>
    //             </div>
    //           );
    //       })
    //     }
    //   </div>
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
        <TableBody>
          {studentData.map(user => {
              const {id,name} = user;
              return(
                <TableRow key={id}>
                <TableCell component="th" scope="row">
                    {id}
                </TableCell>
                <TableCell >{name}</TableCell>
                {/* <TableCell align="right">{studentData.fatherName}</TableCell>
                <TableCell align="right">{studentData.grade}</TableCell>
                <TableCell align="right">{studentData.section}</TableCell>
                <TableCell align="right">{studentData.contact}</TableCell> */}

                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </Paper>
  );
}
}

export default DataTable;
