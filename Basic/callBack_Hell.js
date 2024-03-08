function getData(dataId, nextdata) {
    setTimeout(()=>{
        console.log("data ", dataId);
        if (nextdata) {
            nextdata();
        }
    },2000);
}


// Nested callBack....  { or callback Hell}

getData(1, ()=>{
    console.log("Getting nextdata...");
    getData(2, ()=>{
        console.log("Getting nextdata...");
        getData(3, ()=>{
            console.log("Getting nextdata...");
            getData(4);
        })
    })
});
