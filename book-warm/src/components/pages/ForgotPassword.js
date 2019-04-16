import React from "react";
import { Message } from "semantic-ui-react";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";

class ForgotPassword extends React.Component {
  state = {
    success:false
  }

  submit = data => this.props.resetPasswordRequest(data).then(() =>
  this.setState({success: true}));

  render(){
    return(
      <div>
      {this.state.success ? (<Message>Email has been sent</Message>
        ) : (
    <ForgotPasswordForm submit={this.submit} />
        )};
      </div>
    );
  }
}

ForgotPassword.prototypes = {
  resetPasswordrequest: PropTypes.func.isRequired
};

export default ForgotPassword;