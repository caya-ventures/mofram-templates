import { useEffect, useState } from 'react';
import { StoicIdentity } from 'ic-stoic-identity';

export const useAuthClient = () => {
    const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false);
    const [ username, setUsername ] = useState('');

    const login = async () => {
        try {
            StoicIdentity.load().then(async identity => {
                if (!identity) {
                    identity = await StoicIdentity.connect();
                }

                setIsAuthenticated(true);
                setUsername(identity.getPrincipal().toText());

            })
        } catch (e) {
            logout();
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUsername('');
        StoicIdentity?.disconnect();
    };

    const verifyConnection = async () => {
        StoicIdentity.load().then(async identity => {
            if (identity) {
                setIsAuthenticated(true);
                setUsername(identity.getPrincipal().toText());
            }
        })
    };

    useEffect(() => {
        verifyConnection();
    }, []);

    return {
        login,
        logout,
        isAuthenticated,
        username,
    };
};
