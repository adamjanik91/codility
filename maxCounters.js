// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var state = [];
    for (var i = 0; i < N; i++) {
        state.push(0);
    }
    for (var j = 0; j < A.length; j++) {
        var x = A[j];
        var counterIndex = x - 1;
        if (x >= 1 && x <= N) {
            state[counterIndex]++;
        }
        if (x == (N + 1)) {
            var sortedAsc = state.sort();
            var max = sortedAsc[sortedAsc.length - 1];
            for (var z = 0; z < state.length; z++) {
                state[z] = max;
            }
        }
    }
    return state;
}