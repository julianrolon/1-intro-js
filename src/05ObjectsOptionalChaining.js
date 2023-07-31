const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'John',
        lastName: 'Doe'
    },
    items: [
        {
            product: 'keyboard',
            price: 399,
            quantity: 2
        },
        {
            product: 'mouse',
            price: 200,
            quantity: 1
        }

    ],

    total: function() {
        let total = 0;
        this.items.forEach(item => {total = total + (item.price * item.quantity)});
        return total;
    },
    greeting: function() {return `Hola ${this.client.name}`}

};

invoice.client.name = 'Pepe';

console.log(invoice);
console.log(invoice.name);

console.log(invoice.greeting());
console.log(invoice.total());

const invoice2 = {...invoice};
invoice2.name = 'Lolo';

console.log(invoice.name);
console.log(invoice2.name);

let result = invoice===invoice2;

if(result) console.log('igual');
else console.log('otros');

const invoice3 = invoice; 

result = invoice===invoice3;

if(result) console.log('igual');
else console.log('otros');

console.log(invoice.company);

//Optional chaining with ?
console.log(invoice.company?.name); 


