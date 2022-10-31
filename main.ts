input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        led.unplot(4 - index, 0)
        basic.pause(200)
    }
})
let counter = 9
basic.forever(function () {
	
})
