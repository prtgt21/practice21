const arr = [1,2,3,4,5];

function removeSmallest(arr) {
let min = Math.min(...arr);
console.log(arr.filter(e => e != min));


}
console.log(removeSmallest(arr));