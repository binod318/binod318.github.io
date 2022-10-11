/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else if(Array.isArray(expected) && Array.isArray(found)) { //check for Array type
        if(expected.length != found.length)
            return "TEST FAILED.  Expected " + expected + " found " + found;
        else {

            for(let i = 0; i < expected.length; i++){
                if(expected[i] != found[i])
                    return "TEST FAILED.  Expected " + expected + " found " + found;
            }

            return "TEST SUCCEEDED";
        }
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

//if vaar or let is not used then it is global scope variable
max = function (a, b) {
    if(a > b)
        return a;
    else
        return b;
}

/*
function max(a, b) {
    if(a > b)
        return a;
    else
        return b;
}

max = (a, b) => {
    if(a > b)
        return a;
    else
        return b;
}

*/

function maxOfThree(a,b,c){
    return (max(max(a,b),c));
}

function isVowel(input){
    input = ("" + input).toLowerCase();
    if(['a', 'e', 'i', 'o', 'u'].indexOf(input) > -1)
        return true;
    else
        return false;
}

function sum(arr){
    // Return if the input if not array
    if(!Array.isArray(arr) || arr.length === 0)
        return 0;

    let total = 0;
    for(let i =0; i<arr.length; i++){
        total += arr[i]
    }
    return total;
}

function multiply(arr){
    // Return if the input if not array
    if(!Array.isArray(arr) || arr.length === 0)
        return 0;

    let total = 1;
    for(let i =0; i<arr.length; i++){
        total *= arr[i]
    }
    return total;
}

function reverse(str){
    let result = "";

    for(let i =str.length - 1; i >= 0; i--){
        result += str.charAt(i);
    }

    return result;
}

function findLongestWord(arr){

    // Return if the input if not array
    if(!Array.isArray(arr) || arr.length === 0)
        return 0;

    let longest = arr[0].length;
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length > longest)
            longest = arr[i].length;
    }

    return longest;
}

function filterLongWords(arr, size){

    // Return if the input if not array
    if(!Array.isArray(arr) || arr.length === 0)
        return 0;

    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > size)
            result.push(arr[i]);
    }

    return result;
}

function jsFiddleFunctions(){
    const a = [1,3,5,3,3]; 

    console.log('Following is the output for JSFiddle code ..');

    //multiple by 10
    const d4 = a.map(function(elem, i, array){
        return elem * 10;
    })
    
    console.log("Expected output of multiple by 10 using map for [1,3,5,3,3] is [10,30,50,30,30]  " + myFunctionTest([10,30,50,30,30], d4));
    
    //return elements with 3 value
    const d5 = a.filter(function(elem, i, array){
        if(elem === 3)
        return true
    })
    
    console.log("Expected output of return only 3 element using filter for [1,3,5,3,3] is [3,3,3]  " + myFunctionTest([3,3,3], d5));

    //return the product of all elements
    const d6 = a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    }, 1)

    console.log("Expected output of product of all element using map for [1,3,5,3,3] is 135 " + myFunctionTest(135, d6));
}

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n-1);
}

function getSmallest(a,b,c){
    if(a.length < b.length && a.length < c.length)
        return a;
    if(b.length < a.length && b.length < a.length)
        return b;
    else 
        return c;
}

function earliestSpace(a, b, c) {
    if(a.indexOf(" ") < b.indexOf(" ") && a.indexOf(" ") < c.indexOf(" ")) 
        return a;
    else if(b.indexOf(" ") < c.indexOf(" ") && b.indexOf(" ") < a.indexOf(" ")) 
        return b;
    else
        return c;
}

function sumAnyNumberOfArgument() {
    let sum = 0;
    for(const i of arguments){
        sum +=  i;
    }
    return sum;
}

function sumWithMore(x, y, ...more){
    let total=x+y;
    console.log(more);
    for(const i of more)
        total += i;
    
    return total;
}

let emailMatch1 = new RegExp("^[a-zA-Z_\-]+@(([a-zA-Z_\-])+\.)+[a-zA-Z]{2,}$"); 
let emailMatch2 = /^[a-zA-Z_-]+@(([a-zA-Z_-])+\.)+[a-zA-Z]{2,}$/;