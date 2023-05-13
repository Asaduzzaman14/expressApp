import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { Schema, model } from 'mongoose'

const app: Application = express()

app.use(cors()) // using cors

app.use(express.json())
app.use(express.urlencoded({ extended: true }))




/**
 * Step1: Interface
 * Step2: Schema
 * Step3: Model
 * Step4: Database Query
*/

app.get('/', (req: Request, res: Response, next: NextFunction) => {


    // Step1: Create Iterface
    interface IUser {
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

    // Creating Schema using interface
    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            require: true,
            unique: true,
        },
        role: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        name: {
            firstName: {
                type: String,
                required: true
            },
            middleName: {
                type: String,
            },
            lastName: {
                type: String,
                required: true
            }
        },
        dateOfBirth: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ["male", "female"],
        },
        email: {
            type: String,
        },
        contactNo: {
            type: String,
            required: true
        },
        emergencyContactNo: {
            type: String,
            required: true
        },
        presentAddres: {
            type: String,
            required: true
        },
        permanentAddress: {
            type: String,
            required: true
        }

    });

    // 3. Create a Model.
    const User = model<IUser>('User', userSchema);

    const creaToUserToDb = async () => {

        const user = new User({
            id: "1111002",
            role: "student",
            password: "mypassword",
            name: {
                firstName: "Mr",
                lastName: "Hanks",
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

    creaToUserToDb()


})

export default app;

