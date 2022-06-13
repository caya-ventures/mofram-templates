import React from 'react';
import { Header, Footer } from './components/layout';
import { Home } from './components/pages';
import { useAuthClient, useProfile } from './hooks';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
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