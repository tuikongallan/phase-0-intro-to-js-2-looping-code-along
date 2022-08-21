// Code your solutions in this file
// Examples

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// };

// Using for with Arrays

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

// writeCards()


function writeCards(name, event) {

    const customMessage = [];

    for (let i = 0; i < name.length; i++) {
        customMessage.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
        

    }
    return customMessage;
}

function countDown (i) {
    
    while (i >=0) {
        console.log(i);
        i--;
    };
};