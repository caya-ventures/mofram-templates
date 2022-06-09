export interface ProfileUpdate {
    'bio': { 'username': string };
}

export const emptyProfile: ProfileUpdate = {
    bio: {
        username: "",
    },
};
