gdjs.SecretGameCode = {};
gdjs.SecretGameCode.localVariables = [];
gdjs.SecretGameCode.GDBlackSpaceObjects1= [];
gdjs.SecretGameCode.GDBlackSpaceObjects2= [];
gdjs.SecretGameCode.GDBlackSpace2Objects1= [];
gdjs.SecretGameCode.GDBlackSpace2Objects2= [];
gdjs.SecretGameCode.GDCubeWhiteObjects1= [];
gdjs.SecretGameCode.GDCubeWhiteObjects2= [];
gdjs.SecretGameCode.GDGreyBlockObjects1= [];
gdjs.SecretGameCode.GDGreyBlockObjects2= [];
gdjs.SecretGameCode.GDGreenBlockObjects1= [];
gdjs.SecretGameCode.GDGreenBlockObjects2= [];
gdjs.SecretGameCode.GDRedBlockObjects1= [];
gdjs.SecretGameCode.GDRedBlockObjects2= [];
gdjs.SecretGameCode.GDNewTextObjects1= [];
gdjs.SecretGameCode.GDNewTextObjects2= [];


gdjs.SecretGameCode.mapOfGDgdjs_9546SecretGameCode_9546GDCubeWhiteObjects1Objects = Hashtable.newFrom({"CubeWhite": gdjs.SecretGameCode.GDCubeWhiteObjects1});
gdjs.SecretGameCode.mapOfGDgdjs_9546SecretGameCode_9546GDBlackSpace2Objects1Objects = Hashtable.newFrom({"BlackSpace2": gdjs.SecretGameCode.GDBlackSpace2Objects1});
gdjs.SecretGameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "GG") >= 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CubeWhite"), gdjs.SecretGameCode.GDCubeWhiteObjects1);
{for(var i = 0, len = gdjs.SecretGameCode.GDCubeWhiteObjects1.length ;i < len;++i) {
    gdjs.SecretGameCode.GDCubeWhiteObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SecretGameCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.SecretGameCode.GDRedBlockObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GG");
}{for(var i = 0, len = gdjs.SecretGameCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.SecretGameCode.GDRedBlockObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SecretGameCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SecretGameCode.GDNewTextObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HAHAHA");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "GG") >= 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenBlock"), gdjs.SecretGameCode.GDGreenBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SecretGameCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedBlock"), gdjs.SecretGameCode.GDRedBlockObjects1);
{for(var i = 0, len = gdjs.SecretGameCode.GDGreenBlockObjects1.length ;i < len;++i) {
    gdjs.SecretGameCode.GDGreenBlockObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SecretGameCode.GDRedBlockObjects1.length ;i < len;++i) {
    gdjs.SecretGameCode.GDRedBlockObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SecretGameCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SecretGameCode.GDNewTextObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "HAHAHA") >= 12;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Map choise");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackSpace2"), gdjs.SecretGameCode.GDBlackSpace2Objects1);
gdjs.copyArray(runtimeScene.getObjects("CubeWhite"), gdjs.SecretGameCode.GDCubeWhiteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.SecretGameCode.mapOfGDgdjs_9546SecretGameCode_9546GDCubeWhiteObjects1Objects, "Physics2", gdjs.SecretGameCode.mapOfGDgdjs_9546SecretGameCode_9546GDBlackSpace2Objects1Objects, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SecretCode", false);
}}

}


};

gdjs.SecretGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SecretGameCode.GDBlackSpaceObjects1.length = 0;
gdjs.SecretGameCode.GDBlackSpaceObjects2.length = 0;
gdjs.SecretGameCode.GDBlackSpace2Objects1.length = 0;
gdjs.SecretGameCode.GDBlackSpace2Objects2.length = 0;
gdjs.SecretGameCode.GDCubeWhiteObjects1.length = 0;
gdjs.SecretGameCode.GDCubeWhiteObjects2.length = 0;
gdjs.SecretGameCode.GDGreyBlockObjects1.length = 0;
gdjs.SecretGameCode.GDGreyBlockObjects2.length = 0;
gdjs.SecretGameCode.GDGreenBlockObjects1.length = 0;
gdjs.SecretGameCode.GDGreenBlockObjects2.length = 0;
gdjs.SecretGameCode.GDRedBlockObjects1.length = 0;
gdjs.SecretGameCode.GDRedBlockObjects2.length = 0;
gdjs.SecretGameCode.GDNewTextObjects1.length = 0;
gdjs.SecretGameCode.GDNewTextObjects2.length = 0;

gdjs.SecretGameCode.eventsList0(runtimeScene);
gdjs.SecretGameCode.GDBlackSpaceObjects1.length = 0;
gdjs.SecretGameCode.GDBlackSpaceObjects2.length = 0;
gdjs.SecretGameCode.GDBlackSpace2Objects1.length = 0;
gdjs.SecretGameCode.GDBlackSpace2Objects2.length = 0;
gdjs.SecretGameCode.GDCubeWhiteObjects1.length = 0;
gdjs.SecretGameCode.GDCubeWhiteObjects2.length = 0;
gdjs.SecretGameCode.GDGreyBlockObjects1.length = 0;
gdjs.SecretGameCode.GDGreyBlockObjects2.length = 0;
gdjs.SecretGameCode.GDGreenBlockObjects1.length = 0;
gdjs.SecretGameCode.GDGreenBlockObjects2.length = 0;
gdjs.SecretGameCode.GDRedBlockObjects1.length = 0;
gdjs.SecretGameCode.GDRedBlockObjects2.length = 0;
gdjs.SecretGameCode.GDNewTextObjects1.length = 0;
gdjs.SecretGameCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['SecretGameCode'] = gdjs.SecretGameCode;
