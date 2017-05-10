//=============================================================================
// アクターの状態によって顔画像を変えるプラグイン
// FTKR_FacialImageDifference.js
// 作成者     : フトコロ
// 作成日     : 2017/05/10
// 最終更新日 : 
// バージョン : v1.0.0
//=============================================================================

var Imported = Imported || {};
Imported.FTKR_FID = true;

var FTKR = FTKR || {};
FTKR.FID = FTKR.FID || {};

//=============================================================================
/*:
 * @plugindesc v1.0.0 アクターの状態によって顔画像を変えるプラグイン
 * @author フトコロ
 *
 * @noteParam FID_画像
 * @noteRequire 1
 * @noteDir img/face/
 * @noteType file
 * @noteData actors
 * 
 * @param Enable Custom Index
 * @desc 顔画像番号の変更設定を有効にするか
 * 1 - 有効にする, 0 - 無効にする
 * @default 0
 * 
 * @param --画像番号変更--
 * @desc 
 * 
 * @param Walk Face Index
 * @desc 前進時の顔画像番号を設定します
 * @default 0
 * 
 * @param Wait Face Index
 * @desc 待機時の顔画像番号を設定します
 * @default 0
 * 
 * @param Chant Face Index
 * @desc 詠唱時の顔画像番号を設定します
 * @default 0
 * 
 * @param Gurad Face Index
 * @desc 防御時の顔画像番号を設定します
 * @default 0
 * 
 * @param Damage Face Index
 * @desc ダメージ時の顔画像番号を設定します
 * @default 0
 * 
 * @param Evade Face Index
 * @desc 回避時の顔画像番号を設定します
 * @default 0
 * 
 * @param Thrust Face Index
 * @desc 突き時の顔画像番号を設定します
 * @default 0
 * 
 * @param Swing Face Index
 * @desc 払い時の顔画像番号を設定します
 * @default 0
 * 
 * @param Missile Face Index
 * @desc 飛び道具時の顔画像番号を設定します
 * @default 0
 * 
 * @param Skill Face Index
 * @desc 防御使用時の顔画像番号を設定します
 * @default 0
 * 
 * @param Spell Face Index
 * @desc 魔法使用時の顔画像番号を設定します
 * @default 0
 * 
 * @param Item Face Index
 * @desc アイテム使用時の顔画像番号を設定します
 * @default 0
 * 
 * @param Escape Face Index
 * @desc 逃走時の顔画像番号を設定します
 * @default 0
 * 
 * @param Victory Face Index
 * @desc 戦闘勝利時の顔画像番号を設定します
 * @default 0
 * 
 * @param Dying Face Index
 * @desc 瀕死時の顔画像番号を設定します
 * @default 0
 * 
 * @param Abnormal Face Index
 * @desc 状態異常時の顔画像番号を設定します
 * @default 0
 * 
 * @param Sleep Face Index
 * @desc 睡眠時の顔画像番号を設定します
 * @default 0
 * 
 * @param Dead Face Index
 * @desc 戦闘不能時の顔画像番号を設定します
 * @default 0
 * 
 * @param --FTKR_ExSvMotionの設定--
 * @desc 
 * 
 * @param Recovery Face Index
 * @desc HP回復時の顔画像番号を設定します
 * @default 0
 * 
 * @param Custom1 Face Index
 * @desc Custom1の時の顔画像番号を設定します
 * @default 0
 * 
 * @param Custom2 Face Index
 * @desc Custom2の時の顔画像番号を設定します
 * @default 0
 * 
 * @param Custom3 Face Index
 * @desc Custom3の時の顔画像番号を設定します
 * @default 0
 * 
 * @param Custom4 Face Index
 * @desc Custom4の時の顔画像番号を設定します
 * @default 0
 * 
 * @param Custom5 Face Index
 * @desc Custom5の時の顔画像番号を設定します
 * @default 0
 * 
 * @param Custom6 Face Index
 * @desc Custom6の時の顔画像番号を設定します
 * @default 0
 * 
 * @param Custom7 Face Index
 * @desc Custom7の時の顔画像番号を設定します
 * @default 0
 * 
 * @param Custom8 Face Index
 * @desc Custom8の時の顔画像番号を設定します
 * @default 0
 * 
 * @help
 *-----------------------------------------------------------------------------
 * 概要
 *-----------------------------------------------------------------------------
 * 本プラグインを実装することで、アクターのさまざまな状態において
 * 表示する顔画像を変更します。
 * 
 * 
 *-----------------------------------------------------------------------------
 * 設定方法
 *-----------------------------------------------------------------------------
 * 1.「プラグインマネージャー(プラグイン管理)」に、本プラグインを追加して
 *    ください。
 * 
 * 
 * 2. 他プラグインと組み合わせる場合
 *    当プラグインは以下のプラグインよりも下にしてください。
 *      FTKR_CustomSimpleActorStatus
 *      FTKR_ExSvMotion
 * 
 * 
 *-----------------------------------------------------------------------------
 * アクターの顔画像について
 *-----------------------------------------------------------------------------
 * 本プラグインを使用する場合、アクターの顔画像は以下の規格のものを
 * 使用してください。
 * 
 * 一つの顔画像サイズ：144 * 144
 * 一つのファイルには、顔画像を横に６列、縦に３行まで配置できます。
 * 顔画像の番号は、左上を 0番、一つ右を 1番、一つ下を 6番と数えます。
 * 一つの画像ファイルで最大18種類の顔画像を設定できます。
 * 
 * ファイルは、img/face/ フォルダに保存してください。
 * 
 * 指定されて番号の箇所に、画像がない場合は空欄で表示されますので
 * 注意してください。
 * 
 * 
 *-----------------------------------------------------------------------------
 * 基本仕様
 *-----------------------------------------------------------------------------
 * 本プラグインを単独で使用する場合、アクターのステート状態によって
 * メニュー画面で表示する顔画像は、以下の番号の顔画像なります。
 * 
 * 通常　　： 1番
 * 状態異常： 15番
 * 睡眠　　： 16番
 * 戦闘不能： 17番
 * 
 * 
 * プラグインパラメータ<Enable Custom Index>を有効にした場合は
 * --画像番号変更--以降のパラメータで設定した番号の顔画像を使用します。
 * 
 * 
 *-----------------------------------------------------------------------------
 * FTKR_CustomSimpleActorStatus と併用する場合
 *-----------------------------------------------------------------------------
 * FTKR_CustomSimpleActorStatusの設定によって表示する顔画像を変更します。
 * 使用する番号は、基本仕様と同じです。
 * 
 * また、FTKR_CustomSimpleActorStatusの拡張プラグインによって、
 * メニュー以外に表示した顔画像についても、同様に変更します。
 * 
 *-----------------------------------------------------------------------------
 * FTKR_CSS_BattleStatus と併用する場合
 *-----------------------------------------------------------------------------
 * バトル中のアクターの状態によって、顔画像を変更します。
 * 
 * 以下の状態は、一時的に顔画像を以下の番号に変更します。
 * ダメージ　　： 4番
 * 回避　　　　： 5番
 * 突き使用　　： 6番
 * 払い使用　　： 7番
 * 飛び道具使用： 8番
 * スキル使用　： 9番
 * 魔法使用　　： 10番
 * アイテム使用： 11番
 * 
 * 以下の状態でいる間は、顔画像を以下の番号に変更します。
 * 入力中　　　： 0番
 * 待機　　　　： 1番
 * 詠唱中　　　： 2番
 * 防御中　　　： 3番
 * 逃走中　　　： 12番
 * 戦闘勝利中　： 13番
 * 瀕死時　　　： 14番
 * 状態異常時　： 15番
 * 睡眠時　　　： 16番
 * 戦闘不能時　： 17番
 * 
 * なお、プラグインパラメータ<Enable Custom Index>を有効にした場合は
 * --画像番号変更--以降のパラメータで設定した番号の顔画像を使用します。
 * 
 * 
 *-----------------------------------------------------------------------------
 * FTKR_ExSvMotion と併用する場合
 *-----------------------------------------------------------------------------
 * FTKR_ExSvMotionの設定によって表示する顔画像を変更します。
 * 
 * FTKR_ExSvMotionの設定で、各状態のモーションを変更していた場合は、
 * その設定に合わせて、顔画像も同じモーションの番号の画像に変更します。
 * 
 * 
 * なお、プラグインパラメータ<Enable Custom Index>を有効にした場合は
 * --画像番号変更--以降のパラメータで設定した番号の顔画像を使用します。
 * 
 * また、回復時、およびカスタムモーション時に使用するの顔画像番号を
 * 設定できます。
 * 
 * 
 * 別画像モーション時には、アクターのメモ欄で設定した顔画像ファイルを
 * 使用します。
 * アクターのメモ欄に以下のタグを追記してください。
 * 
 * <FID_顔画像:filename>
 * <FID_FACE_IMAGE:filename>
 * 
 * 画像ファイル filename.png は img/face/ に保存してください。
 * 
 * 
 *-----------------------------------------------------------------------------
 * 本プラグインのライセンスについて(License)
 *-----------------------------------------------------------------------------
 * 本プラグインはMITライセンスのもとで公開しています。
 * This plugin is released under the MIT License.
 * 
 * Copyright (c) 2017 Futokoro
 * http://opensource.org/licenses/mit-license.php
 * 
 * 
 *-----------------------------------------------------------------------------
 * 変更来歴
 *-----------------------------------------------------------------------------
 * 
 * v1.0.0 - 2017/05/10 : 初版作成
 * 
 *-----------------------------------------------------------------------------
 */
