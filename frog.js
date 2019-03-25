function solution(X, A) {
    if(A == null || A.length == 0)
        return -1;
    // write your code in JavaScript (Node.js 8.9.4)
    var targetLeavesPositions = [];
    for (var i = 1; i <= X; i++) {
        targetLeavesPositions.push(i);
    }
    
    var sec = 0;
    var matches = [];
    for(var i = 0; i < A.length; i++) {
        if(targetLeavesPositions.indexOf(A[i]) != -1 && matches.indexOf(A[i]) == -1)
            matches.push(A[i]);
        if(matches.length == targetLeavesPositions.length)
            return sec;
        sec++;
    }
    
    return -1;
}
