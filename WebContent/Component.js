sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"navigationjson/model/models",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, Device, models,JSONModel) {
   "use strict";
   return UIComponent.extend("sapui5_app.Component", {
      metadata : {
            manifest: "json"
      },
      init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
	   /***Create the model and load data from the local JSON file ***/
			
		             var oModel = new JSONModel("sapui5_app/json/Object.json");
		             oModel.setDefaultBindingMode("OneWay");
		            
		
			// set the device model
			//this.setModel(models.createDeviceModel(), "device");
			//this.getRouter().initialize();
		             
		     this.setModel(oModel, "init_data");
		     
		     
		     
		     //OTRA PRUEBA
		    var oModel = new JSONModel(oData);
		 	this.setModel(oModel);
		 	// set invoice model - local
		 	var oConfig = this.getMetadata().getConfig();
		 	var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
		 	var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal));
		 	this.setModel(oInvoiceModel, "invoice4");
		}
   });
});