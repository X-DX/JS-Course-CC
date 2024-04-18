//const coding = ["js", "ruby", "java", "python", "cpp"]

// eg: where forEach not return values
// const values = coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(values); //? its print all the values but its undefined
// forEach not return any value

// new eg where we return values

//const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num)=> num > 4 ) //? filter use call back, use condition
// console.log(newNums); 

// const newNums = myNums.filter( (num) => { // if we use {} we have write return
//     return num > 4
// } )
// console.log(newNums); //? output: [] // empty // after use return array will show

// use in forEach
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = []
// myNums.forEach((num) => {
//     if(num>4)
//     {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

// book eg
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter( (bk) => bk.genre === 'History')

const userBooks2 = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
})

// console.log(userBooks);
console.log(userBooks2);
