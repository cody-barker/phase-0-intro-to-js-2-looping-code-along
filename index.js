const name = ["Guadalupe", "Ollie", "Aki"];
const event = "surpirse";
let cardList = [];

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
   
    cardList.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);    
    
    }

    return cardList;

};

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i--);}
    
};