//=============================================================================

//=============================================================================
// プラグイン パラメータ
//=============================================================================
FTKR.FID.parameters = PluginManager.parameters('FTKR_FacialImageDifference');
FTKR.FID.enableCustomIndex = Number(FTKR.FID.parameters['Enable Custom Index'] || 0);

//オリジナルステータス設定オブジェクト
FTKR.FID.faces = {
    wait    :Number(FTKR.FID.parameters['Wait Face Index'] || 0),
    walk    :Number(FTKR.FID.parameters['Walk Face Index'] || 0),
    chant   :Number(FTKR.FID.parameters['Chant Face Index'] || 0),
    guard   :Number(FTKR.FID.parameters['Guard Face Index'] || 0),
    damage  :Number(FTKR.FID.parameters['Damage Face Index'] || 0),
    evade   :Number(FTKR.FID.parameters['Evade Face Index'] || 0),
    thrust  :Number(FTKR.FID.parameters['Thrust Face Index'] || 0),
    swing   :Number(FTKR.FID.parameters['Swing Face Index'] || 0),
    missile :Number(FTKR.FID.parameters['Missile Face Index'] || 0),
    skill   :Number(FTKR.FID.parameters['Skill Face Index'] || 0),
    spell   :Number(FTKR.FID.parameters['Spell Face Index'] || 0),
    item    :Number(FTKR.FID.parameters['Item Face Index'] || 0),
    escape  :Number(FTKR.FID.parameters['Escape Face Index'] || 0),
    victory :Number(FTKR.FID.parameters['Victory Face Index'] || 0),
    dying   :Number(FTKR.FID.parameters['Dying Face Index'] || 0),
    abnormal:Number(FTKR.FID.parameters['Abnormal Face Index'] || 0),
    sleep   :Number(FTKR.FID.parameters['Sleep Face Index'] || 0),
    dead    :Number(FTKR.FID.parameters['Dead Face Index'] || 0),
    recovery:Number(FTKR.FID.parameters['recovery Face Index'] || 0),
    custom1 :Number(FTKR.FID.parameters['Custom1 Face Index'] || 0),
    custom2 :Number(FTKR.FID.parameters['Custom2 Face Index'] || 0),
    custom3 :Number(FTKR.FID.parameters['Custom3 Face Index'] || 0),
    custom4 :Number(FTKR.FID.parameters['Custom4 Face Index'] || 0),
    custom5 :Number(FTKR.FID.parameters['Custom5 Face Index'] || 0),
    custom6 :Number(FTKR.FID.parameters['Custom6 Face Index'] || 0),
    custom7 :Number(FTKR.FID.parameters['Custom7 Face Index'] || 0),
    custom8 :Number(FTKR.FID.parameters['Custom8 Face Index'] || 0),
};

