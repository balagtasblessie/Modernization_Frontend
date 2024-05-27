export class User {
   constructor (
    public id?: Int16Array,
    public username?: string,
    public password?: string,
    public fullName?: string,
   ) {}
}

export class UserLogin {
    constructor (
     public userName?: string,
     public password?: string,
    ) {}
 
 
 }
 