/* 
Write a function that returns the GCD (greatest common divisor) of 3 integers. 


//Hello Susanne, my explanations are in the coments.

/* We are always checking gcd of 2 numbers. 
If one of them zero the result is the other one. It is also exit point of the recursive calling.
We are reqursively calling the function in the return statement till one of them zero*/
function euclideanAlgorithm(a, b) {
  if (b === 0) {
    return a;
  }
  const remainder = a % b;
  return euclideanAlgorithm(b, remainder);
}

/* We give unlimitted input choice by declaring ...args as a argument. 
Than, we use reduce function it does every operation 
with the next element and when one of them zero it reduces the element of the ...args input.
when it reduce whole array to 1 element as gcd, function returns it.*/
function gcdMultipleNumbers(...args) {
  const gcd = args.reduce((memo, next) => {
    return euclideanAlgorithm(memo, next);
  });

  return gcd;
}

/* We can give unlimitted number to calculate their gcd. */
console.log(gcdMultipleNumbers(16, 24, 64));
