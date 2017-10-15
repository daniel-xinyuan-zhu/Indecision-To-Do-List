
const isAdult = (age) => {
  if (age > 17)
  {
    return true;
  }
  return false;
};

const canDrink = (age) => {
  if (age > 20)
  {
    return true;
  }
  return false;
};

const isSenior = (age) => {
  if (age > 64){
    return true;
  }
  return false;
}

export {isAdult, canDrink, isSenior as default}
