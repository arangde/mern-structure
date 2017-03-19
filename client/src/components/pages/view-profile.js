import React, { Component } from 'react';
import cookie from 'react-cookie';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/index';

class ViewProfile extends Component {
  componentWillMount() {
    const user = cookie.load('user');
    this.props.fetchUser(user._id);
  }

  render() {
    return (
      <div>
        <p>Your Email: <b>{this.props.profile.email}</b></p>
        <p>First Name: <b>{this.props.profile.firstName}</b></p>
        <p>Last Name: <b>{this.props.profile.lastName}</b></p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.user.profile,
  };
}

export default connect(mapStateToProps, { fetchUser })(ViewProfile);
