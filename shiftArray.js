// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length == 1)
	    return A;
    
    for (var i = 0; i < K; i++) {
    	let popped = A.pop();
    	A.unshift(popped);
    }
    return A;
}