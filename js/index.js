const prev = document.getElementById("prev")
const next = document.getElementById("next")
const header = document.querySelector('.header')

let currentActive = 1

// rotation()
// function rotation() {
//     header.style.transform = "rotate(10deg)"
//     header.style.transform = "rotate(-10deg)"
//     rotation()
// }


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
        document.getElementById('Daft-Punk').style.display = 'flex';
        document.getElementById('Gorillaz').style.display = 'none';
        document.getElementById('Passion-Pit').style.display = 'none';
    }
    else if (currentActive == 2) {
        document.getElementById('Daft-Punk').style.display = 'none';
        document.getElementById('Gorillaz').style.display = 'flex';
        document.getElementById('Passion-Pit').style.display = 'none';
    }
    else {
        document.getElementById('Daft-Punk').style.display = 'none';
        document.getElementById('Gorillaz').style.display = 'none';
        document.getElementById('Passion-Pit').style.display = 'flex';
    }
}