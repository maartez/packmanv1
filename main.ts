input.onButtonPressed(Button.A, function () {
    slang.turn(Direction.Left, 90)
    basic.pause(1500)
    slang_2.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    slang.turn(Direction.Right, 90)
    basic.pause(1500)
    slang_2.turn(Direction.Right, 90)
})
let slang_2: game.LedSprite = null
let slang: game.LedSprite = null
let punten = 0
let spam_stopper = 0
slang = game.createSprite(2, 2)
let x_as = randint(0, 5)
let y_as = randint(0, 5)
let appeltje = game.createSprite(x_as, y_as)
slang_2 = game.createSprite(1, 2)
basic.forever(function () {
    if (punten == 1) {
        if (spam_stopper == 0) {
            x_as = randint(0, 5)
            y_as = randint(0, 5)
            appeltje = game.createSprite(x_as, y_as)
            spam_stopper += 1
        }
    }
})
basic.forever(function () {
    if (punten == 2) {
        if (spam_stopper == 1) {
            x_as = randint(0, 5)
            y_as = randint(0, 5)
            appeltje = game.createSprite(x_as, y_as)
            spam_stopper += 1
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (slang.isTouching(appeltje)) {
        appeltje.delete()
        punten += 1
    }
})
basic.forever(function () {
    if (punten == 4) {
        if (spam_stopper == 3) {
            x_as = randint(0, 5)
            y_as = randint(0, 5)
            appeltje = game.createSprite(x_as, y_as)
            spam_stopper += 1
        }
    }
})
basic.forever(function () {
    if (punten == 3) {
        if (spam_stopper == 2) {
            x_as = randint(0, 5)
            y_as = randint(0, 5)
            appeltje = game.createSprite(x_as, y_as)
            spam_stopper += 1
        }
    }
})
basic.forever(function () {
    if (punten == 5) {
        if (spam_stopper == 4) {
            x_as = randint(0, 5)
            y_as = randint(0, 5)
            appeltje = game.createSprite(x_as, y_as)
            spam_stopper += 1
        }
    }
})
basic.forever(function () {
    if (punten == 6) {
        if (spam_stopper == 5) {
            x_as = randint(0, 5)
            y_as = randint(0, 5)
            appeltje = game.createSprite(x_as, y_as)
            spam_stopper += 1
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    while (punten < 35) {
        basic.pause(1500)
        slang.move(1)
        slang_2.move(1)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (punten == 10) {
        if (spam_stopper == 9) {
            x_as = randint(0, 5)
            y_as = randint(0, 5)
            appeltje = game.createSprite(x_as, y_as)
            spam_stopper += 1
        }
    }
})
basic.forever(function () {
    if (punten == 7) {
        if (spam_stopper == 6) {
            x_as = randint(0, 5)
            y_as = randint(0, 5)
            appeltje = game.createSprite(x_as, y_as)
            spam_stopper += 1
        }
    }
})
basic.forever(function () {
    if (punten == 9) {
        if (spam_stopper == 8) {
            x_as = randint(0, 5)
            y_as = randint(0, 5)
            appeltje = game.createSprite(x_as, y_as)
            spam_stopper += 1
        }
    }
})
basic.forever(function () {
    if (punten == 8) {
        if (spam_stopper == 7) {
            x_as = randint(0, 5)
            y_as = randint(0, 5)
            appeltje = game.createSprite(x_as, y_as)
            spam_stopper += 1
        }
    }
})
