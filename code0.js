gdjs.Map_32choiseCode = {};
gdjs.Map_32choiseCode.localVariables = [];
gdjs.Map_32choiseCode.GDBlackSpaceObjects1= [];
gdjs.Map_32choiseCode.GDBlackSpaceObjects2= [];
gdjs.Map_32choiseCode.GDNewPanelSpriteObjects1= [];
gdjs.Map_32choiseCode.GDNewPanelSpriteObjects2= [];
gdjs.Map_32choiseCode.GDSelectButtonMAP1Objects1= [];
gdjs.Map_32choiseCode.GDSelectButtonMAP1Objects2= [];
gdjs.Map_32choiseCode.GDNewPanelSprite2Objects1= [];
gdjs.Map_32choiseCode.GDNewPanelSprite2Objects2= [];
gdjs.Map_32choiseCode.GDSelectButtonMAP2Objects1= [];
gdjs.Map_32choiseCode.GDSelectButtonMAP2Objects2= [];
gdjs.Map_32choiseCode.GDSelectButtonMAP3Objects1= [];
gdjs.Map_32choiseCode.GDSelectButtonMAP3Objects2= [];
gdjs.Map_32choiseCode.GDNewPanelSprite3Objects1= [];
gdjs.Map_32choiseCode.GDNewPanelSprite3Objects2= [];
gdjs.Map_32choiseCode.GDBlackSpace2Objects1= [];
gdjs.Map_32choiseCode.GDBlackSpace2Objects2= [];
gdjs.Map_32choiseCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.Map_32choiseCode.GDBlackSquareDecoratedButtonObjects2= [];


gdjs.Map_32choiseCode.mapOfGDgdjs_9546Map_959532choiseCode_9546GDSelectButtonMAP1Objects1Objects = Hashtable.newFrom({"SelectButtonMAP1": gdjs.Map_32choiseCode.GDSelectButtonMAP1Objects1});
gdjs.Map_32choiseCode.mapOfGDgdjs_9546Map_959532choiseCode_9546GDSelectButtonMAP2Objects1Objects = Hashtable.newFrom({"SelectButtonMAP2": gdjs.Map_32choiseCode.GDSelectButtonMAP2Objects1});
gdjs.Map_32choiseCode.mapOfGDgdjs_9546Map_959532choiseCode_9546GDSelectButtonMAP3Objects1Objects = Hashtable.newFrom({"SelectButtonMAP3": gdjs.Map_32choiseCode.GDSelectButtonMAP3Objects1});
gdjs.Map_32choiseCode.mapOfGDgdjs_9546Map_959532choiseCode_9546GDBlackSpace2Objects1Objects = Hashtable.newFrom({"BlackSpace2": gdjs.Map_32choiseCode.GDBlackSpace2Objects1});
gdjs.Map_32choiseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SelectButtonMAP1"), gdjs.Map_32choiseCode.GDSelectButtonMAP1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Map_32choiseCode.mapOfGDgdjs_9546Map_959532choiseCode_9546GDSelectButtonMAP1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAP 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SelectButtonMAP2"), gdjs.Map_32choiseCode.GDSelectButtonMAP2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Map_32choiseCode.mapOfGDgdjs_9546Map_959532choiseCode_9546GDSelectButtonMAP2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAP 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SelectButtonMAP3"), gdjs.Map_32choiseCode.GDSelectButtonMAP3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Map_32choiseCode.mapOfGDgdjs_9546Map_959532choiseCode_9546GDSelectButtonMAP3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAP 3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackSpace2"), gdjs.Map_32choiseCode.GDBlackSpace2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Map_32choiseCode.mapOfGDgdjs_9546Map_959532choiseCode_9546GDBlackSpace2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SecretGame", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackSquareDecoratedButton"), gdjs.Map_32choiseCode.GDBlackSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map_32choiseCode.GDBlackSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Map_32choiseCode.GDBlackSquareDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Map_32choiseCode.GDBlackSquareDecoratedButtonObjects1[k] = gdjs.Map_32choiseCode.GDBlackSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Map_32choiseCode.GDBlackSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__YGameSDK__ShowVideo.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.Map_32choiseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Map_32choiseCode.GDBlackSpaceObjects1.length = 0;
gdjs.Map_32choiseCode.GDBlackSpaceObjects2.length = 0;
gdjs.Map_32choiseCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Map_32choiseCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Map_32choiseCode.GDSelectButtonMAP1Objects1.length = 0;
gdjs.Map_32choiseCode.GDSelectButtonMAP1Objects2.length = 0;
gdjs.Map_32choiseCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.Map_32choiseCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.Map_32choiseCode.GDSelectButtonMAP2Objects1.length = 0;
gdjs.Map_32choiseCode.GDSelectButtonMAP2Objects2.length = 0;
gdjs.Map_32choiseCode.GDSelectButtonMAP3Objects1.length = 0;
gdjs.Map_32choiseCode.GDSelectButtonMAP3Objects2.length = 0;
gdjs.Map_32choiseCode.GDNewPanelSprite3Objects1.length = 0;
gdjs.Map_32choiseCode.GDNewPanelSprite3Objects2.length = 0;
gdjs.Map_32choiseCode.GDBlackSpace2Objects1.length = 0;
gdjs.Map_32choiseCode.GDBlackSpace2Objects2.length = 0;
gdjs.Map_32choiseCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.Map_32choiseCode.GDBlackSquareDecoratedButtonObjects2.length = 0;

gdjs.Map_32choiseCode.eventsList0(runtimeScene);
gdjs.Map_32choiseCode.GDBlackSpaceObjects1.length = 0;
gdjs.Map_32choiseCode.GDBlackSpaceObjects2.length = 0;
gdjs.Map_32choiseCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Map_32choiseCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Map_32choiseCode.GDSelectButtonMAP1Objects1.length = 0;
gdjs.Map_32choiseCode.GDSelectButtonMAP1Objects2.length = 0;
gdjs.Map_32choiseCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.Map_32choiseCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.Map_32choiseCode.GDSelectButtonMAP2Objects1.length = 0;
gdjs.Map_32choiseCode.GDSelectButtonMAP2Objects2.length = 0;
gdjs.Map_32choiseCode.GDSelectButtonMAP3Objects1.length = 0;
gdjs.Map_32choiseCode.GDSelectButtonMAP3Objects2.length = 0;
gdjs.Map_32choiseCode.GDNewPanelSprite3Objects1.length = 0;
gdjs.Map_32choiseCode.GDNewPanelSprite3Objects2.length = 0;
gdjs.Map_32choiseCode.GDBlackSpace2Objects1.length = 0;
gdjs.Map_32choiseCode.GDBlackSpace2Objects2.length = 0;
gdjs.Map_32choiseCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.Map_32choiseCode.GDBlackSquareDecoratedButtonObjects2.length = 0;


return;

}

gdjs['Map_32choiseCode'] = gdjs.Map_32choiseCode;
