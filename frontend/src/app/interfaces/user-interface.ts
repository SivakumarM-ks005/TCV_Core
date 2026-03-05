export  interface loginData{
    userName: string,
    password: string
}

export  interface forgotPasswordData{
    userName: string,
    email:string
}

export  interface changePasswordData{
    newPassword: string,
    oldPassword:string
}