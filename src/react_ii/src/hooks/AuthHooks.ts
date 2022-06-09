import { useEffect, useState } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { clear } from 'local-storage';

type UseAuthClientProps = {};

export function useAuthClient(props?: UseAuthClientProps) {
    const [ authClient, setAuthClient ] = useState<AuthClient>();
    const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false);
    const [ hasLoggedIn, setHasLoggedIn ] = useState(false);


    const login = () => {
        authClient?.login({
            identityProvider: process.env.II_URL,
            onSuccess: () => {
                setIsAuthenticated(true);
                setTimeout(() => {
                    setHasLoggedIn(true);
                }, 100);
            },
        });
    };

    const logout = () => {
        clear();
        setIsAuthenticated(false);
    };


    useEffect(() => {
        AuthClient.create().then(async (client) => {
            const isAuthenticated = await client.isAuthenticated();
            setAuthClient(client);
            setIsAuthenticated(isAuthenticated);
        });
    }, []);

    return {
        authClient,
        setAuthClient,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        hasLoggedIn,
    };
}
