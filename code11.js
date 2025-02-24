gdjs.SecretCodeCode = {};
gdjs.SecretCodeCode.localVariables = [];
gdjs.SecretCodeCode.GDIconBackgroundObjects1= [];
gdjs.SecretCodeCode.GDIconBackgroundObjects2= [];
gdjs.SecretCodeCode.GDGoldBallObjects1= [];
gdjs.SecretCodeCode.GDGoldBallObjects2= [];
gdjs.SecretCodeCode.GDBrownButtonWithShadowObjects1= [];
gdjs.SecretCodeCode.GDBrownButtonWithShadowObjects2= [];
gdjs.SecretCodeCode.GDLeftArrowButtonObjects1= [];
gdjs.SecretCodeCode.GDLeftArrowButtonObjects2= [];


gdjs.SecretCodeCode.mapOfGDgdjs_9546SecretCodeCode_9546GDLeftArrowButtonObjects1Objects = Hashtable.newFrom({"LeftArrowButton": gdjs.SecretCodeCode.GDLeftArrowButtonObjects1});
gdjs.SecretCodeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.SecretCodeCode.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SecretCodeCode.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.SecretCodeCode.GDBrownButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SecretCodeCode.GDBrownButtonWithShadowObjects1[k] = gdjs.SecretCodeCode.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.SecretCodeCode.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MAP 1GOLDBALL", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.SecretCodeCode.GDLeftArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SecretCodeCode.mapOfGDgdjs_9546SecretCodeCode_9546GDLeftArrowButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map choise", false);
}}

}


};

gdjs.SecretCodeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SecretCodeCode.GDIconBackgroundObjects1.length = 0;
gdjs.SecretCodeCode.GDIconBackgroundObjects2.length = 0;
gdjs.SecretCodeCode.GDGoldBallObjects1.length = 0;
gdjs.SecretCodeCode.GDGoldBallObjects2.length = 0;
gdjs.SecretCodeCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.SecretCodeCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.SecretCodeCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.SecretCodeCode.GDLeftArrowButtonObjects2.length = 0;

gdjs.SecretCodeCode.eventsList0(runtimeScene);
gdjs.SecretCodeCode.GDIconBackgroundObjects1.length = 0;
gdjs.SecretCodeCode.GDIconBackgroundObjects2.length = 0;
gdjs.SecretCodeCode.GDGoldBallObjects1.length = 0;
gdjs.SecretCodeCode.GDGoldBallObjects2.length = 0;
gdjs.SecretCodeCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.SecretCodeCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.SecretCodeCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.SecretCodeCode.GDLeftArrowButtonObjects2.length = 0;


return;

}

gdjs['SecretCodeCode'] = gdjs.SecretCodeCode;
