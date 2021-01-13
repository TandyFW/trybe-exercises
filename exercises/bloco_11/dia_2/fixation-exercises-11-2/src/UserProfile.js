import React from 'react';

class UserProfile extends React.Component {
  render() {
    const {user} = this.props;

    return(
      <div>
        <p>{user}</p>
      </div>
    );
  }
}

export default UserProfile;
