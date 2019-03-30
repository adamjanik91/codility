// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //(P, Q)
    //0 ≤ P < Q < N
    //N is an integer within the range [1..100,000]
    //each element of array A is an integer that can have one of the following values: 0, 1
    //-1 if number of pairs of passing cars exceeds 1 000 000 000
    var pairs = [];

    var first = A[0];
    var secIndex = (first == 1)? A.indexOf(0) : A.indexOf(1); 

    var searchingTarget;
    if(first == 1) {
        searchingTarget = 0;
    }
    else if(first == 0) {
        searchingTarget = 1;
    }

    var targetsArray = [];
    var srcArray = [0];
    for(var i = 1; i < A.length; i++) {
        if(A[i] == searchingTarget) {
            targetsArray.push(i);
        }
        else {
            srcArray.push(i);
        }
    }

    for(var j = 0; j < srcArray.length; j++) {
        var currentIndex = srcArray[j];
        for(k = (currentIndex + 1); k < A.length; k++) {
            if(pairs.length == 1000000000)
                return -1;
            if(A[k] == searchingTarget)
                pairs.push([currentIndex, k]);
        }
    }

    return pairs.length;
}