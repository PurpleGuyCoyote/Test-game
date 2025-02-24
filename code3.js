gdjs.MAP_321Code = {};
gdjs.MAP_321Code.localVariables = [];
gdjs.MAP_321Code.GDWallForRedFloorObjects1= [];
gdjs.MAP_321Code.GDWallForRedFloorObjects2= [];
gdjs.MAP_321Code.GDBackgroundBlueGrassObjects1= [];
gdjs.MAP_321Code.GDBackgroundBlueGrassObjects2= [];
gdjs.MAP_321Code.GDIndustrialBlock4Objects1= [];
gdjs.MAP_321Code.GDIndustrialBlock4Objects2= [];
gdjs.MAP_321Code.GDBrownBlockObjects1= [];
gdjs.MAP_321Code.GDBrownBlockObjects2= [];
gdjs.MAP_321Code.GDLeftArrowButtonObjects1= [];
gdjs.MAP_321Code.GDLeftArrowButtonObjects2= [];
gdjs.MAP_321Code.GDShopButtonObjects1= [];
gdjs.MAP_321Code.GDShopButtonObjects2= [];
gdjs.MAP_321Code.GDBasketBall1Objects1= [];
gdjs.MAP_321Code.GDBasketBall1Objects2= [];


gdjs.MAP_321Code.mapOfGDgdjs_9546MAP_9595321Code_9546GDLeftArrowButtonObjects1Objects = Hashtable.newFrom({"LeftArrowButton": gdjs.MAP_321Code.GDLeftArrowButtonObjects1});
gdjs.MAP_321Code.mapOfGDgdjs_9546MAP_9595321Code_9546GDShopButtonObjects1Objects = Hashtable.newFrom({"ShopButton": gdjs.MAP_321Code.GDShopButtonObjects1});
gdjs.MAP_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.MAP_321Code.GDLeftArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MAP_321Code.mapOfGDgdjs_9546MAP_9595321Code_9546GDLeftArrowButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map choise", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopButton"), gdjs.MAP_321Code.GDShopButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MAP_321Code.mapOfGDgdjs_9546MAP_9595321Code_9546GDShopButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


};

gdjs.MAP_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MAP_321Code.GDWallForRedFloorObjects1.length = 0;
gdjs.MAP_321Code.GDWallForRedFloorObjects2.length = 0;
gdjs.MAP_321Code.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.MAP_321Code.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.MAP_321Code.GDIndustrialBlock4Objects1.length = 0;
gdjs.MAP_321Code.GDIndustrialBlock4Objects2.length = 0;
gdjs.MAP_321Code.GDBrownBlockObjects1.length = 0;
gdjs.MAP_321Code.GDBrownBlockObjects2.length = 0;
gdjs.MAP_321Code.GDLeftArrowButtonObjects1.length = 0;
gdjs.MAP_321Code.GDLeftArrowButtonObjects2.length = 0;
gdjs.MAP_321Code.GDShopButtonObjects1.length = 0;
gdjs.MAP_321Code.GDShopButtonObjects2.length = 0;
gdjs.MAP_321Code.GDBasketBall1Objects1.length = 0;
gdjs.MAP_321Code.GDBasketBall1Objects2.length = 0;

gdjs.MAP_321Code.eventsList0(runtimeScene);
gdjs.MAP_321Code.GDWallForRedFloorObjects1.length = 0;
gdjs.MAP_321Code.GDWallForRedFloorObjects2.length = 0;
gdjs.MAP_321Code.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.MAP_321Code.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.MAP_321Code.GDIndustrialBlock4Objects1.length = 0;
gdjs.MAP_321Code.GDIndustrialBlock4Objects2.length = 0;
gdjs.MAP_321Code.GDBrownBlockObjects1.length = 0;
gdjs.MAP_321Code.GDBrownBlockObjects2.length = 0;
gdjs.MAP_321Code.GDLeftArrowButtonObjects1.length = 0;
gdjs.MAP_321Code.GDLeftArrowButtonObjects2.length = 0;
gdjs.MAP_321Code.GDShopButtonObjects1.length = 0;
gdjs.MAP_321Code.GDShopButtonObjects2.length = 0;
gdjs.MAP_321Code.GDBasketBall1Objects1.length = 0;
gdjs.MAP_321Code.GDBasketBall1Objects2.length = 0;


return;

}

gdjs['MAP_321Code'] = gdjs.MAP_321Code;
