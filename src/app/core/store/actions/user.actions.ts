export class Login
{
    static readonly type = '[Authentication] Get User';
    constructor(public data: FormData){}
}