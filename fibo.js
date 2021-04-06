function fibonacci(num){
    if(num == 0){
        return[1];
    }
    if(num ==1){
        return [1,1];
    }
    var fibo = fibonacci(num - 1);
    var newFibo = fibo[num-1] + fibo[num-2];
    fibo.push(newFibo);
    return fibo;
}
var result = fibonacci(10);
console.log(result);