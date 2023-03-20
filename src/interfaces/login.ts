export interface login {
    id: number,
    username: string,
    password: string,
    token: null
}

export interface Profile {
    id: number,
    username: string,
    password: string,
    name: string,
    document: string,
    celphone: number,
    addrees: string,
    country: string,
    city: string
}
