gdjs.MAP_321_32with_32DelBallCode = {};
gdjs.MAP_321_32with_32DelBallCode.localVariables = [];
gdjs.MAP_321_32with_32DelBallCode.GDWallForRedFloorObjects1= [];
gdjs.MAP_321_32with_32DelBallCode.GDWallForRedFloorObjects2= [];
gdjs.MAP_321_32with_32DelBallCode.GDBackgroundBlueGrassObjects1= [];
gdjs.MAP_321_32with_32DelBallCode.GDBackgroundBlueGrassObjects2= [];
gdjs.MAP_321_32with_32DelBallCode.GDIndustrialBlock4Objects1= [];
gdjs.MAP_321_32with_32DelBallCode.GDIndustrialBlock4Objects2= [];
gdjs.MAP_321_32with_32DelBallCode.GDBrownBlockObjects1= [];
gdjs.MAP_321_32with_32DelBallCode.GDBrownBlockObjects2= [];
gdjs.MAP_321_32with_32DelBallCode.GDLeftArrowButtonObjects1= [];
gdjs.MAP_321_32with_32DelBallCode.GDLeftArrowButtonObjects2= [];
gdjs.MAP_321_32with_32DelBallCode.GDBowlingBall1Objects1= [];
gdjs.MAP_321_32with_32DelBallCode.GDBowlingBall1Objects2= [];


gdjs.MAP_321_32with_32DelBallCode.mapOfGDgdjs_9546MAP_9595321_959532with_959532DelBallCode_9546GDLeftArrowButtonObjects1Objects = Hashtable.newFrom({"LeftArrowButton": gdjs.MAP_321_32with_32DelBallCode.GDLeftArrowButtonObjects1});
gdjs.MAP_321_32with_32DelBallCode.mapOfGDgdjs_9546MAP_9595321_959532with_959532DelBallCode_9546GDBowlingBall1Objects1Objects = Hashtable.newFrom({"BowlingBall1": gdjs.MAP_321_32with_32DelBallCode.GDBowlingBall1Objects1});
gdjs.MAP_321_32with_32DelBallCode.mapOfGDgdjs_9546MAP_9595321_959532with_959532DelBallCode_9546GDBrownBlockObjects1Objects = Hashtable.newFrom({"BrownBlock": gdjs.MAP_321_32with_32DelBallCode.GDBrownBlockObjects1});
gdjs.MAP_321_32with_32DelBallCode.mapOfGDgdjs_9546MAP_9595321_959532with_959532DelBallCode_9546GDBowlingBall1Objects1Objects = Hashtable.newFrom({"BowlingBall1": gdjs.MAP_321_32with_32DelBallCode.GDBowlingBall1Objects1});
gdjs.MAP_321_32with_32DelBallCode.mapOfGDgdjs_9546MAP_9595321_959532with_959532DelBallCode_9546GDIndustrialBlock4Objects1Objects = Hashtable.newFrom({"IndustrialBlock4": gdjs.MAP_321_32with_32DelBallCode.GDIndustrialBlock4Objects1});
gdjs.MAP_321_32with_32DelBallCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.MAP_321_32with_32DelBallCode.GDLeftArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MAP_321_32with_32DelBallCode.mapOfGDgdjs_9546MAP_9595321_959532with_959532DelBallCode_9546GDLeftArrowButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map choiseDelBall", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BowlingBall1"), gdjs.MAP_321_32with_32DelBallCode.GDBowlingBall1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BrownBlock"), gdjs.MAP_321_32with_32DelBallCode.GDBrownBlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.MAP_321_32with_32DelBallCode.mapOfGDgdjs_9546MAP_9595321_959532with_959532DelBallCode_9546GDBowlingBall1Objects1Objects, "Physics2", gdjs.MAP_321_32with_32DelBallCode.mapOfGDgdjs_9546MAP_9595321_959532with_959532DelBallCode_9546GDBrownBlockObjects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MAP_321_32with_32DelBallCode.GDBrownBlockObjects1 */
{for(var i = 0, len = gdjs.MAP_321_32with_32DelBallCode.GDBrownBlockObjects1.length ;i < len;++i) {
    gdjs.MAP_321_32with_32DelBallCode.GDBrownBlockObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BowlingBall1"), gdjs.MAP_321_32with_32DelBallCode.GDBowlingBall1Objects1);
gdjs.copyArray(runtimeScene.getObjects("IndustrialBlock4"), gdjs.MAP_321_32with_32DelBallCode.GDIndustrialBlock4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.MAP_321_32with_32DelBallCode.mapOfGDgdjs_9546MAP_9595321_959532with_959532DelBallCode_9546GDBowlingBall1Objects1Objects, "Physics2", gdjs.MAP_321_32with_32DelBallCode.mapOfGDgdjs_9546MAP_9595321_959532with_959532DelBallCode_9546GDIndustrialBlock4Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MAP_321_32with_32DelBallCode.GDIndustrialBlock4Objects1 */
{for(var i = 0, len = gdjs.MAP_321_32with_32DelBallCode.GDIndustrialBlock4Objects1.length ;i < len;++i) {
    gdjs.MAP_321_32with_32DelBallCode.GDIndustrialBlock4Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.MAP_321_32with_32DelBallCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MAP_321_32with_32DelBallCode.GDWallForRedFloorObjects1.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDWallForRedFloorObjects2.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDIndustrialBlock4Objects1.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDIndustrialBlock4Objects2.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDBrownBlockObjects1.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDBrownBlockObjects2.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDBowlingBall1Objects1.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDBowlingBall1Objects2.length = 0;

gdjs.MAP_321_32with_32DelBallCode.eventsList0(runtimeScene);
gdjs.MAP_321_32with_32DelBallCode.GDWallForRedFloorObjects1.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDWallForRedFloorObjects2.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDIndustrialBlock4Objects1.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDIndustrialBlock4Objects2.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDBrownBlockObjects1.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDBrownBlockObjects2.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDBowlingBall1Objects1.length = 0;
gdjs.MAP_321_32with_32DelBallCode.GDBowlingBall1Objects2.length = 0;


return;

}

gdjs['MAP_321_32with_32DelBallCode'] = gdjs.MAP_321_32with_32DelBallCode;
