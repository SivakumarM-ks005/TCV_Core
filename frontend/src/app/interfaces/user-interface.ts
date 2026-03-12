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
export interface UserInterface {
  userId: number;
  userName: string;
  password: string;
  email: string;
  contactNumber: string;
  firstName: string;
  lastName: string;
  dateRegistered: string;
  lastLogin: string;
  role: string;
  status: string;
}