// equality of three values:
function equal(a,b,c){
if (a==b && b==c) return true;
else return false;
}
/*
console.log(equal(1,2,3));
console.log(equal("test" , "test" , "test"));
*/

//convert minutes to seconds:
function Convert (a){
    return a*60
}

/* console.log(Convert(1));

console.log(Convert(3));
*/

//return the area of a rectangle:
function area (height , width){
     return height * width
}
/*
console.log(area(2,2));
console.log(area(10,5));
console.log(area(6,3));
*/
//the next number:

function next(a) {
    return a+1
}
/*
console.log(next(1));
console.log(next(2));
*/

//football points:

function footballpts(mw,mdr,mdf) {
    return mw * 3 + mdr 
}
/*
console.log(footballpts(1,2,1));
console.log(footballpts(0,0,1));
*/
//between 100 and 200 :
function between(a) {
    return (a>100 && a<200)

}
/*
console.log(between(50));
console.log(between(120));
*/
//hours and minuts to seconds:
function ConvertHourMin(a,b) {
    return a * 3600 + b * 60
}
/*
console.log(ConvertHourMin(1,30));
console.log(ConvertHourMin(0,6));
*/
//equality check:
function equalityCheck(a,b) {
    if (a===b) return true 
    else return false
}
/*
console.log(equalityCheck(1,2));
console.log(equalityCheck(6,6));
console.log(equalityCheck(10,"10"));
*/
// compare strings by count of characters:
function compareStrings(a , b) {
   if (a.length > b.length) return "the first string is taller"
   else return "the second string is taller"
    
}
// console.log(compareStrings("go my code","test"));