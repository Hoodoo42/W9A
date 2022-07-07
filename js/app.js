//  = always sets the value

let age = 24 ;
let isSubscribed = false ;  

//  === always checks for equality in value AND date type


if(age >= 18 && isSubscribed === true){
    console.log("The user is 18+ and subscribed");
}else if(age < 18 && isSubscribed === true){
    console.log ("The user is under 18 and subscribed");
}else if(age >= 18 && isSubscribed === false){
    console.log("The user is 18+ and is not subscribed");
}else if(age < 18 && isSubscribed === false){
    console.log("The user is under 18 and is not subscribed");
}else {
    console.log ("Cannot verify user");
}