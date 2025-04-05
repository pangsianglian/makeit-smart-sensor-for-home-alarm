let Armed = false
input.onButtonPressed(Button.A, function () {
    Armed = true
})
input.onButtonPressed(Button.B, function () {
    Armed = false
    basic.clearScreen()
})
basic.forever(function () {
    if (Armed) {
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
            basic.showString("no entry")
            basic.showIcon(IconNames.No)
        } else if (false) {
            basic.showIcon(IconNames.Yes)
        }
    }
})
