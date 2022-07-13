import React from 'react';
import styled from "styled-components";
import { useAuthClient } from '../../../hooks/AuthClient';
import { shortenedText } from '../../../helpers/text';
import { getPLug } from '../../../resolvers/plug';

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
        if (!getPLug()) {
            alert('Plug Wallet is not detected');
        }

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
                    <ICimg src="assets/plugwallet.png" alt="Plug Wallet" className="right-ico"/>
                </button>&nbsp;
                <button className="btn btn-primary" onClick={onActionClick}>
                    {shortenedText(username)}
                </button>
            </>
            :
            <button onClick={onLoginAction} className="btn btn-primary">
                <ICimg src="assets/plugwallet.png" alt="Plug Wallet"/>
                Connect with Plug
            </button>
    );
};

export default LoginLink;
