console.log("Hello this Tutorial related Object in Javascript");

let mySym = Symbol("Key1");

let User = {
    name: "Prince",
    "fullname": "Prince Sharma",
    age : "21",
    location: "Haridwar",
    Orgnization: "Stefanini",
    email : "prince@stefanini.com",
    isLoggedIn : false,
    [mySym] : "Mykey1",
}

console.log(User["fullname"]);
console.log(User["email"]);
User.email = "arpit70@gmail.com";
console.log(User["email"]);
console.log(User);
// Object.freeze(User);                    // after freeze you didn't change in object
User.name = "Arpit";                // do not change
console.log(User["name"]);


// CREATE A FUNCTION FOR OBJECT

User.greeting = function(){
    console.log("Hello User Good Day!");
}
console.log(User.greeting());

User.greetingtwo = function(){
    console.log(`Hello ${User.name}, \n Good day!\n This is regarding your network ticket.`);
}
console.log(User.greetingtwo());