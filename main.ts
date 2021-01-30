let Strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
music.setVolume(123)
basic.forever(function () {
    if (Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_mm, DigitalPin.P8) < 60) {
    	
    } else {
    	
    }
})
