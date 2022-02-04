function combine(input1 : number | string, input2 : number | string){
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2
    }
    else{
        result = input1.toString() + input2.toString();
    }
    return result
}

combine(20, 40)
combine('alice','bob')

function addHandle(num1 : number, num2 : number, cb : (num) => void){
    var result = num1 + num2
    cb(result)
}

addHandle(10, 20, (number) => {console.log(number)});