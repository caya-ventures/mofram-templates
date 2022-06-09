import * as React from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { emptyProfile, ProfileUpdate } from '../utils';

export const AppContext = React.createContext<{
    authClient?: AuthClient;
    setAuthClient?: React.Dispatch<AuthClient>;
    isAuthenticated?: boolean;
    setIsAuthenticated?: React.Dispatch<React.SetStateAction<boolean>>;
    login: () => void;
    logout: () => void;
    profile?: ProfileUpdate;
    updateProfile?: React.Dispatch<ProfileUpdate>;
    hasLoggedIn: boolean;
}>({
    login: () => {
    },
    logout: () => {
    },
    profile: emptyProfile,
    hasLoggedIn: false,
});

export default AppContext;
