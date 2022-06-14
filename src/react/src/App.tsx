import React from 'react';
import { Header, Footer } from './components/layout';
import { Home } from './components/pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/global';
import styled from "styled-components";

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const App = () => {

    return (
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
    );
};

export default React.memo(App);