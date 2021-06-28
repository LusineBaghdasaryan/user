export interface IUserLoginData {
    email: String,
    password: String
}


export interface IUserRegisterData {
    name: String,
    surname: String,
    email: String,
    password: String
}


export interface IResponse {
    errors?: Array<any>,
    message: String,
    hasError: boolean
}
