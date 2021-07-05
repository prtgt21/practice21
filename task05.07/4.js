let arr1 = [1,2,3,`q`,`w`,`e`]

function filtr(arr1){
let arr1_filt=[];
for (let i=0; i<arr1.length; i++){
  if(typeof(arr1[i])!=`string`) 
      arr1_filt.push(arr1[i])
}
return(arr1_filt);
}
console.log(filtr(arr1))