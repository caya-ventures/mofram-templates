import React from 'react';
import styled from "styled-components";
import { useAuthClient } from '../../../hooks/AuthClient';
import { shortenedText } from '../../../helpers/text';

const ICimg = styled.img`
  height: 1rem;
  margin: 0 .5rem 0 0;

  &.right-ico {
    margin: 0 0 0 .5rem;
  }
`;

const LoginLink = () => {

    const { login, logout, isAuthenticated, username } = useAuthClient();

    const onLoginAction = async () => {
        await login();
    };

    const onLogoutAction = () => {
        logout();
    };

    const onActionClick = () => {
        alert(`You are connected as ${username}`);
    }

    return (
        isAuthenticated ?
            <>
                <button onClick={onLogoutAction} className="btn btn-primary">
                    Logout
                    <ICimg src="assets/stoic.png" alt="Stoic Wallet" className="right-ico"/>
                </button>&nbsp;
                <button className="btn btn-primary" onClick={onActionClick}>
                    {shortenedText(username)}
                </button>
            </>
            :
            <button onClick={onLoginAction} className="btn btn-primary">
                <ICimg src="assets/stoic.png" alt="Stoic Wallet"/>
                Connect with Stoic
            </button>
    );
};

export default LoginLink;
