I2C_LCD1602.LcdInit(0)
I2C_LCD1602.on()
I2C_LCD1602.BacklightOn()
I2C_LCD1602.clear()
basic.forever(function () {
    I2C_LCD1602.ShowString("Hello who I am", 0, 0)
    I2C_LCD1602.ShowNumber(12345678910111212, 0, 1)
})
