import { Identity } from '@dfinity/agent';
import { useEffect, useState } from 'react';
import { get, remove, set } from 'local-storage';
import { emptyProfile, ProfileUpdate } from '../utils';

type UseProfileProps = {
    identity?: Identity;
    hasLoggedIn: boolean;
};

export function useProfile(props: UseProfileProps) {
    const { identity, hasLoggedIn } = props;
    const [ profile, setProfile ] = useState<ProfileUpdate>();

    const updateProfile = (profile: ProfileUpdate | undefined) => {
        if (profile) {
            set('profile', JSON.stringify(profile));
        } else remove('profile');
        setProfile(profile);
    };

    useEffect(() => {
        const stored = JSON.parse(get('profile')) as ProfileUpdate | undefined;
        if (stored) {
            setProfile(stored);
        }
    }, []);

    useEffect(() => {
        hasLoggedIn && updateProfile({
            bio: {
                username: identity?.getPrincipal().toString() as string,
            }});
    }, [ hasLoggedIn, identity ]);

    if (!identity) return { profile: emptyProfile, updateProfile };

    return { profile, updateProfile };
}
