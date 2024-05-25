function makeTransaction(quantity, pricePerDroid) {

// 1. В шаблонному рядку вставляєм змінні quantity і добуток quantity * pricePerDroid

    return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));