const numbers = [10, 20, 30];

const total = numbers.reduce(myReduce, 0);

function myReduce(accumulator, value, index, array) {
    console.log(accumulator);
    console.log('  ');
    return accumulator + value;
}

console.log(total);

  