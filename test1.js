var myString = "Friday";
//myString.length 
//myString.replace(/\s/, "").length
function strLength(value) {
    var myString = value.length;
    return myString;
}
function strLength_noSpaces(value) {
    var myString = value.replace(/\s/, "").length;
    return myString;
}
console.log(strLength("Test 1"));
console.log(strLength_noSpaces("Test 1"));
function both_methods(value, spaces) {
    if (spaces) {
        return value.length;
    }
    else {
        return value.replace(/\s/, "").length;
    }
}
console.log(both_methods("test 1", true));
