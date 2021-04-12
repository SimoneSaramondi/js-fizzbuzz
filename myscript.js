//Ciclo di tutti i numeri da 1 a 100
for( var i = 1; i < 100; i++){
    //Se divisibile sia per 3 che per 5
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBizz");
    //Se divisibile solo per 3
    }else if( i % 3 == 0){
        console.log("Fizz");
    //Se divisibile solo per 5
    }else if( i % 5 == 0){
        console.log("Buzz");
    //Se non divisibile ne per 3 ne per 5
    }else{
        console.log(i);
    }
}