//objのメモ欄から <metacode: x> の値を読み取って配列で返す
var readObjectMeta = function(obj, metacodes) {
    if (!obj) return false;
    metacodes.some(function(metacode){
        var metaReg = new RegExp('<' + metacode + ':[ ]*(.+)>', 'i');
        return obj.note.match(metaReg);
    }); 
    return RegExp.$1 ? RegExp.$1 : false;
};

//=============================================================================
// バトラーに顔画像の設定を追加
//=============================================================================

FTKR.FID.Game_Battler_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
    FTKR.FID.Game_Battler_initMembers.call(this);
    this._faceType = null;
    this._faceRefresh = false;
};

FTKR.FID.Game_Battler_requestMotion = Game_Battler.prototype.requestMotion;
Game_Battler.prototype.requestMotion = function(motionType) {
    FTKR.FID.Game_Battler_requestMotion.call(this, motionType);
    this._faceType = this._motionType;
};

Game_Battler.prototype.isFaceRequested = function() {
    return !!this._faceType;
};

Game_Battler.prototype.faceType = function() {
    return this._faceType;
};

Game_Battler.prototype.clearFace = function() {
    this._faceType = null;
    this._faceRefresh = false;
};

Game_Battler.prototype.isFaceRefreshRequested = function() {
    return this._faceRefresh;
};

