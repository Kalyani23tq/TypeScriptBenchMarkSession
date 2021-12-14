

function sumOfArray(arr:number[])
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}

let myArray1=[4,5,3,2,1];

console.log("Sum of Array Element is    "+sumOfArray(myArray1));
