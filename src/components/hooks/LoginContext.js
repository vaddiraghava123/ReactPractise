import React, {useContext} from 'react';
import { AppContext } from './UseContextImplement';

function LoginContext() {
  const {setUserName} = useContext(AppContext);
  return (
    <div>LoginContext

        <input onChange={ (event) => {
           setUserName(event.target.value);
        }}
        />
    </div>
  )
}

export default LoginContext