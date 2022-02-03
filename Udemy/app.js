function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
        console.log(result);
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(20, 40));
console.log(combine('alice', 'bob'));
