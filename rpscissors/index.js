

let fruits = [
    'oranges', 'apple', 'grape', 'strawberry', 'banana'
]

const randomFruit = (fruits) =>{

    const randomNumber = Math.floor(Math.random() * fruits.length)
    return fruits[randomNumber]
    

}




console.log(randomFruit(fruits))
