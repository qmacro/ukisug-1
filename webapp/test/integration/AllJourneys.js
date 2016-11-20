jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"ukisug1/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"ukisug1/test/integration/pages/Worklist",
		"ukisug1/test/integration/pages/Object",
		"ukisug1/test/integration/pages/NotFound",
		"ukisug1/test/integration/pages/Browser",
		"ukisug1/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ukisug1.view."
	});

	sap.ui.require([
		"ukisug1/test/integration/WorklistJourney",
		"ukisug1/test/integration/ObjectJourney",
		"ukisug1/test/integration/NavigationJourney",
		"ukisug1/test/integration/NotFoundJourney",
		"ukisug1/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});