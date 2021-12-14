

function display(arr:string[])
{
    // for(let i=0;i<arr.length;i++)
    // {
    //     console.log(arr[i]);
    // }

    //for.. of
// for(let i of arr)
// {
//     console.log(i)
// }

for(let i in arr)
{
    console.log(i)
}

}

var myArray=new Array("pune","mumbai","Goa");

display(myArray);