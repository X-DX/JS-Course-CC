// let a=10;
// const  b= 20
//var c = 300
// console.log(a);
// console.log(b);
// console.log(c);

//  1. scope {}, globe scope and block scope

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  // print 10 not 300 
}

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()