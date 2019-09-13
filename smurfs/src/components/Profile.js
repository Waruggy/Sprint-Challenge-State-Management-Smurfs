import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
        <div>
            <div>Name: {this.props.name}</div>
            <div>Age: {this.props.age}</div>
            <div>Height: {this.props.height}</div>
        </div>
    );
  }
}

export default Profile;
