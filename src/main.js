function sayHello(name = 'Pepe'){
    console.log(`Hallo Function ${name}`);
}

function sayHelloReturn(){
    const greeting = 'Hallo Function R';
    return greeting;
}

const sayHolaLambda = (name = 'Default') => 'Hallo Function Lambda ' + name;
const add = (a = 0, b = 0) => a + b;



sayHello();
sayHello('Carlitos');
const result = sayHelloReturn();
console.log(result);

console.log(sayHolaLambda());
console.log(add(123, 77));