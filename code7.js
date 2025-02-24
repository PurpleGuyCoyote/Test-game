gdjs.MAP_323_32P2Code = {};
gdjs.MAP_323_32P2Code.localVariables = [];
gdjs.MAP_323_32P2Code.GDWallForBlueFloorObjects1= [];
gdjs.MAP_323_32P2Code.GDWallForBlueFloorObjects2= [];
gdjs.MAP_323_32P2Code.GDBlueFloorObjects1= [];
gdjs.MAP_323_32P2Code.GDBlueFloorObjects2= [];
gdjs.MAP_323_32P2Code.GDWallForGreenFloorObjects1= [];
gdjs.MAP_323_32P2Code.GDWallForGreenFloorObjects2= [];
gdjs.MAP_323_32P2Code.GDBasketBall3Objects1= [];
gdjs.MAP_323_32P2Code.GDBasketBall3Objects2= [];
gdjs.MAP_323_32P2Code.GDBackgroundBlueGrassObjects1= [];
gdjs.MAP_323_32P2Code.GDBackgroundBlueGrassObjects2= [];
gdjs.MAP_323_32P2Code.GDBrownBlockObjects1= [];
gdjs.MAP_323_32P2Code.GDBrownBlockObjects2= [];


gdjs.MAP_323_32P2Code.mapOfGDgdjs_9546MAP_9595323_959532P2Code_9546GDBasketBall3Objects1Objects = Hashtable.newFrom({"BasketBall3": gdjs.MAP_323_32P2Code.GDBasketBall3Objects1});
gdjs.MAP_323_32P2Code.mapOfGDgdjs_9546MAP_9595323_959532P2Code_9546GDWallForBlueFloorObjects1Objects = Hashtable.newFrom({"WallForBlueFloor": gdjs.MAP_323_32P2Code.GDWallForBlueFloorObjects1});
gdjs.MAP_323_32P2Code.mapOfGDgdjs_9546MAP_9595323_959532P2Code_9546GDBasketBall3Objects1Objects = Hashtable.newFrom({"BasketBall3": gdjs.MAP_323_32P2Code.GDBasketBall3Objects1});
gdjs.MAP_323_32P2Code.mapOfGDgdjs_9546MAP_9595323_959532P2Code_9546GDBrownBlockObjects1Objects = Hashtable.newFrom({"BrownBlock": gdjs.MAP_323_32P2Code.GDBrownBlockObjects1});
gdjs.MAP_323_32P2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BasketBall3"), gdjs.MAP_323_32P2Code.GDBasketBall3Objects1);
gdjs.copyArray(runtimeScene.getObjects("WallForBlueFloor"), gdjs.MAP_323_32P2Code.GDWallForBlueFloorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.MAP_323_32P2Code.mapOfGDgdjs_9546MAP_9595323_959532P2Code_9546GDBasketBall3Objects1Objects, "Physics2", gdjs.MAP_323_32P2Code.mapOfGDgdjs_9546MAP_9595323_959532P2Code_9546GDWallForBlueFloorObjects1Objects, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map choise", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BasketBall3"), gdjs.MAP_323_32P2Code.GDBasketBall3Objects1);
gdjs.copyArray(runtimeScene.getObjects("BrownBlock"), gdjs.MAP_323_32P2Code.GDBrownBlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.MAP_323_32P2Code.mapOfGDgdjs_9546MAP_9595323_959532P2Code_9546GDBasketBall3Objects1Objects, "Physics2", gdjs.MAP_323_32P2Code.mapOfGDgdjs_9546MAP_9595323_959532P2Code_9546GDBrownBlockObjects1Objects, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAP 3 P2", false);
}}

}


};

gdjs.MAP_323_32P2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MAP_323_32P2Code.GDWallForBlueFloorObjects1.length = 0;
gdjs.MAP_323_32P2Code.GDWallForBlueFloorObjects2.length = 0;
gdjs.MAP_323_32P2Code.GDBlueFloorObjects1.length = 0;
gdjs.MAP_323_32P2Code.GDBlueFloorObjects2.length = 0;
gdjs.MAP_323_32P2Code.GDWallForGreenFloorObjects1.length = 0;
gdjs.MAP_323_32P2Code.GDWallForGreenFloorObjects2.length = 0;
gdjs.MAP_323_32P2Code.GDBasketBall3Objects1.length = 0;
gdjs.MAP_323_32P2Code.GDBasketBall3Objects2.length = 0;
gdjs.MAP_323_32P2Code.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.MAP_323_32P2Code.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.MAP_323_32P2Code.GDBrownBlockObjects1.length = 0;
gdjs.MAP_323_32P2Code.GDBrownBlockObjects2.length = 0;

gdjs.MAP_323_32P2Code.eventsList0(runtimeScene);
gdjs.MAP_323_32P2Code.GDWallForBlueFloorObjects1.length = 0;
gdjs.MAP_323_32P2Code.GDWallForBlueFloorObjects2.length = 0;
gdjs.MAP_323_32P2Code.GDBlueFloorObjects1.length = 0;
gdjs.MAP_323_32P2Code.GDBlueFloorObjects2.length = 0;
gdjs.MAP_323_32P2Code.GDWallForGreenFloorObjects1.length = 0;
gdjs.MAP_323_32P2Code.GDWallForGreenFloorObjects2.length = 0;
gdjs.MAP_323_32P2Code.GDBasketBall3Objects1.length = 0;
gdjs.MAP_323_32P2Code.GDBasketBall3Objects2.length = 0;
gdjs.MAP_323_32P2Code.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.MAP_323_32P2Code.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.MAP_323_32P2Code.GDBrownBlockObjects1.length = 0;
gdjs.MAP_323_32P2Code.GDBrownBlockObjects2.length = 0;


return;

}

gdjs['MAP_323_32P2Code'] = gdjs.MAP_323_32P2Code;
