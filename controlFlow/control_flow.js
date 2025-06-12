let userRole = "admin"
let accesslevel;
if (userRole === "admin") {
    accesslevel = "Full access granted";
} else if (userRole === "manager") {
    acceslevel = "Limited acces granted";
} else {
    acceslevel = "No access granted"
}
console.log("Access level", accesslevel);


let isLoggedIn = true;
let userMessage;
if (islLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin";
    } else {
        userMessage = "Welcome, User";
    }
} else {
    usermessage = "Please log in to access the system.";
}
console.log("User Message:", usermessage);

let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

