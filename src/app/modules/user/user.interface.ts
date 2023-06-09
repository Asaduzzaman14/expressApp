import { HydratedDocument, Model } from "mongoose";


// Step1: Create Iterface
export interface IUser {
    id: string;
    role: "student"
    password: string;
    name: {
        firstName: string;
        middleName?: string,
        lastName: string;
    }
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddres: string;
    permanentAddress: string;

}


// intance method
export interface IUserMethods {
    fullName(): string;
}


// statics
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}

