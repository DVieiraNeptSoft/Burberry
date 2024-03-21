// Get Binding Context

// Replace yourField with FieldName
const context = oEvent.oSource.getBindingContext();  

// Get Entire Model
const data = context.getObject();

var obj = {};

obj = Object.assign({}, data);

obj.productMaterialsString = obj.productMaterials.fabric1 + "\n" + obj.productMaterials.fabric2 + "\n" + obj.productMaterials.fabric3
obj.productStringDescription = obj.productDescription.descriptionString;
obj.productColourCount = "Colour (" + obj.productOtherColours.colourCount + "):";
obj.productColour1 = obj.productOtherColours.colour1;
obj.productColour2 = obj.productOtherColours.colour2;
obj.productColour3 = obj.productOtherColours.colour3;

modelpageDetail.setData(obj);

oApp.to(pageDetail);