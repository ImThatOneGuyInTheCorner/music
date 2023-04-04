const prev = document.getElementById("prev")
const next = document.getElementById("next")
const header = document.querySelector('.header')

let currentActive = 1

rotationR()
function rotationR() {
    header.style.transform = "rotate(10deg)"
    wait(500)
    // setTimeout(rotationL, 500)
    rotationL()
}
function rotationL() {
    header.style.transform = "rotate(-10deg)"
    wait(500)
    // setTimeout(rotationR, 500)
    rotationR()
}


next.addEventListener('click', () => {
    currentActive++
    if (currentActive > 3) {
        currentActive = 3
    }

    update()
    console.log("Next")
})

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }

    console.log("Previous")
    update()
})

function update() {

    if (currentActive == 1) {
        prev.disabled = true
    }
    else if (currentActive == 3) {
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }

    if (currentActive == 1) {
        document.getElementById('Daft-Punk').style.zIndex = '1';
        document.getElementById('Gorillaz').style.zIndex = '0';
        document.getElementById('Snails-House').style.zIndex = '0';
    }
    else if (currentActive == 2) {
        document.getElementById('Daft-Punk').style.zIndex = '0';
        document.getElementById('Gorillaz').style.zIndex = '1';
        document.getElementById('Snails-House').style.zIndex = '0';
    }
    else {
        document.getElementById('Daft-Punk').style.zIndex = '0';
        document.getElementById('Gorillaz').style.zIndex = '0';
        document.getElementById('Snails-House').style.zIndex = '1';
    }
}