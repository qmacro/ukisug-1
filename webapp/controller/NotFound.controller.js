sap.ui.define([
		"ukisug1/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("ukisug1.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);