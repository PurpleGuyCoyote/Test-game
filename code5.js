gdjs.MAP_322Code = {};
gdjs.MAP_322Code.localVariables = [];
gdjs.MAP_322Code.GDBlueBlockObjects1= [];
gdjs.MAP_322Code.GDBlueBlockObjects2= [];
gdjs.MAP_322Code.GDWallForGreenFloorObjects1= [];
gdjs.MAP_322Code.GDWallForGreenFloorObjects2= [];
gdjs.MAP_322Code.GDBackgroundColoredGrassObjects1= [];
gdjs.MAP_322Code.GDBackgroundColoredGrassObjects2= [];
gdjs.MAP_322Code.GDLeftArrowButtonObjects1= [];
gdjs.MAP_322Code.GDLeftArrowButtonObjects2= [];
gdjs.MAP_322Code.GDBasketBall1Objects1= [];
gdjs.MAP_322Code.GDBasketBall1Objects2= [];


gdjs.MAP_322Code.mapOfGDgdjs_9546MAP_9595322Code_9546GDLeftArrowButtonObjects1Objects = Hashtable.newFrom({"LeftArrowButton": gdjs.MAP_322Code.GDLeftArrowButtonObjects1});
gdjs.MAP_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.MAP_322Code.GDLeftArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MAP_322Code.mapOfGDgdjs_9546MAP_9595322Code_9546GDLeftArrowButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map choise", false);
}}

}


};

gdjs.MAP_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MAP_322Code.GDBlueBlockObjects1.length = 0;
gdjs.MAP_322Code.GDBlueBlockObjects2.length = 0;
gdjs.MAP_322Code.GDWallForGreenFloorObjects1.length = 0;
gdjs.MAP_322Code.GDWallForGreenFloorObjects2.length = 0;
gdjs.MAP_322Code.GDBackgroundColoredGrassObjects1.length = 0;
gdjs.MAP_322Code.GDBackgroundColoredGrassObjects2.length = 0;
gdjs.MAP_322Code.GDLeftArrowButtonObjects1.length = 0;
gdjs.MAP_322Code.GDLeftArrowButtonObjects2.length = 0;
gdjs.MAP_322Code.GDBasketBall1Objects1.length = 0;
gdjs.MAP_322Code.GDBasketBall1Objects2.length = 0;

gdjs.MAP_322Code.eventsList0(runtimeScene);
gdjs.MAP_322Code.GDBlueBlockObjects1.length = 0;
gdjs.MAP_322Code.GDBlueBlockObjects2.length = 0;
gdjs.MAP_322Code.GDWallForGreenFloorObjects1.length = 0;
gdjs.MAP_322Code.GDWallForGreenFloorObjects2.length = 0;
gdjs.MAP_322Code.GDBackgroundColoredGrassObjects1.length = 0;
gdjs.MAP_322Code.GDBackgroundColoredGrassObjects2.length = 0;
gdjs.MAP_322Code.GDLeftArrowButtonObjects1.length = 0;
gdjs.MAP_322Code.GDLeftArrowButtonObjects2.length = 0;
gdjs.MAP_322Code.GDBasketBall1Objects1.length = 0;
gdjs.MAP_322Code.GDBasketBall1Objects2.length = 0;


return;

}

gdjs['MAP_322Code'] = gdjs.MAP_322Code;
