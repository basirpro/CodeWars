function fib(n){
  let first = 0;
  let second = 1;
  for (let i = 0; i < n; i++){
      let third = second;
      second = first + second;
      first = third;
  }
    return first;
}