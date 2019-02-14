# ESP8266/32 (Home Assistant Switch) connected to PCF8574 controlling 8 relays

[![Build Status](https://travis-ci.com/debsahu/PCF8574_8Relay.svg?branch=master)](https://travis-ci.com/debsahu/PCF8574_8Relay) [![License: MIT](https://img.shields.io/github/license/debsahu/PCF8574_8Relay.svg)](https://opensource.org/licenses/MIT) [![version](https://img.shields.io/github/release/debsahu/PCF8574_8Relay.svg)](https://github.com/debsahu/PCF8574_8Relay/releases/tag/1.1.2) [![LastCommit](https://img.shields.io/github/last-commit/debsahu/PCF8574_8Relay.svg?style=social)](https://github.com/debsahu/PCF8574_8Relay/commits/master)

Home Assistant Switch for 8 Relays

- Code can compile on ESP8266/32
- PCF8574 can be used to extend the GPIO of ESP8266/32
- 8 ports of PCF8574 is connected to 8 Relay module

[![PCF8574_8Relay](https://img.youtube.com/vi/XXXXXXXX/0.jpg)](https://www.youtube.com/watch?v=XXXXXXXX)

## Libraries Needed

[platformio.ini](https://github.com/debsahu/PCF8574_8Relay/blob/master/platformio.ini) is included, use [PlatformIO](https://platformio.org/platformio-ide) and it will take care of installing the following libraries.

| Library                     | Link                                                                                              |
|-----------------------------|---------------------------------------------------------------------------------------------------|
|MQTT                         |https://github.com/256dpi/arduino-mqtt                                                             |
|ArduinoJson v6.8.0           |https://github.com/bblanchon/ArduinoJson/releases/download/v6.8.0-beta/ArduinoJson-v6.8.0-beta.zip |
|WiFiManager Develop          |https://github.com/tzapu/WiFiManager/archive/development.zip                                       |
|PCF8574 Library              |https://github.com/xreef/PCF8574_library                                                           |
|Arduino WebSockets           |https://github.com/Links2004/arduinoWebSockets                                                     |
|UpdateUploadServer (ESP8266) |https://github.com/debsahu/DDUpdateUploadServer                                                    |

## Hardware

- Break the tab on the sides with brass screws
- Connect each of the brass screws to Normally Open (N/O) on relay

![plug](https://github.com/debsahu/PCF8574_8Relay/blob/master/doc/plug.png)

- Use PCF8574AP (exact version used here)
- Use 3.3V to 5V level shifters for ESP8266 I2C data
- Set A0, A1, A2 to GND so I2C address is 0x20
- Use 5V as VCC on PCF8574AP
- Use a good 110V AC to 5V DC device like a phone charger

![schematic](https://github.com/debsahu/PCF8574_8Relay/blob/master/doc/schematic.png)