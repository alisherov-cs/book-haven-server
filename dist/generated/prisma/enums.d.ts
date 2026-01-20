export declare const Role: {
    readonly admin: "admin";
    readonly user: "user";
};
export type Role = (typeof Role)[keyof typeof Role];
