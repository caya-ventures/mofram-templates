import { useEffect, useState } from 'react';
import { getPLug } from '../resolvers/plug';

export const useAuthClient = () => {
    const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false);
    const [ username, setUsername ] = useState('');

    const whitelist = [
        'rno2w-sqaaa-aaaaa-aaacq-cai',
    ];

    const host = 'https://mainnet.dfinity.network';

    const login = async () => {
        try {
            await getPLug()?.requestConnect({ whitelist, host });
            setIsAuthenticated(true);
            setUsername(getPLug()?.principalId);
        } catch (e) {
            logout();
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUsername('');
        getPLug()?.disconnect();
    };

    const verifyConnection = async () => {
        const connected = await getPLug()?.isConnected();
        if (connected) {
            setIsAuthenticated(true);
            setUsername(getPLug()?.sessionManager?.sessionData?.principalId);
        }
    };

    useEffect(() => {
        verifyConnection();
    }, []);

    return {
        login,
        logout,
        isAuthenticated,
        username
    }
}
