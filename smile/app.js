

const circle = document.querySelector('.circle');


const mouth = document.querySelector('#mouth');



document.addEventListener('keyup', smile)


function smile(e){
    switch(e.key){
        case 'ArrowUp':
            console.log('Left Pressed')
            mouth.classList.remove('sad-mouth')
            mouth.classList.add('happy-mouth')
            break; 

        case 'ArrowDown':
            console.log('Down Pressed')
            mouth.classList.remove('happy-mouth')
            mouth.classList.add('sad-mouth')
            break;
        
        default:
            console.log('Key Not Recognised')
    }

    
}