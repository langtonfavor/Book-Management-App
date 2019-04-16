import React from "react";
import { Message, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { confirm } from "../../actions/auth";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";

class ConfirmationPage extends React.Component {
  state = {
    loading: true,
    success: false
  };
  componentDidMount() {
    this.props.confirm(this.props.match.params.token)
      .then(() => this.setState({loading: false, success: true}))
      .catch(() => this.setState(({loading: false, success: false})))
  }

  render(){
    const { loading, success } = this.state;

    return (
      <div>
        {loading && <Message icon>
          <Icon name="circle scotched" loading />
          <Message.Header>validating email</Message.Header>
        </Message>}

        {!loading && success && <Message success icon>
        <Icon name="checkmark" />
        <Message.Content>
          <Message.Header>Thank you, you have been confirmed.</Message.Header>
          <Link to="/dashboard">got to your dashoard</Link>
        </Message.Content>
        </Message>}

        {!loading && isSuccess && <Message negative icon>
          <Messsage.Content>
            <Message.Header>
              Ooops. invalid token
            </Message.Header>
          </Messsage.Content>
        </Message>}

      </div>
    );
  }
}
ConfirmationPage.proptypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params:PropTypes.shape({
      token: string
    }).isRequired
  }).isRequired
}

export default connect(null, { confirm })(ConfirmationPage);