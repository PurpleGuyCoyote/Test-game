gdjs.Map_32choiseDelBallCode = {};
gdjs.Map_32choiseDelBallCode.localVariables = [];
gdjs.Map_32choiseDelBallCode.GDIconBackgroundObjects1= [];
gdjs.Map_32choiseDelBallCode.GDIconBackgroundObjects2= [];
gdjs.Map_32choiseDelBallCode.GDNewPanelSpriteObjects1= [];
gdjs.Map_32choiseDelBallCode.GDNewPanelSpriteObjects2= [];
gdjs.Map_32choiseDelBallCode.GDSelectButtonObjects1= [];
gdjs.Map_32choiseDelBallCode.GDSelectButtonObjects2= [];
gdjs.Map_32choiseDelBallCode.GDSelectButton2Objects1= [];
gdjs.Map_32choiseDelBallCode.GDSelectButton2Objects2= [];
gdjs.Map_32choiseDelBallCode.GDNewPanelSprite2Objects1= [];
gdjs.Map_32choiseDelBallCode.GDNewPanelSprite2Objects2= [];
gdjs.Map_32choiseDelBallCode.GDLeftArrowButtonObjects1= [];
gdjs.Map_32choiseDelBallCode.GDLeftArrowButtonObjects2= [];


gdjs.Map_32choiseDelBallCode.mapOfGDgdjs_9546Map_959532choiseDelBallCode_9546GDSelectButtonObjects1Objects = Hashtable.newFrom({"SelectButton": gdjs.Map_32choiseDelBallCode.GDSelectButtonObjects1});
gdjs.Map_32choiseDelBallCode.mapOfGDgdjs_9546Map_959532choiseDelBallCode_9546GDSelectButton2Objects1Objects = Hashtable.newFrom({"SelectButton2": gdjs.Map_32choiseDelBallCode.GDSelectButton2Objects1});
gdjs.Map_32choiseDelBallCode.mapOfGDgdjs_9546Map_959532choiseDelBallCode_9546GDLeftArrowButtonObjects1Objects = Hashtable.newFrom({"LeftArrowButton": gdjs.Map_32choiseDelBallCode.GDLeftArrowButtonObjects1});
gdjs.Map_32choiseDelBallCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SelectButton"), gdjs.Map_32choiseDelBallCode.GDSelectButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Map_32choiseDelBallCode.mapOfGDgdjs_9546Map_959532choiseDelBallCode_9546GDSelectButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAP 2 withDelBall", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SelectButton2"), gdjs.Map_32choiseDelBallCode.GDSelectButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Map_32choiseDelBallCode.mapOfGDgdjs_9546Map_959532choiseDelBallCode_9546GDSelectButton2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAP 1 with DelBall", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.Map_32choiseDelBallCode.GDLeftArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Map_32choiseDelBallCode.mapOfGDgdjs_9546Map_959532choiseDelBallCode_9546GDLeftArrowButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


};

gdjs.Map_32choiseDelBallCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Map_32choiseDelBallCode.GDIconBackgroundObjects1.length = 0;
gdjs.Map_32choiseDelBallCode.GDIconBackgroundObjects2.length = 0;
gdjs.Map_32choiseDelBallCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Map_32choiseDelBallCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Map_32choiseDelBallCode.GDSelectButtonObjects1.length = 0;
gdjs.Map_32choiseDelBallCode.GDSelectButtonObjects2.length = 0;
gdjs.Map_32choiseDelBallCode.GDSelectButton2Objects1.length = 0;
gdjs.Map_32choiseDelBallCode.GDSelectButton2Objects2.length = 0;
gdjs.Map_32choiseDelBallCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.Map_32choiseDelBallCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.Map_32choiseDelBallCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.Map_32choiseDelBallCode.GDLeftArrowButtonObjects2.length = 0;

gdjs.Map_32choiseDelBallCode.eventsList0(runtimeScene);
gdjs.Map_32choiseDelBallCode.GDIconBackgroundObjects1.length = 0;
gdjs.Map_32choiseDelBallCode.GDIconBackgroundObjects2.length = 0;
gdjs.Map_32choiseDelBallCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Map_32choiseDelBallCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Map_32choiseDelBallCode.GDSelectButtonObjects1.length = 0;
gdjs.Map_32choiseDelBallCode.GDSelectButtonObjects2.length = 0;
gdjs.Map_32choiseDelBallCode.GDSelectButton2Objects1.length = 0;
gdjs.Map_32choiseDelBallCode.GDSelectButton2Objects2.length = 0;
gdjs.Map_32choiseDelBallCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.Map_32choiseDelBallCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.Map_32choiseDelBallCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.Map_32choiseDelBallCode.GDLeftArrowButtonObjects2.length = 0;


return;

}

gdjs['Map_32choiseDelBallCode'] = gdjs.Map_32choiseDelBallCode;
