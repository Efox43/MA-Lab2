var isTrue = true;
console.log("Value assigned is: " + isTrue);
var decimal = 10;
console.log("Decimal number is: " + decimal);
var firstName = "Eoghan";
console.log("My name is: " + firstName);
var list = [1, 2, 3];
console.log("Array values: " + list);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var col = Color[2];
console.log("The color is: " + col);
