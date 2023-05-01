const circle = document.querySelector('.circle')


let xAxis = 0
let yAxis = 0


function control(e){

    switch(e.key){
        case 'ArrowLeft':
            console.log('Pressed left')
            xAxis -= 50
            circle.style.left = xAxis + 'px'
            break;
        case 'ArrowRight':
            console.log('Pressed Right')
            xAxis += 50
            console.log(xAxis)
            circle.style.left = xAxis + 'px'
            break;
        case 'ArrowUp':
            yAxis -= 50
            console.log('Pressed Up')
            circle.style.top = yAxis + 'px'
            break;
        case 'ArrowDown':
            console.log('Pressed Down')
            yAxis += 50
            circle.style.top = yAxis + 'px'
            break;
        default:
            console.log('Default')
    }





}


document.addEventListener('keydown', control)