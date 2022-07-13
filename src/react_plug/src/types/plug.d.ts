export interface IPlugWallet {
    plug: {
        requestConnect: () => {};
        principalId?: string;
    };
}

declare global {
    interface Window {
        ic: IPlugWallet;
    }
}
