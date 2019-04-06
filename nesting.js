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
    if (hasNesting == false)
        return 1;

    var nestingCharArrStart = ["(", "{", "["];
    var nestingCharArrEnd = [")", "}", "]"];
    var nestingArr = [{ startChar: "(", endChar: ")", startIndexArr: [], EndIndexArr: [] }];
    for (i = 0; i < S.length; i++) {
        if (nestingCharArr.indexOf(S[i]) != -1) {
            if (nestingCharArrStart.indexOf(S[i]) != -1) {

            } else if (nestingCharArrEnd.indexOf(S[i]) != -1)
                nestingArr.push((nestin));
        }
    }
}