export class User {
    constructor(
        public email: string,
        public username: string,
        public isTutor: boolean,
        public objectId: string,
        public _sessionToken: string
    ) { }

    get token(){
        return this._sessionToken;
    }
}