// function summation(num){
//     //ending point
//     if(num === 1) return 1;
    
//     //this is 
//     return num + summation(--num)
    
// }
// console.log(summation(4))



function mOf3(num){
    if(num <= 3) return 3;
    
    return num + mOf3(num - 3)

    if(num % 3 !== 0){
        num = num - (num % 3)
    }
}
console.log(mOf3(10))