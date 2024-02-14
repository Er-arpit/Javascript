let arr = [
    {dp: "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    story : "https://images.unsplash.com/photo-1517805686688-47dd930554b2?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    story : "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    story : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1597687154732-9b205f4f5c1c?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    story : "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

let storiyan = document.querySelector("#storiyan");

let clutter = "";
arr.forEach(function(elem, idx) {
    clutter += `<div class="story">
    <img id = "${idx}"src="${elem.dp}" alt="">
</div>`
});

storiyan.innerHTML=clutter

storiyan.addEventListener("click", function(dets) {
    document.querySelector('#full-screen').style.display = "block";
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector('#full-screen').style.display = "none"
    }, 3000)
})

