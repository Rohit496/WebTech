/****************************** Var Keyword **************************************** */

// We can update and re-assign the value in this keyword.


// assign the value to this variable
var course = "LWC";
console.log('course: ', course);

// updating the value in this variable
course = "Lightning Web Component";
console.log('course: ', course);

// re-assign the value in this variable
var course = "Lightning Web Component New";
console.log('course: ', course);


// Scope of the variable

// Global scope and function level scope of the variable
// Its never support the block level scope

// global level scope of the variable
console.log('course: ', window.course);

// function level scope of the variable
function getCourseScope() {

    var courseScope = "New Course";
    console.log('courseScope: ', courseScope);

}
getCourseScope();
//console.log('courseScope: ', courseScope);

// block level scope of the variable
if (2 == 2) {
    var x = 10;

}
console.log('x: ', x); // because of block level scope having window property by default