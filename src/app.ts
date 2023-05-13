import express, { Application, Request, Response } from 'express'
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

// Step1: Create Iterface
interface IUser {
    id: string;
    role: "student"
    password: string;
    name: {
        firstName: string;
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
        middlename: {
            type: String,
            required: true

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


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;

