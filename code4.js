gdjs.MAP_322_32withDelBallCode = {};
gdjs.MAP_322_32withDelBallCode.localVariables = [];
gdjs.MAP_322_32withDelBallCode.GDBlueBlockObjects1= [];
gdjs.MAP_322_32withDelBallCode.GDBlueBlockObjects2= [];
gdjs.MAP_322_32withDelBallCode.GDWallForGreenFloorObjects1= [];
gdjs.MAP_322_32withDelBallCode.GDWallForGreenFloorObjects2= [];
gdjs.MAP_322_32withDelBallCode.GDBackgroundColoredGrassObjects1= [];
gdjs.MAP_322_32withDelBallCode.GDBackgroundColoredGrassObjects2= [];
gdjs.MAP_322_32withDelBallCode.GDLeftArrowButtonObjects1= [];
gdjs.MAP_322_32withDelBallCode.GDLeftArrowButtonObjects2= [];
gdjs.MAP_322_32withDelBallCode.GDBowlingBall1Objects1= [];
gdjs.MAP_322_32withDelBallCode.GDBowlingBall1Objects2= [];


gdjs.MAP_322_32withDelBallCode.mapOfGDgdjs_9546MAP_9595322_959532withDelBallCode_9546GDLeftArrowButtonObjects1Objects = Hashtable.newFrom({"LeftArrowButton": gdjs.MAP_322_32withDelBallCode.GDLeftArrowButtonObjects1});
gdjs.MAP_322_32withDelBallCode.mapOfGDgdjs_9546MAP_9595322_959532withDelBallCode_9546GDBowlingBall1Objects1Objects = Hashtable.newFrom({"BowlingBall1": gdjs.MAP_322_32withDelBallCode.GDBowlingBall1Objects1});
gdjs.MAP_322_32withDelBallCode.mapOfGDgdjs_9546MAP_9595322_959532withDelBallCode_9546GDBlueBlockObjects1Objects = Hashtable.newFrom({"BlueBlock": gdjs.MAP_322_32withDelBallCode.GDBlueBlockObjects1});
gdjs.MAP_322_32withDelBallCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.MAP_322_32withDelBallCode.GDLeftArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MAP_322_32withDelBallCode.mapOfGDgdjs_9546MAP_9595322_959532withDelBallCode_9546GDLeftArrowButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map choiseDelBall", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueBlock"), gdjs.MAP_322_32withDelBallCode.GDBlueBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("BowlingBall1"), gdjs.MAP_322_32withDelBallCode.GDBowlingBall1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.MAP_322_32withDelBallCode.mapOfGDgdjs_9546MAP_9595322_959532withDelBallCode_9546GDBowlingBall1Objects1Objects, "Physics2", gdjs.MAP_322_32withDelBallCode.mapOfGDgdjs_9546MAP_9595322_959532withDelBallCode_9546GDBlueBlockObjects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MAP_322_32withDelBallCode.GDBlueBlockObjects1 */
{for(var i = 0, len = gdjs.MAP_322_32withDelBallCode.GDBlueBlockObjects1.length ;i < len;++i) {
    gdjs.MAP_322_32withDelBallCode.GDBlueBlockObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.MAP_322_32withDelBallCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MAP_322_32withDelBallCode.GDBlueBlockObjects1.length = 0;
gdjs.MAP_322_32withDelBallCode.GDBlueBlockObjects2.length = 0;
gdjs.MAP_322_32withDelBallCode.GDWallForGreenFloorObjects1.length = 0;
gdjs.MAP_322_32withDelBallCode.GDWallForGreenFloorObjects2.length = 0;
gdjs.MAP_322_32withDelBallCode.GDBackgroundColoredGrassObjects1.length = 0;
gdjs.MAP_322_32withDelBallCode.GDBackgroundColoredGrassObjects2.length = 0;
gdjs.MAP_322_32withDelBallCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.MAP_322_32withDelBallCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.MAP_322_32withDelBallCode.GDBowlingBall1Objects1.length = 0;
gdjs.MAP_322_32withDelBallCode.GDBowlingBall1Objects2.length = 0;

gdjs.MAP_322_32withDelBallCode.eventsList0(runtimeScene);
gdjs.MAP_322_32withDelBallCode.GDBlueBlockObjects1.length = 0;
gdjs.MAP_322_32withDelBallCode.GDBlueBlockObjects2.length = 0;
gdjs.MAP_322_32withDelBallCode.GDWallForGreenFloorObjects1.length = 0;
gdjs.MAP_322_32withDelBallCode.GDWallForGreenFloorObjects2.length = 0;
gdjs.MAP_322_32withDelBallCode.GDBackgroundColoredGrassObjects1.length = 0;
gdjs.MAP_322_32withDelBallCode.GDBackgroundColoredGrassObjects2.length = 0;
gdjs.MAP_322_32withDelBallCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.MAP_322_32withDelBallCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.MAP_322_32withDelBallCode.GDBowlingBall1Objects1.length = 0;
gdjs.MAP_322_32withDelBallCode.GDBowlingBall1Objects2.length = 0;


return;

}

gdjs['MAP_322_32withDelBallCode'] = gdjs.MAP_322_32withDelBallCode;
