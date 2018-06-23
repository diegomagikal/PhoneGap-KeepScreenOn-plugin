function keepScreenOn () {
	this.screenOnFlag = false;
};

/*
* Acquire a screenlock (prevent the device from screen idle)
*/
keepScreenOn.prototype.enable = function () {
	if (this.screenOnFlag == false) {
		this.screenOnFlag = true;
		cordova.exec(null, null, 'KeepScreenOn', 'enable', []);
	}
};

/*
* Release the screenlock (enable the device screen to idle)
*/
keepScreenOn.prototype.disable = function () {
	if (this.screenOnFlag == true) {
		this.screenOnFlag = false;
		cordova.exec(null, null, 'KeepScreenOn', 'disable', []);
	}
}

/*
*	Toggle the screenlock
*/
keepScreenOn.prototype.toggle = function () {
	if (this.screenOnFlag == true) {
		this.disable();
	} else {
		this.enable();
	}
};


keepScreenOn.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.keepScreenOn = new keepScreenOn();
  return window.plugins.keepScreenOn;
};

cordova.addConstructor(keepScreenOn.install);


//module.exports = new keepScreenOn();