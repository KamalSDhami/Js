// Primitive 

//& type : String , Number,Boolean ,null,undefined,Symbol,BigInt,

const score =100;
const isLoggedIn=false
const outsideTemp = null
let userEmail;

const id = Symbol("123");
const anotherId= Symbol("123");
console.log(id ==anotherId)
console.log(id ===anotherId)
const bigNumber = 2345678909876543n;


//Reference(Non Premitive)
//array,Objects, Functions 
const heros= ["shaktiman","naagraj","doga"];
let myObj = {
    name:"kamal",
    age:22,
}
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof bigNumber);
/*
Type of val	Result
Undefined	"undefined"
Null	"object"
Boolean	"boolean"
Number	"number"
String	"string"
Object (native and does not implement [[Call]])	"object"
Object (native or host and does implement [[Call]])	"function"
Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".
*/
