import React from 'react';
import UserProfile from './UserProfile';

class Usuarios extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];
  
    return (
      <div className="Usuarios">
        {users.map(user => <UserProfile user={user} key={user.email} />)}
      </div>
    );
  }
}
  
export default Usuarios;