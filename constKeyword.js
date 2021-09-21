/*********************************************const keyword example ************************/

// we can not be updated and we can not be re-declared the variable

const myVar = "Hello";
console.log('myVar: ', myVar);

//myVar = "Hello World"
//console.log('course: ', myVar);


// function level scope

function testScope() {
    const dd = 10;
    console.log('dd: ', dd);

}
testScope();
// console.log('testScope: ', dd)  // throws an exception



// block level scope

if (2 == 2) {
    const tt = 30;
    console.log('tt: ', tt);
}
// console.log('tt: ', tt);  // throws  an exception