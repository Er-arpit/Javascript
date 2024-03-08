const PromOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Hello, This is first promise");
        resolve()
    }, 1000)

})

PromOne.then(function () {
    console.log("Promise consume..!!");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Hello, This is Secound promise");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Secound Promise consume..!!");
})

const PromThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Hello, This is Theird promise");
        resolve({ user: "Arpit", email: "Code@examle.com" })
    }, 1000)

})

PromThree.then(function (user) {
    console.log(user);
})

const PromFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Prince", email: "Prince@examle.com" })
        }
        else {
            reject("ERROR: something is worng here!!")
        }
    }, 1000)
})

PromFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => {
    console.log("The Promise is either resolved or rejected!!");
})

const PromFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Harry", email: "Harry@examle.com" })
        }
        else {
            reject("ERROR: something is worng Harryy!!")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await PromFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// Fetch using Async function //
// async function allUserData() {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         const Userdata = await response.json()
//         console.log(Userdata);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// allUserData()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((allData)=>{
    console.log(allData);
}).catch((error)=> {
    console.log(error);
})