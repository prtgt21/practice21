let str = '� ���������,��-���� �����';

function PLDR(str) {
let strrev;
strrev = str.split('').reverse().join('').replace(/\s/g, '').replace(/[^a-z�-��]/gi, '').toLowerCase();
if (str.replace(/\s/g, '').toLowerCase().replace(/[^a-z�-��]/gi, '') === strrev) {
  return(`Palindrom`)
} else {
    return(`Not palindrom`)

}

}
console.log(PLDR(str))