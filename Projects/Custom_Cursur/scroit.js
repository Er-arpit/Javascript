let main = document.querySelector(".main");
let crsr = document.querySelector(".cursur");

main.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px"
})