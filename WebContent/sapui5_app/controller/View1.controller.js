sap.ui.define([
	"sap/ui/core/mvc/Controller"

], function(Controller) {
	"use strict";

	return Controller.extend("sapui5_app.controller.View1", {
		onInit: function() {
			/*this below code for get the JSON Model form Manifest.json file*/
			// var dataModel = this.getOwnerComponent().getModel("tableData");					
			//this.getView().setModel(dataModel, "DataModel");

		},
//		/*this below code for cilck on row the the page will navgate to next View*/
//		onPress: function(oEvent) {
//			var spath = oEvent.getSource().getBindingContext("DataModel").getPath();
//			var selectedPath = JSON.stringify(oEvent.getSource().getBindingContext("DataModel").getProperty(spath));
//			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//			oRouter.navTo("View2", {
//				"selectedobj": selectedPath
//			});
//		},
//		/*this below code for selected the row data and then navigate to next View */
//		onselectionChange: function() {
//			var contexts = this.getView().byId("table1").getSelectedContexts();
//			var items = contexts.map(function(c) {
//				return c.getObject();
//			});
//			var selectedItems = JSON.stringify(items);
//			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//			oRouter.navTo("View2", {
//				"selectedobj": selectedItems
//			});
//
//		}
	});

});