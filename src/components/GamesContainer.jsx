import React from 'react';
import './GamesContainer.css';
import Rps from './Games/Rps';
import { useMoralis } from "react-moralis"

function GamesContainer() {

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  return (
    <>
    {isAuthenticated ? ( <div className="Games-container">
      <Rps />
    </div> ) : ( <div className="Games-container"> Itai you KING </div> )}
    </>
     );
}

export default GamesContainer;
