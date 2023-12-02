let user = {
    name: "Prince",
    Salary : 45784,
    collage : "TMU",
    Welcome :function () {
        console.log(`Welcome to my Object ${this.name} and your salary is ${this.Salary}.`);
    },
}
// user.Welcome();

function AddNumber(num1,num2) {
    console.log(this);               // this keyword is runing in simple function.
    console.log(num1+num2);
};

// AddNumber(45,74);

let Addnum = (num1,num2) => {
    console.log(this);              // This function never run in arrow function
}

// console.log(Addnum());


let Add = (num1,num2) => (num1+num2)         // implicite retune type
console.log(Add(74,45));