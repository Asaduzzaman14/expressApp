import User from "./user.model";

export const creaToUserToDb = async () => {

    const user = new User({
        id: "1111003",
        role: "student",
        password: "mypassword",
        name: {
            firstName: "Mr",
            lastName: "test name",
        },
        dateOfBirth: '11, sep 2000',
        gender: "male",
        email: "asaduzzaman1156@gmail.com",
        contactNo: "015888",
        emergencyContactNo: "00000",
        presentAddres: "kgc",
        permanentAddress: "kgc",
    });

    await user.save();
    console.log(user);
}


