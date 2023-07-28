
interface UserObjectId {
    className: string;
    objectId: string;
    __type: string;
}


export interface Tutor {
    firstName: string;
    lastName: string;
    age: number;
    subjects: string[];
    educationLevel: string;
    imageUrl: string;
    about: string;
    userId:  UserObjectId,
    objectId: string;
}