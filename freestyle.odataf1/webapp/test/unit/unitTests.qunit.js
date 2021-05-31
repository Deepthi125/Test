/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"freestyle.odataf1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
