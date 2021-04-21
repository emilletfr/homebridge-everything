# homebridge http accessory

Supports all devices on HomeBridge Platform / Bridges devices to http

# Installation

1. Install homebridge using: npm install -g homebridge
2. Install this plugin using: npm install -g homebridge-http-accessory
3. Update your configuration file. See sample-config.json in this repository for a sample. 

# Configuration

Configuration sample:

 ```
 {
	"bridge": {
		"name": "Homebridge",
		"username": "C1:38:5A:AC:39:30",
		"port": 51826,
		"pin": "123-45-678"
	},
	"description": "This is an example configuration for the Everything Homebridge plugin",
	"accessories": [
		{
			"accessory": "HttpAccessory",
			"service": "Thermostat",
			"name": "Thermostat (Maison)",
			"apiBaseUrl": "http://localhost:8080/thermostat",
			"apiSuffixUrl": "",
			"forceRefreshDelay": 0
		},
		{
			"accessory": "HttpAccessory",
			"service": "Thermostat",
			"name": "Fan",
			"apiBaseUrl": "http://localhost:8080/fan",
			"apiSuffixUrl": "",
			"forceRefreshDelay": 0,
			"optionCharacteristic": ["RotationSpeed"]
		},
		{
			"accessory": "HttpAccessory",
			"service": "Switch",
			"name": "Force Chauffe-eau",
			"apiBaseUrl": "http://localhost:8080/switch",
			"apiSuffixUrl": "",
			"forceRefreshDelay": 0
		}
		
		
	],
	"platforms": []
}
```
# Supported services

AccessoryInformation
AirQualitySensor
BatteryService 
BridgeConfiguration
BridgingState
CameraControl
CameraRTPStreamManagement
CarbonDioxideSensor
CarbonMonoxideSensor
ContactSensor
Door
Doorbell
Fan
GarageDoorOpener
HumiditySensor
LeakSensor
LightSensor
Lightbulb
LockManagement
LockMechanism
Microphone
MotionSensor
OccupancySensor
Outlet
Pairing
ProtocolInformation
Relay
SecuritySystem
SmokeSensor
Speaker
StatefulProgrammableSwitch
StatelessProgrammableSwitch
Switch
TemperatureSensor
Thermostat
TimeInformation
TunneledBTLEAccessoryService
Window
WindowCovering  

# API Expectations


