const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5'
];
const CardToRemove = cards.splice(2, 1);
// const CardToInsert = cards.push("Карточка-6");
const CardToInsert = cards.splice(4, 0, "Карточка-6");
console.log(cards);