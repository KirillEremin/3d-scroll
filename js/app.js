// 3D Scroll

let zSpacing = -1000;
let lastPos = zSpacing / 5;
let $frames = document.getElementsByClassName('frame');
let frames = Array.from($frames);
let zVals = []

window.onscroll = function() {
    
    let top = document.documentElement.scrollTop;
    let delta = lastPos - top;

    lastPos = top;

    frames.forEach((n, index) => {
        zVals.push(index * zSpacing + zSpacing)
        zVals[index] += delta * -5

        let frame = frames[index];
        let transform = `translateZ(${zVals[index]}px)`
        let opacity = zVals[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0

        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })

}

window.scrollTo(0, 1)

// Audio

let soundButton = document.querySelector('.sound-button');
let audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
    soundButton.classList.toggle('paused')

    audio.paused ? audio.play() : audio.pause()
})

window.onfocus = () => {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = () => {
    audio.pause()
}