// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    // A[0] = 4    B[0] = 0
    // A[1] = 3    B[1] = 1
    // A[2] = 2    B[2] = 0
    // A[3] = 1    B[3] = 0
    // A[4] = 5    B[4] = 0
    // If P and Q are two fish and P < Q, then fish P is initially upstream of fish Q. 
    // Initially, each fish has a unique position.
    var upstreamFish = [];
    for (var i = 0; i < B.length; i++)
        if (B[i] == 1) upstreamFish.push(i);

    var aliveFishArray = A;
    if (upstreamFish.length == A.length || upstreamFish.length == 0)
        return A.length;
    for (var i = 0; upstreamFish.length; i++) {
        var isAlive = aliveFishArray.indexOf(upstreamFish[i]) != -1;
        for (j = upstreamFish[i];
            (j < A.length) && isAlive; j++) {
            var targetFish = A[j + 1];
            var isTargetAlive = aliveFishArray.indexOf(targetFish) != -1;
            if (B[j + 1] != B[j] && isTargetAlive) {
                var isTargetDead = A[j] > A[j + 1];
                if (isTargetDead) {
                    aliveFishArray.splice((j + 1), 1);
                    j--;
                } else {
                    aliveFishArray.splice(j, 1);
                    isAlive = false;
                    upstreamFish.splice(i, 1);
                    j--;
                }
            }
        }
    }
    return aliveFishArray.length;
}