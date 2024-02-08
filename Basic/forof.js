let arr = [1,2,3,4,5,6,7,8,9];

for (const num of arr) {
    // console.log(num);
}

let mymap = new Map();
mymap.set('IND' , 'India')
mymap.set('FR' , 'Franch')
mymap.set('Pak' , 'Pakistan')

// console.log(mymap);

for (const [key,value] of mymap) {
    // console.log(key,":=>", value);
}

let myobj = {
    Company: "Google",
    Id: "5544",
    domain: "Networking"
}

for (const [key,value] of myobj   ) {
    // console.log(key,":=>", value);
}

for (const key in myobj) {
 
        console.log(key);
}