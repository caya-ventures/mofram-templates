import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context';
import { useNavigate, Link } from 'react-router-dom';
import LoginLink from '../layout/navigation/LoginLink';
import { baseTheme } from '../../styles/theme';

const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;

  .btn-back {
    color: ${baseTheme.colors.textAction};
  }
`;

const Login = () => {
    const { isAuthenticated } = useContext(AppContext);
    const history = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            history('/');
        }
    }, [ isAuthenticated ]);

    return (
        <LoginPage>
            <p>Please login to continue</p>
            <p>
                <LoginLink/>
            </p>
            <p>
                or <Link to={'/'} className={'btn btn-transparent btn-back'}> Go Back</Link>
            </p>
        </LoginPage>
    );
};

export default Login;
