const left = document.querySelector('.left')
const right = document.querySelector('.right')
const border = document.querySelector('#dragMe')

let x = 0;

function mouseDown(e) {
    document.addEventListener('mousemove', mouseMove)
    x = e.clientX
}


function mouseMove(e) {
    console.log(document.clientWidth)
    left.style.width = left.clientWidth + (e.clientX - x) + 'px'
    x = e.clientX
}

function mouseUp() {
    document.removeEventListener('mousemove', mouseMove)
}


border.addEventListener('mousedown', mouseDown)
document.addEventListener('mouseup', mouseUp)