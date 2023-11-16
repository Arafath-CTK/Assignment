function maxNumber(param) {
  const mn = param.reduce((a,b) => (b > a ? b : a));
  console.log(mn);
}

let x = [2, 4, 6, 8, 8, 7, 66, 77, 55, 4, 66, 24, 9];
maxNumber(x);
