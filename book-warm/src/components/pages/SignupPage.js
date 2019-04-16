import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignupForm from '../forms/SignupForm';
import { signup } from '../../actions/users'

class SignupPage extends Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));
  render() {
    return <div>/Users/langtonmudyiwa/Desktop/Book-Management-App/book-warm/src/components/forms/SignupForm.js
      <SignupForm submit={this.submit} />

    </div>;
  }
}
SignupPage.prototypes= {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, {signup })(SignupPage);