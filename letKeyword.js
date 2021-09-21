/******************************* let keyword ****************************************/

// we can update but we can not re-declare the keyword
// It does not have global level scope
// we can access the keyword on function level and  block level

let course = "Lwc"
console.log('course: ', course);


// updated the keyword value
course = "New Course"
console.log('course: ', course);

// re-declared the variable

// let course = "ABC";   // throws an exception


// functions level scope

function back() {
    let c1 = 10;
    console.log('back: ', c1);
}
back();
// console.log('back: ', c1); // throws an exception


// block level scope
if (2 == 2) {
    let c2 = 20;
    console.log('c2: ', c2);
}
// console.log('c2: ', c2); // throws an exception