Game_Battler.prototype.requestFaceRefresh = function() {
    this._faceRefresh = true;
};

FTKR.FID.Game_Battler_setActionState = Game_Battler.prototype.setActionState;
Game_Battler.prototype.setActionState = function(actionState) {
    FTKR.FID.Game_Battler_setActionState.call(this, actionState);
    this.requestFaceRefresh();
};

FTKR.FID.Game_Party_requestMotionRefresh = Game_Party.prototype.requestMotionRefresh;
Game_Party.prototype.requestMotionRefresh = function() {
    FTKR.FID.Game_Party_requestMotionRefresh.call(this);
    this.members().forEach(function(actor) {
        actor.requestFaceRefresh();
    });
};

//=============================================================================
// ステートモーションを取得する
//=============================================================================
if (!Game_Actor.prototype.getStateMotion) {
Game_Actor.prototype.getStateMotion = function() {
    if(Imported.FTKR_ESM) {
        return this.getEsmMotion();
    } else {
        switch (this.stateMotionIndex()) {
            case 1: return 'abnormal';
            case 2: return 'sleep';
            case 3: return 'dead';
        }
        return 'wait';
    }
};
}

//=============================================================================
// アクターの顔画像表示処理を修正
//=============================================================================

FTKR.FID.Window_Base_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function(x, y, width, height) {
    FTKR.FID.Window_Base_initialize.call(this, x, y, width, height);
    this._faceSprite = [];
};

//書き換え
Window_Base.prototype.drawActorFace = function(actor, x, y, width, height) {
    width = width || Window_Base._faceWidth;
    height = height || Window_Base._faceHeight;
    this.drawCssFace(actor, x, y, width, height);
};

Window_Base.prototype.showActorNum = function() {
    return this.maxPageItems ? this.maxPageItems() : 1;
};

//書き換え
Window_Base.prototype.drawCssFace = function(actor, dx, dy, width, height) {
    var index = actor.index() % this.showActorNum();
    var sprite = this._faceSprite[index];
    var fh = Window_Base._faceHeight;
    if (!sprite) {
        sprite = new Sprite_ActorFace(actor);
        this.addChild(sprite);
        this._faceSprite[index] = sprite;
    } else {
        sprite.setBattler(actor);
    }
    var sx = Math.floor(dx + width / 2 + this.padding);
    var sy = Math.floor(dy + height + this.padding);
    sprite.setHome(sx, sy);
    sprite.startMove(0,0,0);
    if (Imported.FTKR_CSS) {
        var scale = (Math.min(width, height) || fh) / fh;
        sprite.setScale(scale);
    }
    var stateMotion = actor.getStateMotion();
    sprite.startMotion(stateMotion);
};

