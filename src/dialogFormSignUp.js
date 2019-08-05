import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class FormDialog extends Component {
  constructor(props){
    super(props);
  this.state = {
    open:false,
    openPassword:false,
    code:'',
    newPassword:'',
  }
}
//Dialog 01 functions...start
  handleClickOpen = () => {
    this.setState({open:true});
    //code to request sending email from backend...
  }

  handleClose = () => {
    this.setState({open:false, code:''});
  }

  onChangeCode = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
  handleCancel = () => {
    this.setState({open:false, code:''});
  }
  handleNext = () => {
    //request to check input-code at backend and waiting for response
    //if response is +ve then close this dialog and open another dialog to enter new password...
    if(this.state.code === "abcd"){
      // alert("code matched");
      this.setState({open:false, code:'', openPassword:true})
    }
    else{
      this.setState({open:false, code:''});
      alert("Invalid Code");
    }

  }

  //Dialog 01 functions...end

  //Dialog 02 functions...start
  handleClickOpenPassword = () => {
    this.setState({openPassword:true});
    //code to request sending email from backend...
  }

  handleClosePassword = () => {
    this.setState({openPassword:false, newPassword:''});
  }

  onChangePassword = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
  handleCancelPassword = () => {
    this.setState({openPassword:false, newPassword:''});
  }

  handleSubmitPassword = () => {
    //code to request to update password...
    this.setState({openPassword:false, newPassword:''});
    alert("Password Updated");


  }
  //Dialog 02 functions...end

  render(){
    return (
      <div>
        <Button  color="primary" className = "" onClick={this.handleClickOpen}>
          Forget Password
          </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Enter Verification Code</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Enter code sent to your registered email.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Code"
              type="text"
              name="code"
              value = {this.state.code}
              onChange = {this.onChangeCode}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleNext} color="primary">
              Next
            </Button>
          </DialogActions>
        </Dialog>
{/* Dialog for new password */}
        <Dialog open={this.state.openPassword} onClose={this.handleClosePassword} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Reset Password</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Enter new password here.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="text"
              name="newPassword"
              value = {this.state.newPassword}
              onChange = {this.onChangePassword}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancelPassword} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmitPassword} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FormDialog;