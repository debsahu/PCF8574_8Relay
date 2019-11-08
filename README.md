# ESP8266/32 (Home Assistant Switch) connected to PCF8574 controlling 8 relays

[![Build Status](https://travis-ci.com/debsahu/PCF8574_8Relay.svg?branch=master)](https://travis-ci.com/debsahu/PCF8574_8Relay) [![License: MIT](https://img.shields.io/github/license/debsahu/PCF8574_8Relay.svg)](https://opensource.org/licenses/MIT) [![version](https://img.shields.io/github/release/debsahu/PCF8574_8Relay.svg)](https://github.com/debsahu/PCF8574_8Relay/releases) [![LastCommit](https://img.shields.io/github/last-commit/debsahu/PCF8574_8Relay.svg?style=social)](https://github.com/debsahu/PCF8574_8Relay/commits/master)

Home Assistant Switch for 8 Relays

- Code can compile on ESP8266/32
- PCF8574 can be used to extend the GPIO of ESP8266/32
- 8 ports of PCF8574 is connected to 8 Relay module

[![PCF8574_8Relay](https://img.youtube.com/vi/6CzkeJei5i0/0.jpg)](https://www.youtube.com/watch?v=6CzkeJei5i0)

## Libraries Needed

[platformio.ini](https://github.com/debsahu/PCF8574_8Relay/blob/master/platformio.ini) is included, use [PlatformIO](https://platformio.org/platformio-ide) and it will take care of installing the following libraries.

| Library                     | Link                                                                                              |
|-----------------------------|---------------------------------------------------------------------------------------------------|
|MQTT                         |https://github.com/256dpi/arduino-mqtt                                                             |
|ArduinoJson v6               |https://github.com/bblanchon/ArduinoJson                                                           |
|WiFiManager Develop          |https://github.com/tzapu/WiFiManager/archive/development.zip                                       |
|PCF8574 Library              |https://github.com/xreef/PCF8574_library                                                           |
|Arduino WebSockets           |https://github.com/Links2004/arduinoWebSockets                                                     |
|UpdateUploadServer (ESP8266) |https://github.com/debsahu/DDUpdateUploadServer                                                    |

## Hardware

### Items

1. ESP8266 ([aliexpress](https://www.aliexpress.com/item/ESP8266-CH340G-CH340-G-NodeMcu-V3-Lua-Wireless-WIFI-Module-Micro-USB-Connector-Development-Board-CP2102/32965931916.html)) / ESP32 ([aliexpress]())
2. 3.3V to 5V converter ([aliexpress](https://www.aliexpress.com/item/WEMOS-LOLIN32-V1-0-0-wifi-bluetooth-board-based-ESP-32-4MB-FLASH/32808551116.html))
3. PCF8574AP ([aliexpress](https://www.aliexpress.com/item/5PCS-PCF8574P-DIP16-PCF8574-DIP-new-and-original-IC-free-shipping/32551167706.html))
4. 8-port relay ([aliexpress](https://www.aliexpress.com/item/4-channel-relay-module-optocoupler-isolation-four-relay-module-control-panel/1499329187.html?spm=2114.search0104.3.119.659b241dK9vXAs&ws_ab_test=searchweb0_0,searchweb201602_3_10065_10130_10068_10890_10547_319_10546_317_10548_10545_10696_453_10084_454_10083_10618_10307_537_536_10902_10059_10884_10887_321_322_10103-10890,searchweb201603_59,ppcSwitch_0&algo_expid=073750a0-a3ec-413e-81fb-86ecf3b66fe4-15&algo_pvid=073750a0-a3ec-413e-81fb-86ecf3b66fe4&transAbTest=ae803_4))
5. Plastic Box ([amazon](https://www.amazon.com/Hammond-1591ESBK-ABS-Project-Black/dp/B0002BSRIO/))
6. AC plug socket ([aliexpress](https://www.aliexpress.com/item/2017-Hot-5-Pcs-3P-IEC-320-C14-Male-Plug-Panel-Power-Inlet-Sockets-Connectors-AC/32870614531.html))
7. 3-pin AC cable ([aliexpress](https://www.aliexpress.com/item/3-Prong-US-and-EU-Plug-AC-Power-Cord-Cable-for-Laptop-PC-Adapter-Supply-Power/32877820838.html))
8. 2 sockets ([Home Depot](https://www.homedepot.com/p/Leviton-15-Amp-Residential-Grade-Grounding-Duplex-Outlet-White-10-Pack-M24-05320-WMP/100055784))

### Instructions

- Break the tab on the sides with brass screws
- Connect each of the brass screws to Normally Open (N/O) on relay

![plug](https://github.com/debsahu/PCF8574_8Relay/blob/master/doc/plug.png)

- Use PCF8574AP (exact version used here)
- Use 3.3V to 5V level shifters for ESP8266 I2C data
- Set A0, A1, A2 to GND so I2C address is 0x20
- Use 5V as VCC on PCF8574AP
- Use a good 110V AC to 5V DC device like a phone charger

![schematic](https://github.com/debsahu/PCF8574_8Relay/blob/master/doc/schematic.png)
