
// A class is like a blueprint or template for creating objects.
// It defines properties (data) and methods (functions) that objects of this class will have.
// Classes help organize code by grouping related data and behavior together.
// In TypeScript, we can add type annotations to make our code safer and more predictable.

// Defining a class named 'User'.
// This class represents a user with properties like username, email, and password.
// Classes start with the 'class' keyword followed by the class name (usually capitalized).
class User {
    // Properties are the data that each instance (object) of the class will have.
    // In TypeScript, we specify the type of each property (e.g., string, number).
    // These are like variables that belong to the object.
    username: string;  // A string to store the user's name
    email: string;     // A string to store the user's email address
    password: string;  // A string to store the user's password (note: in real apps, passwords should be hashed!)

    // The constructor is a special method that runs when we create a new instance of the class.
    // It's like the "setup" function for the object.
    // The 'constructor' keyword is followed by parameters in parentheses.
    // Inside, we assign the passed values to the object's properties using 'this.'.
    // 'this' refers to the current instance of the class being created.
    constructor(username: string, email: string, password: string) {
        // Assigning the constructor parameters to the class properties.
        // This initializes the object's data when it's created.
        this.username = username;  // Set the username property
        this.password = password;  // Set the password property
        this.email = email;        // Set the email property
    }

    // Methods are functions that belong to the class.
    // They can access the object's properties using 'this'.
    // This method simulates encrypting the password (in a real app, use proper encryption libraries).
    encryptPassword() {
        // Returns a string that appends "isEncrypted" to the password.
        // This is just a simple example; real encryption is more complex.
        return `${this.password}isEncrypted`;  // Template literal for string concatenation
    }

    // Another method that changes the username to uppercase.
    // Methods can perform operations on the object's data.
    changeUsername() {
        // Uses the toLocaleUpperCase() method on the username string.
        // Returns the modified username without changing the original.
        return this.username.toLocaleUpperCase();  // Converts to uppercase
    }
}

// Now, outside the class, we create an instance (object) of the User class.
// This is called instantiation. We use the 'new' keyword followed by the class name and arguments for the constructor.
const user = new User("smasher", "smasher@gmail.com", "1234");

// We can now call methods on the user object.
// This calls the changeUsername method, which returns the username in uppercase.
console.log(user.changeUsername());  // Outputs: "SMASHER"

// You can also call other methods, like encryptPassword:
// console.log(user.encryptPassword());  // Would output: "1234isEncrypted"

// Classes allow us to create multiple users with the same structure:
// const anotherUser = new User("john", "john@example.com", "password123");
// console.log(anotherUser.changeUsername());  // Outputs: "JOHN"

