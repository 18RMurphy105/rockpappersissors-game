input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # # .
        . # . . .
        . . # . .
        . . . # .
        . # # . .
        `)
    score += 1
    basic.showNumber(score)
    if (score == 3) {
        basic.showIcon(IconNames.Yes)
        score = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
let score = 0
score = 0
