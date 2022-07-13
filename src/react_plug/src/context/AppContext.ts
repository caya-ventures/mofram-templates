import * as React from 'react';

export const AppContext = React.createContext<{
    login: () => void;
    logout: () => void;
    isAuthenticated: boolean;
    username: string;
}>({
    login: () => {
    },
    logout: () => {
    },
    isAuthenticated: false,
    username: ''
});

export default AppContext;
