import { UserPointer } from "./user-pointer";


export interface Tutor {
    firstName: string;
    lastName: string;
    age: number;
    subjects: string[];
    educationLevel: string;
    imageUrl: string;
    about: string;
    userId:  UserPointer,
    objectId: string;
    price: number;
}