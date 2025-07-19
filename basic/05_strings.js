const name = "Kamal"
const repoCount =50 

console.log(name + repoCount + " Value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);
console.log("Hello");
const gameName = new String("kamal-Dhami");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('m'))

const newString= gameName.substring(0,4);
console.log(newString);
console.log(gameName)

const anotehrString = gameName.slice(-10,4);
console.log(anotehrString);

const newStringOne="        kamal           "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://kamalsdhami.me/fjalsd%20dsjfl"
console.log(url.replace("%20","-"));
console.log(url.includes("kamal"));
console.log(gameName.split("-"))
