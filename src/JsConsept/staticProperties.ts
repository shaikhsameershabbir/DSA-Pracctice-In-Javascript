class statUser {
    username: string;

    constructor(username: string) {
        this.username = username;
    }

    logMe() {
        console.log(this.username);
    }
}