function keepScreenOn () {
	this.screenOnFlag = false;
};

/*
* Acquire a screenlock (prevent the device from screen idle)
*/
keepScreenOn.prototype.enable = function () {
	this.screenOnFlag = true;
	cordova.exec(null, null, 'KeepScreenOn', 'enable', []);
};

/*
* Release the screenlock (enable the device screen to idle)
*/
keepScreenOn.prototype.disable = function () {
	this.screenOnFlag = false;
	cordova.exec(null, null, 'KeepScreenOn', 'disable', []);
}

/*
*	Toggle the screenlock
*/
keepScreenOn.prototype.toggle = function () {
	if(this.screenOnFlag) {
		this.disable();
	} else {
		this.enable();
	}
};

module.exports = new keepScreenOn();