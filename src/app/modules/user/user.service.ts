import { IUser } from "./user.interface";
import User from "./user.model";

export const creaToUserToDb = async (paylode: IUser): Promise<IUser> => {

    const user = new User(paylode);
    await user.save();
    // user.fullName()  // custom instons method
    return user
}

export const getUserFromDb = async (): Promise<IUser[]> => {

    const users = await User.find()
    return users;
}


export const getUserByIdFromDb = async (payode: string): Promise<IUser | null> => {

    const user = await User.findOne({ id: payode }, { name: 1, contactNo: 1 })
    return user
}

export const getAdminFromDb = async () => {

    const adminUser = await User.getAdminUsers()
    return adminUser
}

// Class -> atach -> method -> Directly call using Class
// user  = new User
// user.instance method
// User.getAdminUser()



// id: "1111005",
// role: "student",
// password: "mypassword",
// name: {
//     firstName: "Mr.",
//     lastName: "test",
// },
// dateOfBirth: '11, sep 2000',
// gender: "male",
// email: "asaduzzaman1156@gmail.com",
// contactNo: "015888",
// emergencyContactNo: "00000",
// presentAddres: "kgc",
// permanentAddress: "kgc",
