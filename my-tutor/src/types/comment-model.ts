interface Pointer {
    __type: string;
    className: string;
    objectId: string;
}


export interface Comment {
    objectId: string;
    comment: string;
    ownerId: Pointer;
    tutorId: Pointer;
    createdAt?: string;
}