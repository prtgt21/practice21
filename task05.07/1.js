const arr = [1, 2, 3];
const N = 3;
function degreeN(arr, N){
	let result;
	if (arr[N]){result = arr[N]**N}
	else {result=-1}
	return(result);
}
console.log(degreeN(arr));