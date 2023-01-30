def on_button_pressed_a():
    slang.turn(Direction.LEFT, 90)
    basic.pause(1500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    slang.turn(Direction.RIGHT, 90)
    basic.pause(1500)
input.on_button_pressed(Button.B, on_button_pressed_b)

appeltje: game.LedSprite = None
punten = 0
slang: game.LedSprite = None
slang = game.create_sprite(2, 2)

def on_forever():
    global appeltje, punten
    if punten == 0:
        basic.pause(5000)
        appeltje = game.create_sprite(randint(0, 5), randint(0, 5))
    if slang.is_touching(appeltje):
        punten += 1
        appeltje.delete()
basic.forever(on_forever)

def on_forever2():
    while punten < 35:
        basic.pause(1500)
        slang.move(1)
basic.forever(on_forever2)

def on_forever3():
    basic.pause(10000)
    basic.clear_screen()
    basic.show_number(punten)
basic.forever(on_forever3)
