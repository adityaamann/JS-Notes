// functions
// es5 and es6

/* es5 - a) function statement, 
         b) function expression,
         c) anonymous function.
/*

/*  es6 - fat arrow function (FAF):
          a) basic fat arrow,
          b) fat arrow with one param,
          c) fat arrow with implicit retun.
*/          

/* indepth - JS mein function ko first class functions 
             ka darja diya gaya hai, jiska matlab hai,
             ki js mein functiond ko value/variable ki
             tarah kiya ja skta hai.
*/

/* what is function?
koi aisa code jo bar bar use karna ho, ya fir koi aasa 
code jsko turant me na chalano ho par kabhi chalan ho,
usey function mein daal doh.
*/

function abcd(){
    console.log("utho");
    console.log("nahao");
    console.log("khao");
    console.log("sojao");
}
abcd();

/* abcd(); yaha pe call hai jab tak call nhi karenge tab tk 
           function work nhi karega
*/           


/* extra we should konw:
a] parameter: function abcd() ~here in the bracket() is called paramneters.
b] arguments: abcd(); ~here in the bracket() is called argument.

function abcd(parameters){

}
abcd(arguments);

*/

// prep for interview

function abcd(){
    // function statement
}

var abcd = function(){
    // function expression
}

function(){
    // anonymous function
}

// fat arrow
var a = ()=>{};
var b = ()=>{
}
var c = ()=>{
}

// fat arrow with one param
var g = ab => {}
g(12)

//fat arrow with implicit retun
var abcd = () => "Adi";

