for( var i = 0; i < 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBizz");
    }else if( i % 3 == 0){
        console.log("Fiz");
    }else if( i % 5 == 0){
        console.log("Biz");
    }else{
        console.log(i);
    }
}