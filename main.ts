basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # # . # #
        # . . . #
        # # . # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        # # . # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # . # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.forever(function () {
    music.playMelody("C5 - A A B B A E ", 200)
    music.playMelody("C5 - A B B B A E ", 200)
    music.playMelody("C5 - A A B B A E ", 200)
    music.playMelody("C5 - A B B B A E ", 170)
})
