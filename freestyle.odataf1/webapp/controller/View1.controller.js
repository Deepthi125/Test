sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("freestyle.odataf1.controller.View1", {
			onInit: function () {
            this._OdataDisplay();
            },

        _OdataLoadfragment:function(){
            this.fragmentLoad = sap.ui.xmlfragment(this.getView().getId(),
            "freestyle.odataf1.view.Input",this);
            this.getView().addDependent(this.fragmentLoad);
            this.fragmentLoad.open();
        },     

        _OdataDisplay:function(){            
           var that = this;
           this.getOwnerComponent().getModel().read("/Products",{
               success:function(odata, response){
                  var oModel = new sap.ui.model.json.JSONModel(odata);
                  that.getView().setModel(oModel);
                  sap.m.MessageToast.show("Rrefreshed");
               }
           });
        },
        
        _OdataCreate: function(){
           var that = this;
           var newRow = {
               "ID": 14,
               "Name": "Cake",
               "Description": "Mango",
               "ReleaseDate": "\/Date(694224000000)\/", 
               "DiscontinuedDate": null,
               "Rating": 4,
               "Price": "9.5"
           }
           this.getOwnerComponent().getModel().create("/Products", newRow, {
               success:function(odata, response){
                  sap.m.MessageToast.show("Successfully Inserted");
                  that._OdataDisplay();
               }
           });           
        },

        _OdataUpdate: function(){
           var that = this;
           var newRow = {
               "ID": 14,
               "Name": "Cake",
               "Description": "Red Bee",
               "ReleaseDate": "\/Date(694224000000)\/", 
               "DiscontinuedDate": null,
               "Rating": 4,
               "Price": "11"
           }
           this.getOwnerComponent().getModel().update("/Products(14)", newRow, {
               success:function(odata, response){
                  sap.m.MessageToast.show("Successfully Updated");
                  that._OdataDisplay();
               }
           });           
        },

        _OdataDelete: function(){
            var that = this;
            this.getOwnerComponent().getModel().remove("/Products(14)", {
                success:function(odata, response){
                  sap.m.MessageToast.show("Successfully Deleted");
                  that._OdataDisplay();
               }
            });
        }
        
		});
	});
