// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var currentItem = A[0];
    var restSum = getSum(A, 1);
    var resultMin = Math.abs(currentItem - restSum);

    for (var i = 1; i < A.length; i++) {
        var currentItem = A[i];
        var restSum = getSum(A, (i + 1));
        var result = Math.abs(currentItem - restSum);
        if (result < resultMin)
            resultMin = result;
    }

    function getSum(A, i) {
        var sum = 0;
        for (var j = i; j < A.length; j++) {
            sum += A[j];
        }
        return sum;
    }

    return resultMin;
}