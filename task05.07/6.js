let str = ' а роза упала на лапу Азора';

function PLDR(str) {
let strrev;
strrev = str.split('').reverse().join('').split(" ").join("").toLowerCase();
if (str.split(" ").join("").toLowerCase() === strrev) {
  return(`Palindrom`)
} else {
    return(`Not palindrom`)

}

}
console.log(PLDR(str))