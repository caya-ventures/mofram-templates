import React from 'react';
import { Header, Footer } from './components/layout';
import { Home } from './components/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/global';
import styled from "styled-components";
import AppContext from './context/AppContext';
import { useAuthClient } from './hooks/AuthClient';

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const App = () => {

    const authClient = useAuthClient();

    return (
        <AppContext.Provider
            value={{
                ...authClient,
            }}
        >
            <BrowserRouter>
                <Header/>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </MainLayout>
                <Footer/>
                <GlobalStyles/>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default React.memo(App);