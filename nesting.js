// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    //properly (return 1) if:
    //S is empty;
    //S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
    //S has the form "VW" where V and W are properly nested strings.
    //return 0 if not properly nested
    if (S.length == 0 || S.trim() == "")
        return 1;
    var nestingCharArr = ["(", ")", "{", "}", "[", "]"];
    hasNestingChars = false;
    for (var i = 0; i < S.length; i++) {
        if (nestingCharArr.indexOf(S[i]) != -1) {
            hasNestingChars = true;
            break;
        }
    }
    if (hasNestingChars == false)
        return 1;

    var nestingCharArrStart = ["(", "{", "["];
    var nestingCharArrEnd = [")", "}", "]"];
    var nesting = {
        '0': { startIndexArr: [], endIndexArr: [] },
        '1': { startIndexArr: [], endIndexArr: [] },
        '2': { startIndexArr: [], endIndexArr: [] }
    };
    for (i = 0; i < S.length; i++) {
        if (nestingCharArr.indexOf(S[i]) != -1) {
            var nestingStartIndex = nestingCharArrStart.indexOf(S[i]);
            var nestingEndIndex = nestingCharArrEnd.indexOf(S[i]);
            var nestingIndex;
            if (nestingStartIndex != -1) {
                nestingIndex = nestingStartIndex;
                nesting[nestingIndex]['startIndexArr'].push(i);
            } else if (nestingCharArrEnd.indexOf(S[i]) != -1) {
                nestingIndex = nestingEndIndex;
                nesting[nestingIndex]['endIndexArr'].push(i);
            }
        }
    }
    var startEndEqual = true;
    for (key in nesting) {
        if (nesting[key]['startIndexArr'].length != nesting[key]['endIndexArr'].length)
            startEndEqual = false;
    }
    if (startEndEqual) {
        var indexToClose = [];
        for (i = 0; i < S.length; i++) {
            if (nestingCharArrEnd.indexOf(S[i]) != -1) {
                if (indexToClose.length == 0)
                    return 0;
                var closingIndexType = nestingCharArrEnd.indexOf(S[i]);
                if (nestingCharArrStart.indexOf(S[indexToClose.length - 1]) == closingIndexType) {
                    indexToClose.pop();
                }
            }
            if (indexToClose[indexToClose.length - 1])
                var startIndex = nestingCharArrStart.indexOf(S[i]);
            if (startIndex != -1)
                indexToClose.push(i);
        }
        if (indexToClose.length == 0)
            return 1;
    }

    return 0;
}