/* @flow weak */
'use strict';

var inherits = require('util').inherits;
var Characteristic = require('hap-nodejs').Characteristic;
var Service = require('hap-nodejs').Service;

/**
 * Characteristic "PushOn"
 */

const PushOnUUID = '74fefc26-4f40-11e7-b114-b2f933d5fe66';

Characteristic.PushOn = function() {
  Characteristic.call(this, 'On', PushOnUUID);
  this.setProps({
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
  });
  this.value = 0;
};

inherits(Characteristic.PushOn, Characteristic);

Characteristic.PushOn.UUID = PushOnUUID;

/**
 * Characteristic "RotationSpeedIR"
 */

const RotationSpeedIRUUID = '74ff01ee-4f40-11e7-b114-b2f933d5fe66';

Characteristic.RotationSpeedIR = function() {

  Characteristic.call(this, 'Rotation Speed', RotationSpeedIRUUID);
  this.setProps({
    format: Characteristic.Formats.FLOAT,
    unit: Characteristic.Units.PERCENTAGE,
    maxValue: 2,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
  });
  this.value = 1;

};

inherits(Characteristic.RotationSpeedIR, Characteristic);

Characteristic.RotationSpeedIR.UUID = RotationSpeedIRUUID;

/**
 * Characteristic "VolumeIR"
 */

const VolumeIRUUID = 'be9ac330-4f43-11e7-b114-b2f933d5fe66';

Characteristic.VolumeIR = function() {

  Characteristic.call(this, 'Volume', VolumeIRUUID);
  this.setProps({
    format: Characteristic.Formats.FLOAT,
    unit: Characteristic.Units.PERCENTAGE,
    maxValue: 2,
    minValue: 0,
    minStep: 1,
    perms: [Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
  });
  this.value = 1;

};

inherits(Characteristic.VolumeIR, Characteristic);

Characteristic.VolumeIR.UUID = VolumeIRUUID;

/**
 * Characteristic "MuteIR"
 */

const MuteIRUUID = 'be9ac772-4f43-11e7-b114-b2f933d5fe66';

Characteristic.MuteIR = function() {

  Characteristic.call(this, 'Mute', MuteIRUUID);
  
  this.setProps({
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
  });
  this.value = 0;

};

inherits(Characteristic.MuteIR, Characteristic);

Characteristic.MuteIR.UUID = MuteIRUUID;

/**
 * Service "FanIR"
 */

const FanIRUUID = '74ff031a-4f40-11e7-b114-b2f933d5fe66';


Service.FanIR = function(displayName, subtype) {
  Service.call(this, displayName, FanIRUUID, subtype);

  // Required Characteristics
  this.addCharacteristic(Characteristic.PushOn);

  // Optional Characteristics
  this.addOptionalCharacteristic(Characteristic.RotationSpeedIR);


};

inherits(Service.FanIR, Service);

/**
 * Service "TVIR"
 */


const TVIRUUID = 'be9ac984-4f43-11e7-b114-b2f933d5fe66';


Service.TVIR = function(displayName, subtype) {
  Service.call(this, displayName, TVIRUUID, subtype);

  this.addCharacteristic(Characteristic.PushOn);

  // Optional Characteristics
  this.addOptionalCharacteristic(Characteristic.VolumeIR);
  this.addOptionalCharacteristic(Characteristic.MuteIR);

};

inherits(Service.TVIR, Service);

module.exports = {
  Service : Service,
  Characteristic : Characteristic
};
