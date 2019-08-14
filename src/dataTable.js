// import React from 'react';
// import MaterialTable from 'material-table';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';



// class MaterialTableDemo extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       studentData:[],
//         columns: [
//           { title: 'Id', field: 'id', type: 'numeric' },
//           { title: 'Name', field: 'name' },
//           { title: 'Father Name', field: 'surname'},
//           { title: 'Class', field: 'class'},
//           { title: 'Contact No.', field: 'number', type: 'numeric'},
//           { title: 'Transport Fee Status', field: 'transport fee'},
//           { title: 'Tution Fee Status', field: 'education fee'}
//         ],
//         data: [
//           { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//           {
//             name: 'Zerya Betül',
//             surname: 'Baran',
//             birthYear: 2017,
//             birthCity: 34,
//           },
//         ]
//     }
// }

// // componentDidMount(){

// //   const axios = require('axios');
// //   axios.get("/api/student")
// //   .then(response =>
// //       response.data.students.map(user=>({
// //           id: `${user.studentId}`,
// //           name: `${user.studentName}`,
// //       }))
      
// //   )

// //   .then(studentData => {
// //       this.setState({
// //           studentData
// //       });
// //   })
  

// // }
  
  
  
  
//   // const [state, setState] = React.useState({
//   //   columns: [
//   //     { title: 'Id', field: 'id', type: 'numeric' },
//   //     { title: 'Name', field: 'name' },
//   //     { title: 'Father Name', field: 'surname'},
//   //     { title: 'Class', field: 'class'},
//   //     { title: 'Contact No.', field: 'number', type: 'numeric'},
//   //     { title: 'Transport Fee Status', field: 'transport fee'},
//   //     { title: 'Tution Fee Status', field: 'education fee'}
//   //   ],
//   //   data: [
//   //     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//   //     {
//   //       name: 'Zerya Betül',
//   //       surname: 'Baran',
//   //       birthYear: 2017,
//   //       birthCity: 34,
//   //     },
//   //   ],
//   // });
  
 
// render(){
//   const {studentData, columns, data} = this.state;
//   return (
//     <MaterialTable

//       title="Student Record"
//       columns={columns}
//       data= {studentData.map(user => {
//         const {id,name} = user;
//         return [{'id':id, 'name': name}];  
//       })}



//       editable={{
//         // onRowAdd: newData =>
//         //   new Promise(resolve => {
//         //     setTimeout(() => {
//         //       resolve();
//         //       const data = [...state.data];
//         //       data.push(newData);
//         //       setState({ ...state, data });
//         //     }, 600);
//         //   }),
//         onRowUpdate: (newData, oldData) =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               const data = [...this.state.data];
//               data[data.indexOf(oldData)] = newData;
//               this.setState({ ...this.state, data });
//             }, 600);
//           }),
//         onRowDelete: oldData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               const data = [...this.state.data];
//               data.splice(data.indexOf(oldData), 1);
//               this.setState({ ...this.state, data });
//             }, 600);
//           }),
//       }}
//     />
//   );
// }
// }

// export default MaterialTableDemo;