FTKR.FID.Window_Base_clearCssSprite = Window_Base.prototype.clearCssSprite;
Window_Base.prototype.clearCssSprite = function(index) {
    FTKR.FID.Window_Base_clearCssSprite.call(this, index);
    this._faceSprite[index].setBattler();
};

//=============================================================================
// Sprite_ActorFace
// アクターの顔画像表示スプライト
//=============================================================================

function Sprite_ActorFace() {
    this.initialize.apply(this, arguments);
}

Sprite_ActorFace.prototype = Object.create(Sprite_Actor.prototype);
Sprite_ActorFace.prototype.constructor = Sprite_ActorFace;

Sprite_ActorFace.prototype.initialize = function(battler) {
    Sprite_Battler.prototype.initialize.call(this, battler);
};

Sprite_ActorFace._imageWidth  = 144;
Sprite_ActorFace._imageHeight = 144;

Sprite_ActorFace.prototype.initMembers = function() {
    Sprite_Battler.prototype.initMembers.call(this);
    this._battlerName = '';
    this._motion = null;
    this._motionCount = 0;
    this._pattern = 0;
    this._faceType = '';
    this.createMainSprite();
};

Sprite_ActorFace.prototype.setBattler = function(battler) {
    Sprite_Battler.prototype.setBattler.call(this, battler);
    var changed = (battler !== this._actor);
    if (changed) {
        this._actor = battler;
        this.startEntryMotion();
    }
};

Sprite_ActorFace.prototype.update = function() {
    Sprite_Battler.prototype.update.call(this);
    if (this._actor) {
        this.updateMotion();
    }
};

Sprite_ActorFace.prototype.updateMain = function() {
    Sprite_Battler.prototype.updateMain.call(this);
};

Sprite_ActorFace.prototype.setupMotion = function() {
    if (this._actor.isFaceRequested()) {
        this.startMotion(this._actor.faceType());
        this._actor.clearFace();
    }
};

Sprite_ActorFace.prototype.updateBitmap = function() {
    Sprite_Battler.prototype.updateBitmap.call(this);
    var name = Imported.FTKR_ESM && this.isOtherMotion() ? this.otherBattlerName() : this._actor.faceName();
    if (this._battlerName !== name) {
        this._battlerName = name;
        this._mainSprite.bitmap = ImageManager.loadFace(name);
    }
};

Sprite_ActorFace.prototype.otherBattlerName = function() {
    return readObjectMeta(this._actor.actor(), ['FID_顔画像', 'FID_FACE_IMAGE']);
};

Sprite_ActorFace.prototype.updateFrame = function() {
    Sprite_Battler.prototype.updateFrame.call(this);
    var bitmap = this._mainSprite.bitmap;
    if (bitmap) {
        var motionIndex = this.faceTypeIndex();
        var cw = Sprite_ActorFace._imageWidth;
        var ch = Sprite_ActorFace._imageHeight;
        var cx = motionIndex % 6;
        var cy = Math.floor(motionIndex / 6);
        this._mainSprite.setFrame(cx * cw, cy * ch, cw, ch);
    }
};

Sprite_ActorFace.prototype.startMotion = function(motionType) {
    Sprite_Actor.prototype.startMotion.call(this, motionType);
    if (this._faceType !== motionType) {
        this._faceType = motionType;
    }
};

Sprite_ActorFace.prototype.faceTypeIndex = function() {
    if (!this._motion) return 0;
    if (FTKR.FID.enableCustomIndex) {
        var faceType = Imported.FTKR_ESM ? 
            this.convertOtherMotion(this.motionName()) :
            this._faceType;
        return FTKR.FID.faces[faceType];
    } else {
        return this._motion.index;
    }
};

Sprite_ActorFace.prototype.updateMotion = function() {
    this.setupMotion();
    if (this._actor.isMotionRefreshRequested()) {
        this.refreshMotion();
        this._actor.clearFace();
    }
    this.updateMotionCount();
};

Sprite_ActorFace.prototype.setScale = function(scale) {
    this.scale._x = scale;
    this.scale._y = scale;
};
