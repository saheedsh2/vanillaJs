


const textWord = document.getElementById('text')

const amt = Number(prompt('Enter Amount Spent'))

let tip
tip = amt * 0.1


textWord.innerHTML = `Your bill is $${amt} and your tip is $${tip}`

// while(amt > 0){
//     const tip = 0.1 * amt;

//     textWord.innerHTML = `Your bill is ${amt} and your tip is ${tip}`

// }


// const tip = Number(prompt('Enter Amount Spent'))