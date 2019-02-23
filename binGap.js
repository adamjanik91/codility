// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    if (N <= 2)
        return 0;
    else {
        var result = '';
        var initIndexes = [];
        var binaryIndexes = getBinaryIndexes(N, initIndexes);
        var initStr = '';

        var binaryStr = getBinaryStrFromIndexes(binaryIndexes, initStr);
        result = binaryStr;
        
        var maxGapLength = getMaxGapLength(result);

        return maxGapLength;
    }
};
function getBinaryIndexes(N, indexes) {
    var result = 1;
    var counter = 0;
    while (result < N) {
        result *= 2;
        counter++;
    }
    
    if (result == N) {
        indexes.push(counter);
        return indexes;
    }

    else {
        counter--;
        indexes.push(counter);
        var diff = N - Math.pow(2, counter);
        return getBinaryIndexes(diff, indexes);
    }
};
function getBinaryStrFromIndexes(binaryIndexes, result) {
    var length = binaryIndexes.length;
    if (length == 1 && result.length == 0)
        result = getBinaryStrForNumber(binaryIndexes[0]);
    else {
        for (var i = 0; i < binaryIndexes.length; i++) {
            var previous = result;
            var current = getBinaryStrForNumber(binaryIndexes[i]);
            binaryIndexes.splice(i, 1);
            i--;
            if (previous == '') {
                result = current;
            } else {
                result = combineBinaryItems(current, previous);
            }
            return getBinaryStrFromIndexes(binaryIndexes, result);
        }
    }

    function combineBinaryItems(current, previous) {
        var currentLength = current.length;
        var combinedItemsResult = previous.slice(0, previous.length - currentLength) + current;
        return combinedItemsResult;
    };
    
    return result;
};
function getBinaryStrForNumber(number) {
    var result = '1';

    for (var i = 0; i < number; i++) {
        result += '0';
    }

    return result;
};

function getMaxGapLength(binaryStr) {
    var maxGapLength = 0;
    var currentGapLength = 0;
    var gapCounting = false;
    for (var i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] == '1') {
            if (gapCounting == false) {
                gapCounting = true;
            } else {
                if (maxGapLength <= currentGapLength)
                    maxGapLength = currentGapLength;
                currentGapLength = 0;
                if(binaryStr[i+1] != 0)
                    gapCounting = false;
            }
        }
        else if (gapCounting == true) {
            currentGapLength++;
        }
    }
    return maxGapLength;
};