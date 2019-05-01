// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //return 0 or 1
    //get 3d vector combinations
    //for each check if triangle
    //negative integer possible, but not negative values trianlge
    //empty array possible
    if(A.length != 0) {
        var combinations = getCombinations(A);
        return containTriangle(combinations);
    }
    
    return 0;
}