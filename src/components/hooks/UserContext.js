import React, { useContext } from 'react';
import { AppContext } from './UseContextImplement';

function UserContext() {

  const {userName} = useContext(AppContext);

  return (
    <div>
        <h5> User : {userName} </h5></div>
  )
}

export default UserContext