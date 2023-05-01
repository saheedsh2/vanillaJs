const cards = [
    {
        name: 'fries',
        img: 'project/images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'project/images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'project/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'project/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'project/images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'project/images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'project/images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'project/images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'project/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'project/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'project/images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'project/images/hotdog.png'
    },
    
]


cards.sort(() => 0.5 - Math.random())
console.log(cards)
let cardsChosen = []

const grid = document.querySelector('.grid')

function createBoard(){
    for(let i=0; i<cards.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)

    }

 
 
}

function flipCard(){
    let cardId = this.getAttribute('data-id');
    console.log(cards[cardId])
    cardsChosen.push(cards[cardId])
}

createBoard()