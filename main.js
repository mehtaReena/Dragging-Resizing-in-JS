const box = document.querySelector(".box")
const container = document.querySelector(".container")

let x = 0;
let y = 0;

function mouseDown(e) {
    box.addEventListener('mousemove', mouseMove)
    x = e.clientX
    y = e.clientY
}

function mouseMove(e) {
        let dy = (box.offsetTop + (e.clientY - y))
        let dx = (box.offsetLeft + (e.clientX - x))
        let maxX = container.offsetLeft + container.clientWidth - box.clientWidth;
        let maxY = container.offsetTop + container.clientHeight - box.clientHeight;

        leftWidth = container.getBoundingClientRect();

        console.log(leftWidth   , dy , dx )
        dx = dx < container.offsetLeft ? container.offsetLeft : dx > maxX ? maxX : dx
        dy = dy < container.offsetTop ? container.offsetTop : dy > maxY ? maxY : dy
        box.style.top = dy + 'px'
        box.style.left = dx + 'px'

        x = e.clientX
        y = e.clientY
}

function mouseUp() {
    box.removeEventListener('mousemove', mouseMove)
}


box.addEventListener('mousedown', mouseDown)
window.addEventListener('mouseup', mouseUp)