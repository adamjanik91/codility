// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4);
    if(A.length == 0 || A.length == 1 && A[0] == 2)
        return 1;
    var sorted = A.sort();
    
    if(sorted[0] - 1 > 0)
        return sorted[0] - 1;
        
    i = 0;
    while(i < sorted.length) {
        if(i != sorted.length - 1 && sorted[i+1] != sorted[i] + 1)
            return sorted[i] + 1;
        i++;
    }
    if(sorted[sorted.length - 1] != 100000) 
        return (sorted[sorted.length - 1] + 1);
        
    return 1;    
}