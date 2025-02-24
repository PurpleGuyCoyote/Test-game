gdjs.MAP_321GOLDBALLCode = {};
gdjs.MAP_321GOLDBALLCode.localVariables = [];
gdjs.MAP_321GOLDBALLCode.GDWallForRedFloorObjects1= [];
gdjs.MAP_321GOLDBALLCode.GDWallForRedFloorObjects2= [];
gdjs.MAP_321GOLDBALLCode.GDBasketBall4Objects1= [];
gdjs.MAP_321GOLDBALLCode.GDBasketBall4Objects2= [];
gdjs.MAP_321GOLDBALLCode.GDBackgroundBlueGrassObjects1= [];
gdjs.MAP_321GOLDBALLCode.GDBackgroundBlueGrassObjects2= [];
gdjs.MAP_321GOLDBALLCode.GDIndustrialBlock4Objects1= [];
gdjs.MAP_321GOLDBALLCode.GDIndustrialBlock4Objects2= [];
gdjs.MAP_321GOLDBALLCode.GDGoldBlock1Objects1= [];
gdjs.MAP_321GOLDBALLCode.GDGoldBlock1Objects2= [];
gdjs.MAP_321GOLDBALLCode.GDLeftArrowButtonObjects1= [];
gdjs.MAP_321GOLDBALLCode.GDLeftArrowButtonObjects2= [];
gdjs.MAP_321GOLDBALLCode.GDGoldBlock2Objects1= [];
gdjs.MAP_321GOLDBALLCode.GDGoldBlock2Objects2= [];
gdjs.MAP_321GOLDBALLCode.GDBrownBlockObjects1= [];
gdjs.MAP_321GOLDBALLCode.GDBrownBlockObjects2= [];


gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDLeftArrowButtonObjects1Objects = Hashtable.newFrom({"LeftArrowButton": gdjs.MAP_321GOLDBALLCode.GDLeftArrowButtonObjects1});
gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDBasketBall4Objects1Objects = Hashtable.newFrom({"BasketBall4": gdjs.MAP_321GOLDBALLCode.GDBasketBall4Objects1});
gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDIndustrialBlock4Objects1Objects = Hashtable.newFrom({"IndustrialBlock4": gdjs.MAP_321GOLDBALLCode.GDIndustrialBlock4Objects1});
gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDGoldBlock1Objects1Objects = Hashtable.newFrom({"GoldBlock1": gdjs.MAP_321GOLDBALLCode.GDGoldBlock1Objects1});
gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDIndustrialBlock4Objects1Objects = Hashtable.newFrom({"IndustrialBlock4": gdjs.MAP_321GOLDBALLCode.GDIndustrialBlock4Objects1});
gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDIndustrialBlock4Objects1Objects = Hashtable.newFrom({"IndustrialBlock4": gdjs.MAP_321GOLDBALLCode.GDIndustrialBlock4Objects1});
gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDBasketBall4Objects1Objects = Hashtable.newFrom({"BasketBall4": gdjs.MAP_321GOLDBALLCode.GDBasketBall4Objects1});
gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDBrownBlockObjects1Objects = Hashtable.newFrom({"BrownBlock": gdjs.MAP_321GOLDBALLCode.GDBrownBlockObjects1});
gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDGoldBlock2Objects1Objects = Hashtable.newFrom({"GoldBlock2": gdjs.MAP_321GOLDBALLCode.GDGoldBlock2Objects1});
gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDBrownBlockObjects1Objects = Hashtable.newFrom({"BrownBlock": gdjs.MAP_321GOLDBALLCode.GDBrownBlockObjects1});
gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDBrownBlockObjects1Objects = Hashtable.newFrom({"BrownBlock": gdjs.MAP_321GOLDBALLCode.GDBrownBlockObjects1});
gdjs.MAP_321GOLDBALLCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.MAP_321GOLDBALLCode.GDLeftArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDLeftArrowButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SecretCode", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BasketBall4"), gdjs.MAP_321GOLDBALLCode.GDBasketBall4Objects1);
gdjs.copyArray(runtimeScene.getObjects("IndustrialBlock4"), gdjs.MAP_321GOLDBALLCode.GDIndustrialBlock4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDBasketBall4Objects1Objects, "Physics2", gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDIndustrialBlock4Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MAP_321GOLDBALLCode.GDIndustrialBlock4Objects1 */
gdjs.MAP_321GOLDBALLCode.GDGoldBlock1Objects1.length = 0;

{for(var i = 0, len = gdjs.MAP_321GOLDBALLCode.GDIndustrialBlock4Objects1.length ;i < len;++i) {
    gdjs.MAP_321GOLDBALLCode.GDIndustrialBlock4Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDGoldBlock1Objects1Objects, gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDIndustrialBlock4Objects1Objects), gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDIndustrialBlock4Objects1Objects), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BasketBall4"), gdjs.MAP_321GOLDBALLCode.GDBasketBall4Objects1);
gdjs.copyArray(runtimeScene.getObjects("BrownBlock"), gdjs.MAP_321GOLDBALLCode.GDBrownBlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDBasketBall4Objects1Objects, "Physics2", gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDBrownBlockObjects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MAP_321GOLDBALLCode.GDBrownBlockObjects1 */
gdjs.MAP_321GOLDBALLCode.GDGoldBlock2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDGoldBlock2Objects1Objects, gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDBrownBlockObjects1Objects), gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MAP_321GOLDBALLCode.mapOfGDgdjs_9546MAP_9595321GOLDBALLCode_9546GDBrownBlockObjects1Objects), "");
}{for(var i = 0, len = gdjs.MAP_321GOLDBALLCode.GDBrownBlockObjects1.length ;i < len;++i) {
    gdjs.MAP_321GOLDBALLCode.GDBrownBlockObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.MAP_321GOLDBALLCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MAP_321GOLDBALLCode.GDWallForRedFloorObjects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDWallForRedFloorObjects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDBasketBall4Objects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDBasketBall4Objects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDIndustrialBlock4Objects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDIndustrialBlock4Objects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDGoldBlock1Objects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDGoldBlock1Objects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDGoldBlock2Objects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDGoldBlock2Objects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDBrownBlockObjects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDBrownBlockObjects2.length = 0;

gdjs.MAP_321GOLDBALLCode.eventsList0(runtimeScene);
gdjs.MAP_321GOLDBALLCode.GDWallForRedFloorObjects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDWallForRedFloorObjects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDBasketBall4Objects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDBasketBall4Objects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDIndustrialBlock4Objects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDIndustrialBlock4Objects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDGoldBlock1Objects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDGoldBlock1Objects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDGoldBlock2Objects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDGoldBlock2Objects2.length = 0;
gdjs.MAP_321GOLDBALLCode.GDBrownBlockObjects1.length = 0;
gdjs.MAP_321GOLDBALLCode.GDBrownBlockObjects2.length = 0;


return;

}

gdjs['MAP_321GOLDBALLCode'] = gdjs.MAP_321GOLDBALLCode;
