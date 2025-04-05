let Armed = false
let Temperature = 0
let Switch = 0
input.onButtonPressed(Button.A, function () {
    Armed = true
})
input.onButtonPressed(Button.B, function () {
    Armed = false
    basic.clearScreen()
})
basic.forever(function () {
    Temperature = input.temperature()
    Switch = pins.analogReadPin(AnalogReadWritePin.P1)
    if (Armed) {
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
            basic.showString("no entry")
            basic.showIcon(IconNames.No)
        } else if (false) {
            basic.showIcon(IconNames.Yes)
        }
        if (Temperature > 25 && Switch > 512) {
            pins.analogWritePin(AnalogPin.P2, 1023)
        } else {
            pins.analogWritePin(AnalogPin.P2, 0)
        }
    }
})
