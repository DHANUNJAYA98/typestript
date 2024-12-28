var UserAccount = /** @class */ (function () {
    function UserAccount(username, password) {
        this.username = username;
        this.password = password;
    }
    return UserAccount;
}());
var user = new UserAccount("dhanu12", "pass123");
console.log(user.username);
