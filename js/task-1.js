function makeTransaction(quantity, pricePerDroid) {
    const x = quantity;
    const y = pricePerDroid * quantity;
    const result = `You ordered ${x} droids worth ${y} credits!`;
    return result
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));