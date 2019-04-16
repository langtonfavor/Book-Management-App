import React from "react";
import { connect } from "react-redux";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";
import PropTypes from "prop-types";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

class DashboardPage extends Component {



  render() {
    return(
      <div>
        {!isConfirmed && <ConfirmEmailMessage />}
      </div>
    );
  }
}

DashboardPage.prototypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  }
}
export default connect(mapStateToProps)(DashboardPage);