let str1 = `abcdefg`;

function stringr2(str1) {
let arr;
if((str1.length > 2) && (str1.length < 100)) {
arr = str1.split(``);
return arr.filter((e,i)=>!(i%2));
} else {
return `Invalid value`
}

}
console.log(stringr2(str1))