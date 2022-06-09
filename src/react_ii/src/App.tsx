import React from 'react';
import { Header, Footer } from './components/layout';
import { Home } from './components/pages';
import { useAuthClient, useProfile } from './hooks';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppContext } from './context';
import GlobalStyles from './styles/global';
import styled from "styled-components";

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const App = () => {
    const history = createBrowserHistory();
    const {
        authClient,
        setAuthClient,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        hasLoggedIn,
    } = useAuthClient();
    const identity = authClient?.getIdentity();
    const { profile, updateProfile } = useProfile({ identity, hasLoggedIn });

    if (!authClient) return null;

    const mainLayout = <>
        <Router>
            <Header/>
            <MainLayout>
                <Route path="/" exact component={Home}/>
            </MainLayout>
            <Footer/>
            <GlobalStyles/>
        </Router>
    </>;

    return (
        <AppContext.Provider
            value={{
                authClient,
                setAuthClient,
                isAuthenticated,
                setIsAuthenticated,
                login,
                logout,
                profile,
                updateProfile,
                hasLoggedIn,
            }}
        >
            {mainLayout}
        </AppContext.Provider>
    );
};

export default React.memo(App);