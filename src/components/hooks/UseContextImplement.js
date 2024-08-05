import React, { useState, createContext } from 'react'
import LoginContext from './LoginContext'
import UserContext from './UserContext';

export const AppContext = createContext(null);
function UseContextImplement() {
  const [userName, setUserName] = useState(" ");
  return (
    <div>UseContextImplement

      {/* <LoginContext setUserName ={setUserName} />
        <UserContext userName={userName}/> */}

      <AppContext.Provider value={{ userName, setUserName }}>
        <LoginContext /> <UserContext />
      </AppContext.Provider>
    </div>
  )
}

export default UseContextImplement