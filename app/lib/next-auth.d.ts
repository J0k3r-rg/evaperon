import 'next-auth'

declare module 'next-auth' {
    interface Session{
        user : {
            token : string,
            username : string,
            role : string,
            authorizations : string[],
            success : string
        }
    };
}