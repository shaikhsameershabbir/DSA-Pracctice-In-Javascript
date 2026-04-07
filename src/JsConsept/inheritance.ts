
// Inheritance is a fundamental concept in object-oriented programming (OOP).
// It allows one class (the child or subclass) to inherit properties and methods from another class (the parent or superclass).
// This promotes code reuse, as the child class can use the parent's functionality and add its own.
// Think of it like a family tree: the child inherits traits from the parent but can have additional unique traits.

// Defining the parent class (also called base class or superclass) named 'insUser'.
// This class represents a basic user with just a username.
// Parent classes provide common functionality that child classes can build upon.
class insUser {
    // Property: stores the username as a string.
    username: string;

    // Constructor: initializes the username when creating an instance of insUser.
    // Every class can have a constructor to set up initial values.
    constructor(username: string) {
        this.username = username;  // Assign the passed username to the property
    }

    // Method: a function that belongs to the class.
    // This method displays the username to the console.
    // Child classes will inherit this method and can use it.
    displayUsername() {
        console.log(this.username);  // Prints the username
    }
}

// Now, defining the child class (also called subclass or derived class) named 'adminUser'.
// The 'extends' keyword indicates that adminUser inherits from insUser.
// This means adminUser gets all properties and methods from insUser, plus its own additions.
// Child classes can override inherited methods or add new ones.
class adminUser extends insUser {
    // Additional properties specific to adminUser.
    // These are not in the parent class, so only adminUser instances will have them.
    email: string;     // Stores the admin's email
    password: string;  // Stores the admin's password

    // Constructor for adminUser.
    // It takes parameters for username (inherited), plus email and password (new).
    // We must call the parent's constructor using 'super()' before setting our own properties.
    // 'super()' calls the parent class's constructor with the necessary arguments.
    constructor(username: string, email: string, password: string) {
        super(username);  // Call insUser's constructor to set username
        this.email = email;        // Set the email property
        this.password = password;  // Set the password property
    }

    // Additional method specific to adminUser.
    // This method is not in the parent class, so it's unique to adminUser.
    // It displays a message about admin privileges.
    displayAdminPrivileges() {
        console.log(`${this.username} has admin privileges.`);  // Uses the inherited username
    }
}

// Outside the classes, we create an instance of the child class (adminUser).
// Even though adminUser extends insUser, we use 'new adminUser()' to create it.
// The constructor will call the parent's constructor via super().
const admin = new adminUser("adminUser", "admin@example.com", "admin123");

// Now we can call methods on the admin instance.
// This calls the inherited method from insUser.
admin.displayUsername();  // Outputs: adminUser

// This calls the method specific to adminUser.
admin.displayAdminPrivileges();  // Outputs: adminUser has admin privileges.

// Inheritance allows us to create specialized versions of classes.
// For example, we could have other child classes like 'regularUser' or 'moderatorUser' extending insUser.
// Each could add their own properties and methods while sharing the common username functionality.