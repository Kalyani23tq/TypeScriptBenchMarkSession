// function factorial(num:number)
// {
//   var fact=1;
//     for(let i=1;i<=num;i++)
//     {
//         fact=fact*i;
//     }
//     return fact;
// }
// function factorial(num:number)
// {
//     var fact=1;
//     let i=1;
//     while(i<=num)
//     {
//         fact=fact*i;
//         i++;
//     }
//     return fact;
// }
// console.log(factorial(3));
function sumOfNumbers(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumOfNumbers(10));
