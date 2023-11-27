music.playMelody("- - B - - - - - ", 120)
basic.showLeds(`
    . . . . #
    . . . . .
    # . . . .
    . . . . .
    . . . . #
    `)
music.playTone(587, music.beat(BeatFraction.Breve))
basic.showString("QUE HACES AQUI!")
basic.showLeds(`
    . . . . #
    . . . . .
    # . . . .
    . . . . .
    . . . . #
    `)
basic.showString("SAL DE AQUI!")
music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Forever)
basic.showLeds(`
    . . . . #
    . . . . .
    # . . . .
    . . . . .
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . # .
    # . . . .
    . . . . .
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # . # . .
    . . . . .
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # . . .
    . . . . .
    . . . . #
    `)
basic.showString("NO ME IRE!")
soundExpression.mysterious.play()
basic.showLeds(`
    . . . . .
    . . . . .
    # # . . .
    . . . . .
    . . . # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # . . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # . . .
    . # . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # . . . .
    # . . . .
    # . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
soundExpression.happy.play()
basic.showString("FIN")
basic.showIcon(IconNames.Yes)
