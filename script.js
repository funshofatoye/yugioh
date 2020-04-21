function wordChange(intNum) {

    let arr = [];

    for (let i = 1; i <= intNum; i++) {
       
        // arr.push(i);
        if(i%2 === 0){
            arr.push("yu");
        } else if(i%3 === 0){
            arr.push("gi");
        } else if(i%5 === 0){
            arr.push("oh");
        } else {
            arr.push(i);
        }
        // console.log(i);
    }
    console.log(arr);
    return arr;
    // return arr
}

wordChange(100);