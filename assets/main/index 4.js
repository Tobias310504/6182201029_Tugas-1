System.register("chunks:///_virtual/CocosInput.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, input, Input, KeyCode;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d6760Zvsw9FALebo5B+Zdj+", "CocosInput", undefined);
      var CocosInput = exports('CocosInput', /*#__PURE__*/function () {
        function CocosInput(actions) {
          this.held = false;
          this.bindings = [];
          this.actions = actions;
          input.on(Input.EventType.KEY_DOWN, this.keyDown, this);
          input.on(Input.EventType.KEY_UP, this.keyUp, this);
        }
        var _proto = CocosInput.prototype;
        _proto.bind = function bind(node, event, action) {
          node.on(event, action, this);
          this.bindings.push({
            node: node,
            event: event,
            action: action
          });
        };
        _proto.reset = function reset() {
          this.held = false;
        };
        _proto.dispose = function dispose() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.bindings), _step; !(_step = _iterator()).done;) {
            var binding = _step.value;
            binding.node.off(binding.event, binding.action, this);
          }
          this.bindings.length = 0;
          input.off(Input.EventType.KEY_DOWN, this.keyDown, this);
          input.off(Input.EventType.KEY_UP, this.keyUp, this);
        };
        _proto.keyDown = function keyDown(event) {
          if (event.keyCode === KeyCode.KEY_H) this.actions.home();else if (event.keyCode === KeyCode.ENTER && !this.actions.isPlaying()) this.actions.start();else if (event.keyCode === KeyCode.SPACE && !this.held) {
            this.held = true;
            this.actions.swing();
          } else if (event.keyCode === KeyCode.ESCAPE && this.actions.isPlaying()) this.actions.pause();
        };
        _proto.keyUp = function keyUp(event) {
          if (event.keyCode === KeyCode.SPACE) this.held = false;
        };
        return CocosInput;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CocosViewport.ts", ['cc'], function (exports) {
  var cclegacy, sys, UITransform, view, ResolutionPolicy, screen, Size, profiler;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      UITransform = module.UITransform;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
      screen = module.screen;
      Size = module.Size;
      profiler = module.profiler;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c3c885V0+NPxbMOBybMvanF", "CocosViewport", undefined);
      var CocosViewport = exports('CocosViewport', /*#__PURE__*/function () {
        function CocosViewport(screen$1) {
          var _this = this;
          this.resize = function () {
            screen.windowSize = new Size(window.innerWidth * screen.devicePixelRatio, window.innerHeight * screen.devicePixelRatio);
            _this.applyResolution();
          };
          this.screen = screen$1;
          this.applyResolution();
          view.resizeWithBrowserSize(true);
          profiler.hideStats();
          if (sys.isBrowser) {
            this.resize();
            window.addEventListener('resize', this.resize);
          }
        }
        var _proto = CocosViewport.prototype;
        _proto.dispose = function dispose() {
          if (sys.isBrowser) window.removeEventListener('resize', this.resize);
        };
        _proto.applyResolution = function applyResolution() {
          var size = this.screen.getComponent(UITransform).contentSize;
          view.setDesignResolutionSize(size.width, size.height, ResolutionPolicy.SHOW_ALL);
        };
        return CocosViewport;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CricketGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MatchSession.ts', './CricketViews.ts', './CocosInput.ts', './CocosViewport.ts', './GameAudio.ts', './ScoreStore.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, SpriteFrame, Label, AudioSource, Component, MatchSession, ScreenView, FieldView, CocosInput, CocosViewport, GameAudio, ScoreStore;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }, function (module) {
      MatchSession = module.MatchSession;
    }, function (module) {
      ScreenView = module.ScreenView;
      FieldView = module.FieldView;
    }, function (module) {
      CocosInput = module.CocosInput;
    }, function (module) {
      CocosViewport = module.CocosViewport;
    }, function (module) {
      GameAudio = module.GameAudio;
    }, function (module) {
      ScoreStore = module.ScoreStore;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33;
      cclegacy._RF.push({}, "c0b32at3xdPwpxknVPMaYHG", "CricketGame", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CricketGame = exports('CricketGame', (_dec = ccclass('CricketGame'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Sprite), _dec10 = property(Sprite), _dec11 = property([SpriteFrame]), _dec12 = property([SpriteFrame]), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property({
        tooltip: 'Normalized timing tolerance around arrival at the target.'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CricketGame, _Component);
        function CricketGame() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "homeScreen", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameplayScreen", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultScreen", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pausePanel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deliveryStart", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hitTarget", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "batsman", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "batterSprite", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ballSprite", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ballFrames", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "swingFrames", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreLabel", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "feedback", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemLabel", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pauseLabel", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lastScore", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bestScore", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultScore", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultReason", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultBest", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "soundLabel", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startButton", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "soundButton", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pauseButton", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "homeButton", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "replayButton", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultHomeButton", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resumeButton", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pauseHomeButton", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tapArea", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hitWindow", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "initialDuration", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "readyDuration", _descriptor33, _assertThisInitialized(_this));
          _this.screens = void 0;
          _this.field = void 0;
          _this.controls = void 0;
          _this.viewport = void 0;
          _this.audio = void 0;
          _this.scores = void 0;
          _this.session = void 0;
          return _this;
        }
        var _proto = CricketGame.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.screens = new ScreenView(this);
          this.field = new FieldView(this);
          this.scores = new ScoreStore();
          this.audio = new GameAudio(this.node.addComponent(AudioSource));
          this.viewport = new CocosViewport(this.homeScreen);
          this.controls = new CocosInput({
            home: function home() {
              return _this2.home();
            },
            start: function start() {
              return _this2.begin();
            },
            swing: function swing() {
              return _this2.swing();
            },
            pause: function pause() {
              return _this2.togglePause();
            },
            isPlaying: function isPlaying() {
              return _this2.screens.screen === 'game';
            }
          });
          var buttons = [[this.startButton, function () {
            return _this2.begin();
          }], [this.replayButton, function () {
            return _this2.begin();
          }], [this.homeButton, function () {
            return _this2.home();
          }], [this.resultHomeButton, function () {
            return _this2.home();
          }], [this.pauseHomeButton, function () {
            return _this2.home();
          }], [this.pauseButton, function () {
            return _this2.togglePause();
          }], [this.resumeButton, function () {
            return _this2.togglePause();
          }], [this.soundButton, function () {
            if (!_this2.audio) return;
            _this2.audio.enabled = !_this2.audio.enabled;
            _this2.screens.setSound(_this2.audio.enabled);
          }]];
          var _loop = function _loop() {
            var _buttons$_i = _buttons[_i],
              node = _buttons$_i[0],
              action = _buttons$_i[1];
            _this2.controls.bind(node, Node.EventType.TOUCH_END, function () {
              var _this2$audio;
              (_this2$audio = _this2.audio) == null || _this2$audio.play('button');
              action();
            });
          };
          for (var _i = 0, _buttons = buttons; _i < _buttons.length; _i++) {
            _loop();
          }
          this.controls.bind(this.tapArea, Node.EventType.TOUCH_START, function () {
            return _this2.swing();
          });
          this.screens.setSound(this.audio.enabled);
          this.home();
        };
        _proto.onDestroy = function onDestroy() {
          var _this$controls, _this$viewport, _this$audio;
          (_this$controls = this.controls) == null || _this$controls.dispose();
          (_this$viewport = this.viewport) == null || _this$viewport.dispose();
          (_this$audio = this.audio) == null || _this$audio.dispose();
        };
        _proto.update = function update(dt) {
          var _this$screens;
          if (((_this$screens = this.screens) == null ? void 0 : _this$screens.screen) !== 'game' || !this.session || this.session.paused) return;
          var event = this.session.tick(dt);
          this.handle(event);
          this.field.render(this.session);
        };
        _proto.home = function home() {
          var _this$controls2;
          this.session = undefined;
          (_this$controls2 = this.controls) == null || _this$controls2.reset();
          this.field.reset();
          this.screens.home(this.scores.history);
        };
        _proto.begin = function begin() {
          var _this$controls3;
          this.session = new MatchSession({
            hitWindow: this.hitWindow,
            initialDuration: this.initialDuration,
            readyDuration: this.readyDuration
          });
          (_this$controls3 = this.controls) == null || _this$controls3.reset();
          this.field.reset();
          this.screens.begin();
        };
        _proto.togglePause = function togglePause() {
          if (this.screens.screen !== 'game' || !this.session) return;
          this.session.paused = !this.session.paused;
          this.screens.setPaused(this.session.paused);
        };
        _proto.swing = function swing() {
          if (this.screens.screen !== 'game' || !this.session) return;
          this.handle(this.session.swing());
        };
        _proto.handle = function handle(event) {
          if (!event || !this.session) return;
          if (event.type === 'delivery') {
            this.field.delivery(event.kind);
            this.screens.delivery(event.kind);
          } else if (event.type === 'shot') {
            var _this$audio2, _this$audio3;
            this.field.captureShot();
            this.screens.shot(this.session.model.score, event.shot.message);
            if (event.shot.runs > 0) (_this$audio2 = this.audio) == null || _this$audio2.play(event.kind === 'bonus' ? 'bonus' : 'hit');else if (event.shot.fatal) (_this$audio3 = this.audio) == null || _this$audio3.play('out');
          } else {
            var record = this.scores.record(this.session.model.score);
            this.screens.result(this.scores.history, this.session.model.reason, record);
          }
        };
        return CricketGame;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "homeScreen", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameplayScreen", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resultScreen", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pausePanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "deliveryStart", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "hitTarget", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "batsman", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "batterSprite", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "ballSprite", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "ballFrames", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "swingFrames", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "feedback", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "itemLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "pauseLabel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lastScore", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "bestScore", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "resultScore", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "resultReason", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "resultBest", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "soundLabel", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "startButton", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "soundButton", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "pauseButton", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "homeButton", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "replayButton", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "resultHomeButton", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "resumeButton", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "pauseHomeButton", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "tapArea", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "hitWindow", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return .09;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "initialDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.85;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "readyDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return .72;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CricketViews.ts", ['cc'], function (exports) {
  var cclegacy, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9e90dc5A2JLCK0atm1uCFhN", "CricketViews", undefined);
      /** Only updates native scene nodes and labels; layout stays in Main.scene. */
      var ScreenView = exports('ScreenView', /*#__PURE__*/function () {
        function ScreenView(nodes) {
          this.screen = 'home';
          this.nodes = nodes;
        }
        var _proto = ScreenView.prototype;
        _proto.show = function show(screen) {
          this.screen = screen;
          this.nodes.homeScreen.active = screen === 'home';
          this.nodes.gameplayScreen.active = screen === 'game';
          this.nodes.resultScreen.active = screen === 'result';
          this.setPaused(false);
        };
        _proto.home = function home(history) {
          this.show('home');
          this.nodes.lastScore.string = String(history.last);
          this.nodes.bestScore.string = String(history.best);
        };
        _proto.begin = function begin() {
          this.show('game');
          this.nodes.scoreLabel.string = '0';
          this.nodes.feedback.string = 'BERSIAP...';
        };
        _proto.delivery = function delivery(kind) {
          this.nodes.feedback.string = kind === 'bomb' || kind === 'egg' ? 'JANGAN DIPUKUL!' : kind === 'bonus' ? 'BOLA BONUS +4!' : 'PUKUL DI LINGKARAN!';
        };
        _proto.shot = function shot(score, message) {
          this.nodes.scoreLabel.string = String(score);
          this.nodes.feedback.string = message;
        };
        _proto.result = function result(history, reason, record) {
          this.show('result');
          this.nodes.resultScore.string = String(history.last);
          this.nodes.resultReason.string = reason;
          this.nodes.resultBest.string = record ? 'REKOR BARU!' : "BEST  " + history.best;
        };
        _proto.setPaused = function setPaused(paused) {
          this.nodes.pausePanel.active = paused;
          this.nodes.pauseLabel.string = paused ? '▶' : 'Ⅱ';
        };
        _proto.setSound = function setSound(enabled) {
          this.nodes.soundLabel.string = enabled ? '♪' : '×';
        };
        return ScreenView;
      }());
      /** Sprite animation uses the endpoints positioned by the designer in Cocos. */
      var FieldView = exports('FieldView', /*#__PURE__*/function () {
        function FieldView(nodes) {
          this.position = new Vec3();
          this.shotStart = new Vec3();
          this.shotScale = 1;
          this.nodes = nodes;
        }
        var _proto2 = FieldView.prototype;
        _proto2.reset = function reset() {
          this.nodes.ballSprite.node.active = false;
          this.nodes.itemLabel.string = '';
          if (this.nodes.swingFrames.length) this.nodes.batterSprite.spriteFrame = this.nodes.swingFrames[0];
        };
        _proto2.delivery = function delivery(kind) {
          var index = {
            normal: 0,
            bonus: 1,
            bomb: 2,
            egg: 3
          }[kind];
          this.nodes.ballSprite.spriteFrame = this.nodes.ballFrames[index];
          this.nodes.ballSprite.node.active = true;
        };
        _proto2.captureShot = function captureShot() {
          this.shotStart.set(this.nodes.ballSprite.node.position);
          this.shotScale = this.nodes.ballSprite.node.scale.x;
          this.nodes.itemLabel.string = '';
        };
        _proto2.render = function render(session) {
          var _this$nodes = this.nodes,
            ballSprite = _this$nodes.ballSprite,
            batterSprite = _this$nodes.batterSprite,
            itemLabel = _this$nodes.itemLabel,
            swingFrames = _this$nodes.swingFrames,
            deliveryStart = _this$nodes.deliveryStart,
            hitTarget = _this$nodes.hitTarget;
          var ball = ballSprite.node;
          if (session.phase === 'delivery') {
            this.position.set(deliveryStart.position).lerp(hitTarget.position, session.progress);
            var scale = 1 - Math.min(1, session.progress) * 0.53;
            ball.setPosition(this.position);
            ball.setScale(scale, scale, 1);
            itemLabel.node.setPosition(this.position);
            itemLabel.string = session.kind === 'bonus' ? '+4' : '';
          } else if (session.phase === 'result' && session.successfulHit) {
            ball.setPosition(this.shotStart.x + session.clock * 410, this.shotStart.y + session.clock * 380);
            var _scale = Math.max(0.2, this.shotScale - session.clock * 0.25);
            ball.setScale(_scale, _scale, 1);
          } else {
            ball.active = false;
          }
          if (swingFrames.length) {
            var index = session.swingAge < 0.28 ? Math.min(swingFrames.length - 1, 1 + Math.floor(session.swingAge / 0.28 * (swingFrames.length - 1))) : 0;
            batterSprite.spriteFrame = swingFrames[index];
          }
        };
        return FieldView;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, resources, AudioClip, warn;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      AudioClip = module.AudioClip;
      warn = module.warn;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4605c5AiVJN6Jv9fNZl3ULU", "GameAudio", undefined);
      var GameAudio = exports('GameAudio', /*#__PURE__*/function () {
        function GameAudio(source) {
          var _this = this;
          this.enabled = true;
          this.disposed = false;
          this.clips = new Map();
          this.source = source;
          resources.loadDir('audio', AudioClip, function (error, clips) {
            if (_this.disposed) return;
            if (error) {
              warn('Cricket audio could not load:', error.message);
              return;
            }
            for (var _iterator = _createForOfIteratorHelperLoose(clips), _step; !(_step = _iterator()).done;) {
              var clip = _step.value;
              _this.clips.set(clip.name, clip);
            }
          });
        }
        var _proto = GameAudio.prototype;
        _proto.play = function play(effect) {
          var clip = this.clips.get(effect);
          if (this.enabled && !this.disposed && clip) this.source.playOneShot(clip, 0.35);
        };
        _proto.dispose = function dispose() {
          this.disposed = true;
          this.source.stop();
          this.clips.clear();
        };
        return GameAudio;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./migrate-canvas.ts', './CricketGame.ts', './MatchModel.ts', './MatchSession.ts', './CricketViews.ts', './CocosInput.ts', './CocosViewport.ts', './GameAudio.ts', './ScoreStore.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MatchModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5f11eEfgiVNaYRzA9Ue3EJZ", "MatchModel", undefined);
      var MatchModel = exports('MatchModel', /*#__PURE__*/function () {
        function MatchModel() {
          this.score = 0;
          this.balls = 0;
          this.combo = 0;
          this.finished = false;
          this.reason = '';
        }
        var _proto = MatchModel.prototype;
        _proto.play = function play(kind, hit, inTarget) {
          if (inTarget === void 0) {
            inTarget = false;
          }
          if (this.finished) throw new Error('Game has ended');
          var hazard = kind === 'bomb' || kind === 'egg';
          var runs = 0,
            message = '';
          if (hazard && !hit) message = 'AMAN!';else if (hazard && hit) {
            this.finished = true;
            message = kind === 'bomb' ? 'KENA BOM!' : 'KENA TELUR!';
          } else if (!hit || !inTarget) {
            this.finished = true;
            message = hit ? 'TIMING MELESET!' : 'BOLA TERLEWAT!';
          } else {
            runs = kind === 'bonus' ? 4 : 1;
            this.score += runs;
            this.combo++;
            message = "+" + runs;
          }
          this.balls++;
          if (this.finished) {
            this.combo = 0;
            this.reason = message;
          }
          return {
            runs: runs,
            fatal: this.finished,
            message: message
          };
        };
        _proto.nextKind = function nextKind(random) {
          if (random === void 0) {
            random = Math.random();
          }
          if (this.balls < 2) return 'normal';
          return random < 0.55 ? 'normal' : random < 0.75 ? 'bonus' : random < 0.89 ? 'bomb' : 'egg';
        };
        _createClass(MatchModel, [{
          key: "speed",
          get: function get() {
            return Math.min(1.9, 1 + this.score * 0.016);
          }
        }]);
        return MatchModel;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MatchSession.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MatchModel.ts'], function (exports) {
  var _createClass, cclegacy, MatchModel;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      MatchModel = module.MatchModel;
    }],
    execute: function () {
      cclegacy._RF.push({}, "51ff7RSMnpJ85Mg61ubLSS5", "MatchSession", undefined);
      /** Match timing and transitions, independent of rendering and input devices. */
      var MatchSession = exports('MatchSession', /*#__PURE__*/function () {
        function MatchSession(timing, random) {
          if (random === void 0) {
            random = Math.random;
          }
          this.model = new MatchModel();
          this.arrivalTime = 0.78;
          this.phase = 'ready';
          this.clock = 0;
          this.duration = void 0;
          this.kind = 'normal';
          this.paused = false;
          this.swingAge = 1;
          this.successfulHit = false;
          this.timing = timing;
          this.random = random;
          this.duration = timing.initialDuration;
        }
        var _proto = MatchSession.prototype;
        _proto.tick = function tick(dt) {
          if (this.paused || this.phase === 'finished') return;
          this.clock += dt;
          this.swingAge += dt;
          if (this.phase === 'ready' && this.clock >= this.timing.readyDuration) {
            this.kind = this.model.nextKind(this.random());
            this.duration = this.timing.initialDuration / this.model.speed;
            this.clock = 0;
            this.phase = 'delivery';
            return {
              type: 'delivery',
              kind: this.kind
            };
          }
          if (this.phase === 'delivery' && this.clock >= this.duration) {
            return this.resolve(false);
          }
          if (this.phase === 'result' && this.clock >= 0.72) {
            this.clock = 0;
            this.phase = this.model.finished ? 'finished' : 'ready';
            if (this.model.finished) return {
              type: 'finished'
            };
          }
        };
        _proto.swing = function swing() {
          if (this.paused || this.phase !== 'delivery') return;
          this.swingAge = 0;
          return this.resolve(true);
        };
        _proto.resolve = function resolve(hit) {
          var inTarget = Math.abs(this.clock / this.duration - this.arrivalTime) <= this.timing.hitWindow;
          var shot = this.model.play(this.kind, hit, inTarget);
          this.successfulHit = shot.runs > 0;
          this.phase = 'result';
          this.clock = 0;
          return {
            type: 'shot',
            kind: this.kind,
            shot: shot
          };
        };
        _createClass(MatchSession, [{
          key: "progress",
          get: function get() {
            return this.clock / this.duration / this.arrivalTime;
          }
        }]);
        return MatchSession;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/migrate-canvas.ts", ['cc'], function () {
  var cclegacy, director, Director, Canvas, Camera, game, Node;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
      Canvas = module.Canvas;
      Camera = module.Camera;
      game = module.game;
      Node = module.Node;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3d938QDsQdH6Zhjj5Sy+qOV", "migrate-canvas", undefined);
      var customLayerMask = 0x000fffff;
      var builtinLayerMask = 0xfff00000;
      director.on(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
        var _director$getScene, _director$getScene2, _director$getScene3;
        var roots = (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.children;
        var allCanvases = (_director$getScene2 = director.getScene()) == null ? void 0 : _director$getScene2.getComponentsInChildren(Canvas);
        if (allCanvases.length <= 1) {
          return;
        }
        allCanvases = allCanvases.filter(function (x) {
          return !!x.cameraComponent;
        });
        var allCameras = (_director$getScene3 = director.getScene()) == null ? void 0 : _director$getScene3.getComponentsInChildren(Camera);
        var usedLayer = 0;
        allCameras.forEach(function (x) {
          return usedLayer |= x.visibility & customLayerMask;
        });
        var persistCanvas = [];
        for (var i = 0, l = roots.length; i < l; i++) {
          var root = roots[i];
          if (!game.isPersistRootNode(root)) {
            continue;
          }
          var canvases = root.getComponentsInChildren(Canvas);
          if (canvases.length === 0) {
            continue;
          }
          persistCanvas.push.apply(persistCanvas, canvases.filter(function (x) {
            return !!x.cameraComponent;
          }));
        }
        persistCanvas.forEach(function (val) {
          var isLayerCollided = allCanvases.find(function (x) {
            return x !== val && x.cameraComponent.visibility & val.cameraComponent.visibility & customLayerMask;
          });
          if (isLayerCollided) {
            var availableLayers = ~usedLayer;
            var lastAvailableLayer = availableLayers & ~(availableLayers - 1);
            val.cameraComponent.visibility = lastAvailableLayer | val.cameraComponent.visibility & builtinLayerMask;
            setChildrenLayer(val.node, lastAvailableLayer);
            usedLayer |= availableLayers;
          }
        });
      });
      function setChildrenLayer(node, layer) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          node.children[i].layer = layer;
          setChildrenLayer(node.children[i], layer);
        }
      }
      var setParentEngine = Node.prototype.setParent;
      {
        Node.prototype.setParent = function (value, keepWorldTransform) {
          setParentEngine.call(this, value, keepWorldTransform);
          if (!value) {
            return;
          }
          var layer = getCanvasCameraLayer(this);
          if (layer) {
            this.layer = layer;
            setChildrenLayer(this, layer);
          }
        };
      }
      function getCanvasCameraLayer(node) {
        var layer = 0;
        var canvas = node.getComponent(Canvas);
        if (canvas && canvas.cameraComponent) {
          if (canvas.cameraComponent.visibility & canvas.node.layer) {
            layer = canvas.node.layer;
          } else {
            layer = canvas.cameraComponent.visibility & ~(canvas.cameraComponent.visibility - 1);
          }
          return layer;
        }
        if (node.parent) {
          layer = getCanvasCameraLayer(node.parent);
        }
        return layer;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScoreStore.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "adaebyG7ntG5ImFne5zYBWP", "ScoreStore", undefined);
      var ScoreStore = exports('ScoreStore', /*#__PURE__*/function () {
        function ScoreStore() {
          this.history = {
            last: 0,
            best: 0
          };
          try {
            this.history.last = this.read('mini-cricket-arcade-last');
            this.history.best = this.read('mini-cricket-arcade-best');
          } catch (_unused) {}
        }
        var _proto = ScoreStore.prototype;
        _proto.record = function record(score) {
          var record = score > this.history.best;
          this.history.last = score;
          this.history.best = Math.max(score, this.history.best);
          try {
            sys.localStorage.setItem('mini-cricket-arcade-last', String(this.history.last));
            sys.localStorage.setItem('mini-cricket-arcade-best', String(this.history.best));
          } catch (_unused2) {}
          return record;
        };
        _proto.read = function read(key) {
          var value = Number(sys.localStorage.getItem(key));
          return Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
        };
        return ScoreStore;
      }());
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});