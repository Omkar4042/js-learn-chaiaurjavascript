// {} is scope. 
// excluding blocks when we see {} all other like have a scope  
// local/blocked scope the values which are decleared inside  block{}
// groal scope , values which are diclered out side a block and can we accessed from every where 
let a = 300 
if (true){
    let a = 10
    const b = 20
    // console.log("inner : ",a);

}

// console.log(a);
// console.log(b);
// *console.log(c);
25-function one(){
    username = "Omkar"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); e
    // re this will not get exe
    // cuted as we are calling >?+,./
    // website outsite of its scope, 

    two()
    


}
// one()
// here we can see that child calls or function can call parent method
if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "youtube"
        // console.log(username + website)

    }
    // console.log(website); this will not work as its out of scope 
}
// console.log(username); this will not work as its out of scope 