import React from "react"
import {connect} from "react-redux"

const mapStateToProps = state => {
  return { error: state.error };
}

const ConnectedError = ({error}) => (
  <div>
    {error}
  </div>
);

const Error = connect(mapStateToProps)(ConnectedError);

export default Error;
