let btn = document.querySelector(".btn");
let check = 0;


btn.addEventListener('click', function () {
    if (check == 0) {
        btn.style.background = "red";
        btn.innerHTML = "Remove";

        check = 1;
    }
    else{
        btn.style.background = "cornflowerblue";
        btn.innerHTML = "Add Friend";

        check = 0
    }
})