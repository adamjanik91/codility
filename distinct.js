// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var distinctA = [];
    for (var i = 0; i < A.length; i++) {
        if (distinctA.indexOf(A[i]) == -1)
            distinctA.push(A[i]);
    }
    return distinctA.length;
}