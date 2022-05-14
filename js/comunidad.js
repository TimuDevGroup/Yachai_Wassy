getRandomMove = (plus) => {
    return Math.random() * plus
}

getRandomSize = (plus) => {
    return Math.random() * plus
}

function bubbles() {
    setInterval(showBubbles, 2000);
}

function showBubbles() {
    const bubbles = document.querySelectorAll(".bubbles")
    
    bubbles.forEach(el => {
        el.setAttribute("style", `visibility: visible; transform: translate(${getRandomMove(90)}vw, ${getRandomMove(20)}rem) scale(${getRandomSize(3)})`)
    })
}

bubbles()