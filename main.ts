servos.P0.setAngle(0)
basic.forever(function () {
    basic.showString("" + (input.soundLevel()))
    if (input.soundLevel() > 50) {
        servos.P0.setAngle(90)
        basic.pause(1000)
        servos.P0.setAngle(0)
    }
})
