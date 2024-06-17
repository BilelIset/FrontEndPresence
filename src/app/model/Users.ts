export class Users{


    private  idUser:number|undefined;
    private login: String|undefined ;
    private  password:String|undefined;
    private  isAdmin:boolean|undefined;
    constructor(idUser?: number, login?: string, password?: string, isAdmin?: boolean) {
        this.idUser = idUser;
        this.login = login;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    getIdUser(): number | undefined {
        return this.idUser;
    }

    setIdUser(idUser: number): void {
        this.idUser = idUser;
    }

    getLogin(): String | undefined {
        return this.login;
    }

    setLogin(login: string): void {
        this.login = login;
    }

    getPassword(): String | undefined {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    getIsAdmin(): boolean | undefined {
        return this.isAdmin;
    }

    setIsAdmin(isAdmin: boolean): void {
        this.isAdmin = isAdmin;
    }
}