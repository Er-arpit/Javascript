// BASIC Function 

function Greeting(){
    console.log("Good Moarning!!");
}

// Function with parameters 

function AddNumber(num1, num2) {
    let result = `First number is ${num1} and secound number is ${num2} sum is: ${num1+num2}`;
    return result;
}

// Greeting();
// console.log(AddNumber(44,55));


// REST oprator  (...num)
function CalculatCardPrice(...num) {
    console.log(num);
}

// CalculatCardPrice(44,55,99);            //its return of argguments in form of Array.

let User = {
    name: "Arpit",
    bill: "4751",
    mobile: "8855221144"
}

function User_Details(AnyObject) {
    console.log(`User name is ${AnyObject.name} and his Bill is ${AnyObject.bill} with his mobile number ${AnyObject.mobile}`);
}

// User_Details(User);
User_Details({
    name : "Prince",
    bill : "845",
    mobile : "8451654164"
})