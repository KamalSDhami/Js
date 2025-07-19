/*
Stack(Primitive):copy ,Heap(Non-primitive): refrence 
*/
let myYoutubename="KamalSDhami"
let anothername =myYoutubename

anotehrnaem = "xyz"

console.log(anothername)
console.log(myYoutubename)

let user1={
    email:"abc@google.com",
    upi:"abc@ybl"
}
let user2 = user1;
user2.email="xyz@gmail.com"
console.log(user1)
console.log(user2)