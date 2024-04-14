
function makeTransaction(quantity, pricePerDroid, customerCredits){
  let credits = quantity * pricePerDroid;
  if(credits <= customerCredits){
    return `You ordered ${quantity} droids worth ${credits} credits!`;
  }else{
    return `Insufficient funds!`;
  }
}
console.log(makeTransaction(5,3000,23000));
console.log(makeTransaction(3,1000,15000));
console.log(makeTransaction(10,5000,8000));
console.log(makeTransaction(8,2000,10000));
console.log(makeTransaction(10,500,5000));
  