/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var arr = [];
    var count = 0;
    for (var i=0; i<preferences.length; i++) {
        var first  = preferences[i]-1;
        var second = preferences[first]-1;
        var third  = preferences[second]-1;
        if (third == i && arr.indexOf(third) == -1 && first != second) {
            arr.push.apply(arr, [first, second, third]);
            count++;
        }
    }

    return count;
};
