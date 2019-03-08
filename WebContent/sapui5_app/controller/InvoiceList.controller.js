sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("sapui5_app.controller.InvoiceList", {

		onInit : function () {
			 var oModel = new sap.ui.model.json.JSONModel();
	          oModel.loadData("./json/Invoices.json");
	          sap.ui.getCore().setModel(oModel);
		}

	});
});