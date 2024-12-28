interface Account {
    username: string;
}

class UserAccount implements Account {
    public username: string;
    private password: string;  
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    
}

const user = new UserAccount("dhanu12", "pass123");
console.log(user.username);      



