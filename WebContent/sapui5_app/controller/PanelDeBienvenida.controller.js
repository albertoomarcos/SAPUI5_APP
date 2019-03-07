sap.ui.define([
	"sap/ui/core/mvc/Controller",
   	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel" 
], function (Controller, MessageToast,JSONModel, ResourceModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
	   onInit : function() {
			// set data model on view
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			
			var i18nModel = new ResourceModel({
	            bundleName: "sapui5_app.i18n.i18n"
	         });
	         this.getView().setModel(i18nModel, "i18n");
		},
	   onShowHello : function() {
			// show a native JavaScript alert
			alert("Hello World");
		},
		onShowHelloToast : function() {
			MessageToast.show("Hello World with toast");
		},
		onShowHelloTraducido : function()
		{
	         var oBundle = this.getView().getModel("i18n").getResourceBundle();
	         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
	         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
	         // show message
	         MessageToast.show(sMsg);
		},
		_getDialog : function() {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("sapui5_app.view.HelloDialog", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
		onOpenDialog : function() {
			this._getDialog().open();
		},
	    onCloseDialog : function () {
	         this._getDialog().close();
	    },
		onShowError : function() {
//			alert("Error code x0002", {				
//				title : "Alerta"
//			});
			alert("Has salido (OPCIONAL)");
			this._getDialog().close();
		}
   });
});