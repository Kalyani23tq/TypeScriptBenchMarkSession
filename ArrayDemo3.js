function positionElements(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            console.log(arr[i]);
        }
    }
}
function ReversArray(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
var Myposition = ["red", "green", "pink", "black"];
positionElements(Myposition);
console.log("/////////////////////////////////////");
ReversArray(Myposition);
