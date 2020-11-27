radio.onReceivedNumber(function (receivedNumber) {
    相手の数 = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(自分の数)
    basic.pause(2000)
    自分の数 = 0
    相手の数 = 0
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    自分の数 += 1
    radio.sendNumber(自分の数)
})
input.onButtonPressed(Button.B, function () {
    if (自分の数 < 相手の数) {
        basic.showString("You Lose")
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    } else if (自分の数 > 相手の数) {
        basic.showString("You Win!")
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    } else {
        basic.showString("Draw")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
})
let 相手の数 = 0
let 自分の数 = 0
radio.setGroup(1)
自分の数 = 0
basic.forever(function () {
	
})
