let array = [1, 2, 3, 32, -5, 88, -22];

function sort_in(arr){
	let temp;
	
	for(let i=0; i<arr.length-1; i++){
		for(let j=i+1; j<arr.length; j++){
			if(arr[i]>arr[j]){
				temp=arr[j];
				arr[j]=arr[i];
				arr[i]=temp;
			}
		}
	}
	return(arr);
}

function sort_dec(arr){
	let temp;
	
	for(let i=0; i<arr.length-1; i++){
		for(let j=i+1; j<arr.length; j++){
			if(arr[i]<arr[j]){
				temp=arr[j];
				arr[j]=arr[i];
				arr[i]=temp;
			}
		}
	}
	return(arr);
}


console.log(sort_in(array));
console.log(sort_dec(array));