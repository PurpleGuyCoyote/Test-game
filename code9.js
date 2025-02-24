gdjs.ShopCode = {};
gdjs.ShopCode.localVariables = [];
gdjs.ShopCode.GDBowlingBall1Objects1= [];
gdjs.ShopCode.GDBowlingBall1Objects2= [];
gdjs.ShopCode.GDIconBackgroundObjects1= [];
gdjs.ShopCode.GDIconBackgroundObjects2= [];
gdjs.ShopCode.GDUseObjects1= [];
gdjs.ShopCode.GDUseObjects2= [];
gdjs.ShopCode.GDLeftArrowButtonObjects1= [];
gdjs.ShopCode.GDLeftArrowButtonObjects2= [];
gdjs.ShopCode.GDCopyBallObjects1= [];
gdjs.ShopCode.GDCopyBallObjects2= [];
gdjs.ShopCode.GDUSE2Objects1= [];
gdjs.ShopCode.GDUSE2Objects2= [];


gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDUseObjects1Objects = Hashtable.newFrom({"Use": gdjs.ShopCode.GDUseObjects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDLeftArrowButtonObjects1Objects = Hashtable.newFrom({"LeftArrowButton": gdjs.ShopCode.GDLeftArrowButtonObjects1});
gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDUSE2Objects1Objects = Hashtable.newFrom({"USE2": gdjs.ShopCode.GDUSE2Objects1});
gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Use"), gdjs.ShopCode.GDUseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDUseObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map choiseDelBall", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.ShopCode.GDLeftArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDLeftArrowButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map choise", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("USE2"), gdjs.ShopCode.GDUSE2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_9546ShopCode_9546GDUSE2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDBowlingBall1Objects1.length = 0;
gdjs.ShopCode.GDBowlingBall1Objects2.length = 0;
gdjs.ShopCode.GDIconBackgroundObjects1.length = 0;
gdjs.ShopCode.GDIconBackgroundObjects2.length = 0;
gdjs.ShopCode.GDUseObjects1.length = 0;
gdjs.ShopCode.GDUseObjects2.length = 0;
gdjs.ShopCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.ShopCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.ShopCode.GDCopyBallObjects1.length = 0;
gdjs.ShopCode.GDCopyBallObjects2.length = 0;
gdjs.ShopCode.GDUSE2Objects1.length = 0;
gdjs.ShopCode.GDUSE2Objects2.length = 0;

gdjs.ShopCode.eventsList0(runtimeScene);
gdjs.ShopCode.GDBowlingBall1Objects1.length = 0;
gdjs.ShopCode.GDBowlingBall1Objects2.length = 0;
gdjs.ShopCode.GDIconBackgroundObjects1.length = 0;
gdjs.ShopCode.GDIconBackgroundObjects2.length = 0;
gdjs.ShopCode.GDUseObjects1.length = 0;
gdjs.ShopCode.GDUseObjects2.length = 0;
gdjs.ShopCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.ShopCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.ShopCode.GDCopyBallObjects1.length = 0;
gdjs.ShopCode.GDCopyBallObjects2.length = 0;
gdjs.ShopCode.GDUSE2Objects1.length = 0;
gdjs.ShopCode.GDUSE2Objects2.length = 0;


return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
