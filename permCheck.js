function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var sortedA = A.sort();
    var max = sortedA[A.length - 1];

    var results = [];
    for (var i = 0; i < sortedA.length - 1; i++) {
        if (sortedA[i + 1] == sortedA[i]) {
            results.push(sortedA[i]);
        }
    }
    if(results.length != 0)
        return 0;
    
    for(var i = 1; i < max; i++) {
        if(sortedA.indexOf(i) == -1)
            return 0;
    }

    return 1;
}  
