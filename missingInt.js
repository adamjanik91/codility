// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // [−1,000,000..1,000,000]
    // return Min positive int not occuring in A
    if (A.length == 0)
        return 1;
    var min = 1;
    while (true) {
        if (A.indexOf(min) == -1)
            return min;
        else {
            min++;
        }
    }
}