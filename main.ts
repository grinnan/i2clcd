makerbit.connectLcd(39)
if (makerbit.isLcdConnected()) {
    basic.showString("Connected to LCD")
} else {
    basic.showString("\"Not CONNECTED\"")
}
makerbit.setLcdBacklight(LcdBacklight.On)
for (let index = 0; index < 4; index++) {
    makerbit.showStringOnLcd1602("MakerBit", makerbit.position1602(LcdPosition1602.Pos1), 16)
    basic.pause(1000)
    basic.showString("Hello!")
    basic.pause(1000)
    makerbit.clearLcd1602()
}
