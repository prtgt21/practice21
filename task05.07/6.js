let str = 'а розаупала,на-лапу Азора';

function PLDR(str) {
let strrev;
strrev = str.split('').reverse().join('').replace(/\s/g, '').replace(/[^a-zа-яё]/gi, '').toLowerCase();
if (str.replace(/\s/g, '').toLowerCase().replace(/[^a-zа-яё]/gi, '') === strrev) {
  return(`Palindrom`)
} else {
    return(`Not palindrom`)

}

}
console.log(PLDR(str))