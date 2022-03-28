var quest1 = ["hello", "yellow", "green", "blue"];

var c1 = quest1[1];
console.log(c1);

function food(food) {
    console.log("I love to eat " + food);
}

food("Pizza")

function order(quantity, price){
    console.log("I have ordered " + quantity + " slices.")
    console.log("Each slice cost " + price + " dollars.")
    console.log("The total bill is " + quantity*price + " dollars.")
}

order(10, 5)