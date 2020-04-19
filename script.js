function wordChange(intNum) {

    for (let i = 1; i <= intNum; i++) {
        // console.log(i);  
        if(i%2 === 0){
            i = "yu";
            continue;
        } 
        console.log(i);
    }
}

wordChange(100);