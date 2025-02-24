gdjs.MAP_323Code = {};
gdjs.MAP_323Code.localVariables = [];
gdjs.MAP_323Code.GDBackgroundBlueDesertObjects1= [];
gdjs.MAP_323Code.GDBackgroundBlueDesertObjects2= [];
gdjs.MAP_323Code.GDWallForGreenFloorObjects1= [];
gdjs.MAP_323Code.GDWallForGreenFloorObjects2= [];
gdjs.MAP_323Code.GDBlueFloorObjects1= [];
gdjs.MAP_323Code.GDBlueFloorObjects2= [];
gdjs.MAP_323Code.GDBasketBall1Objects1= [];
gdjs.MAP_323Code.GDBasketBall1Objects2= [];
gdjs.MAP_323Code.GDWallForBlueFloorObjects1= [];
gdjs.MAP_323Code.GDWallForBlueFloorObjects2= [];


gdjs.MAP_323Code.mapOfGDgdjs_9546MAP_9595323Code_9546GDBasketBall1Objects1Objects = Hashtable.newFrom({"BasketBall1": gdjs.MAP_323Code.GDBasketBall1Objects1});
gdjs.MAP_323Code.mapOfGDgdjs_9546MAP_9595323Code_9546GDWallForBlueFloorObjects1Objects = Hashtable.newFrom({"WallForBlueFloor": gdjs.MAP_323Code.GDWallForBlueFloorObjects1});
gdjs.MAP_323Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BasketBall1"), gdjs.MAP_323Code.GDBasketBall1Objects1);
gdjs.copyArray(runtimeScene.getObjects("WallForBlueFloor"), gdjs.MAP_323Code.GDWallForBlueFloorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.MAP_323Code.mapOfGDgdjs_9546MAP_9595323Code_9546GDBasketBall1Objects1Objects, "Physics2", gdjs.MAP_323Code.mapOfGDgdjs_9546MAP_9595323Code_9546GDWallForBlueFloorObjects1Objects, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAP 3 P2", false);
}}

}


};

gdjs.MAP_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MAP_323Code.GDBackgroundBlueDesertObjects1.length = 0;
gdjs.MAP_323Code.GDBackgroundBlueDesertObjects2.length = 0;
gdjs.MAP_323Code.GDWallForGreenFloorObjects1.length = 0;
gdjs.MAP_323Code.GDWallForGreenFloorObjects2.length = 0;
gdjs.MAP_323Code.GDBlueFloorObjects1.length = 0;
gdjs.MAP_323Code.GDBlueFloorObjects2.length = 0;
gdjs.MAP_323Code.GDBasketBall1Objects1.length = 0;
gdjs.MAP_323Code.GDBasketBall1Objects2.length = 0;
gdjs.MAP_323Code.GDWallForBlueFloorObjects1.length = 0;
gdjs.MAP_323Code.GDWallForBlueFloorObjects2.length = 0;

gdjs.MAP_323Code.eventsList0(runtimeScene);
gdjs.MAP_323Code.GDBackgroundBlueDesertObjects1.length = 0;
gdjs.MAP_323Code.GDBackgroundBlueDesertObjects2.length = 0;
gdjs.MAP_323Code.GDWallForGreenFloorObjects1.length = 0;
gdjs.MAP_323Code.GDWallForGreenFloorObjects2.length = 0;
gdjs.MAP_323Code.GDBlueFloorObjects1.length = 0;
gdjs.MAP_323Code.GDBlueFloorObjects2.length = 0;
gdjs.MAP_323Code.GDBasketBall1Objects1.length = 0;
gdjs.MAP_323Code.GDBasketBall1Objects2.length = 0;
gdjs.MAP_323Code.GDWallForBlueFloorObjects1.length = 0;
gdjs.MAP_323Code.GDWallForBlueFloorObjects2.length = 0;


return;

}

gdjs['MAP_323Code'] = gdjs.MAP_323Code;
