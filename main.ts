makerbit.connectLcd(39)
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.i2cLcdInit(39)
I2C_LCD1602.i2cLcdOn()
I2C_LCD1602.BacklightOn()
I2C_LCD1602.i2cLcdBacklightOn()
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
    I2C_LCD1602.ShowString("Hello", 0, 0)
    basic.pause(1000)
    I2C_LCD1602.i2cLcdShowString("", 0, 0)
    makerbit.clearLcd1602()
}
