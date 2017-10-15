
console.log('utils.js is running');

const add = (a,b) => {
  return a+b;
}

const square = (x) => {
  return x*x;
}

const subtract = (a,b) =>{
  return a-b;
}

export { square, add, subtract as default};
