import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../App';
import { getLogoutUser } from '../utilities/apiClient';

type HeaderProps = {
  loggedUser: User | null;
  clearUserState: (data: null) => void;
};

const LoggedInHeader = ({
  username,
  clearUserState,
}: {
  username: string;
  clearUserState: (data: null) => void;
}) => {
  return (
    <>
      <h3>Welcome {username}</h3>
      <button
        onClick={() => {
          getLogoutUser().then((data) => clearUserState(data));
        }}
      >
        Logout
      </button>
    </>
  );
};

const Header = ({ loggedUser, clearUserState }: HeaderProps) => {
  return (
    <header className='header'>
      <h1>Welcome to my Auth App</h1>
      {loggedUser ? (
        <LoggedInHeader
          username={loggedUser.username}
          clearUserState={clearUserState}
        />
      ) : null}
    </header>
  );
};

export default Header;
