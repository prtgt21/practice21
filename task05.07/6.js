let str = '� ���������,��-���� �����';

function PLDR(str) {
let strrev;
strrev = str.split('').reverse().join('').replace(/\s/g, '').replace(/[^a-za-y?]/gi, '').toLowerCase();
if (str.replace(/\s/g, '').toLowerCase().replace(/[^a-za-y?]/gi, '') === strrev) {
  return(`Palindrom`)
} else {
    return(`Not palindrom`)

}

}
console.log(PLDR(str))