var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

$(function() {
  var COMPLETE_LOAD_EVENT, ExteriorViewer, Loader, _$body, _$window, _exteriorViewer, _loader;
  _$window = $(window);
  _$body = $("body");

  /*
  Module
   */
  Loader = (function() {
    function Loader(params) {
      this._completeLoad = bind(this._completeLoad, this);
      this._onResize = bind(this._onResize, this);
      this._$target = params.$target;
      this._$finder = params.$finder;
      this._$progress = null;
      this._$imgArr = null;
      this._loaded = null;
      this._total = null;
      this._resizeEvent = null;
      this._intervalId = null;
      this._init();
    }

    Loader.prototype._init = function() {
      this._$progress = this._$target.find(".js_loaderProgress");
      this._$imgArr = [];
      this._$finder.find("img").each((function(_this) {
        return function(i, e) {
          var $img;
          $img = $(e);
          if (!$img.attr("data-src")) {
            return;
          }
          return _this._$imgArr.push($img);
        };
      })(this));
      this._total = this._$imgArr.length;
      this._loaded = 0;
      if (navigator.userAgent.search(/iPhone/) !== -1) {
        this._resizeEvent = "orientationchange";
      } else {
        this._resizeEvent = "resize";
      }
      _$window.on(this._resizeEvent, this._onResize);
      if (this._intervalId) {
        clearInterval(this._interval);
      }
      this._intervalId = setInterval((function(_this) {
        return function() {
          return _this._onResize();
        };
      })(this), 100);
      return this._load();
    };

    Loader.prototype._onResize = function() {
      if (100 <= this._$target.height()) {
        if (this._intervalId) {
          clearInterval(this._interval);
        }
        return this._$progress.css({
          position: "absolute",
          top: (this._$target.height() / 2)  -  106,
          left: (this._$target.width() - 120) / 2,
          display: "block"
        });
      }
    };

    Loader.prototype._load = function() {
      var $img, i, j, len, ref, results;
      ref = this._$imgArr;
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        $img = ref[i];
        results.push(this._onLoad($img, 20 * i));
      }
      return results;
    };

    Loader.prototype._onLoad = function($img, delay) {
      var src;
      src = $img.attr("data-src");
      if (!src) {
        return;
      }
      $img.off("load").one("load", (function(_this) {
        return function(e) {
          $(e.target).attr("data-src", "");
          _this._loaded = _this._loaded + 1;
          if (_this._total <= _this._loaded) {
            return _this._completeLoad();
          }
        };
      })(this));
      $img.off("error").one("error", (function(_this) {
        return function(e) {
          $(e.target).attr("data-src", "");
          _this._loaded = _this._loaded + 1;
          if (_this._total <= _this._loaded) {
            return _this._completeLoad();
          }
        };
      })(this));
      return setTimeout((function(_this) {
        return function() {
          return $img.attr("src", src);
        };
      })(this), delay);
    };

    Loader.prototype._completeLoad = function() {
      return this._$target.animate({
        opacity: 0
      }, {
        delay: 200,
        duration: 500,
        complete: (function(_this) {
          return function() {
            _this._$target.css({
              display: "none"
            });
            return _$body.trigger(COMPLETE_LOAD_EVENT);
          };
        })(this)
      });
    };

    return Loader;

  })();
  ExteriorViewer = (function() {
    function ExteriorViewer(params) {
      this._onResize = bind(this._onResize, this);
      this._onMouseLeave = bind(this._onMouseLeave, this);
      this._onTouchEnd = bind(this._onTouchEnd, this);
      this._onTouchMove = bind(this._onTouchMove, this);
      this._onTouchStart = bind(this._onTouchStart, this);
      this._$target = params.$target;
      this._$canvas = null;
      this._$src = null;
      this._$navigationLink = null;
      this._srcInfo = null;
      this._context = null;
      this._imgLength = null;
      this._isMove = null;
      this._currentBodyType = null;
      this._startIndex = null;
      this._currentIndex = null;
      this._lastIndex = null;
      this._startClientX = null;
      this._startClientY = null;
      this._clientX = null;
      this._clientY = null;
      this._width = null;
      this._height = null;
      this._canvasWidth = null;
      this._canvasHeight = null;
      this._ratio = null;
      this._resizeEvent = null;
      this._isTouchDevice = null;
      this._startTouchEvent = null;
      this._moveTouchEvent = null;
      this._endTouchEvent = null;
      this._init();
    }

    ExteriorViewer.prototype._init = function() {
      this._$canvas = this._$target.find(".js_exteriorViewerCanvas");
      this._$src = this._$target.find(".js_exteriorViewerSrc");
      this._$navigationLink = this._$target.find(".js_exteriorViewerNavigationLink");
      this._srcInfo = [];
      this._$src.each((function(_this) {
        return function(i, e) {
          var $target, arr;
          $target = $(e);
          if (i <= 0) {
            _this._currentBodyType = $target.attr("data-id");
          }
          arr = [];
          $target.find("li").each(function(i, e) {
            var $target2;
            $target2 = $(e);
            return arr.push($target2.find("img"));
          });
          return _this._srcInfo.push({
            id: $target.attr("data-id"),
            imgArr: arr
          });
        };
      })(this));
      if (this._$navigationLink) {
        this._$navigationLink.each((function(_this) {
          return function(i, e) {
            var $target;
            $target = $(e);
            if (_this._currentBodyType === $target.attr("data-id")) {
              $target.addClass("is-current");
            }
            return $target.on("click", function(e) {
              e.preventDefault();
              return _this._changeBodyType($(e.target).attr("data-id"));
            });
          };
        })(this));
      }
      this._context = this._$canvas.get(0).getContext("2d");
      this._imgLength = this._srcInfo[0].imgArr.length;
      this._isFirst = false;
      this._canvasWidth = this._$canvas.attr("width");
      this._canvasHeight = this._$canvas.attr("height");
      this._ratio = this._canvasHeight / this._canvasWidth;
      if (navigator.userAgent.search(/iPhone/) !== -1) {
        this._resizeEvent = "orientationchange";
      } else {
        this._resizeEvent = "resize";
      }
      if (document.ontouchstart !== void 0) {
        this._isTouchDevice = true;
        this._startTouchEvent = "touchstart";
        this._moveTouchEvent = "touchmove";
        this._endTouchEvent = "touchend";
      } else {
        this._isTouchDevice = false;
        this._startTouchEvent = "mousedown";
        this._moveTouchEvent = "mousemove";
        this._endTouchEvent = "mouseup";
      }
      this._$canvas.on(this._startTouchEvent, this._onTouchStart);
      _$window.on(this._resizeEvent, this._onResize);
      this._$target.css({
        opacity: 0,
        display: "block"
      }).animate({
        opacity: 1
      }, {
        delay: 100,
        duration: 500
      });
      this._onResize();
      this._lastIndex = 4;
      return setTimeout((function(_this) {
        return function() {
          return _this._changeImage(_this._lastIndex);
        };
      })(this), 100);
    };

    ExteriorViewer.prototype._onTouchStart = function(e) {
      this._isFirst = true;
      this._$canvas.on(this._moveTouchEvent, this._onTouchMove);
      this._$canvas.on(this._endTouchEvent, this._onTouchEnd);
      this._$canvas.on("mouseleave", this._onMouseLeave);
      if (this._isTouchDevice) {
        this._startClientX = e.originalEvent.touches[0].clientX;
        this._startClientY = e.originalEvent.touches[0].clientY;
      } else {
        this._startClientX = e.clientX;
      }
      return this._startIndex = this._lastIndex;
    };

    ExteriorViewer.prototype._onTouchMove = function(e) {
      var clientX, clientY, moveX, rot;
      if (this._isTouchDevice) {
        if (this._isFirst) {
          this._isFirst = false;
          clientX = e.originalEvent.touches[0].clientX;
          clientY = e.originalEvent.touches[0].clientY;
          rot = Math.atan2(this._startClientY - clientY, this._startClientX - clientX) * 180 / Math.PI;
          if ((60 <= rot && rot <= 120) || (-120 <= rot && rot <= -60)) {
            this._$canvas.off(this._moveTouchEvent, this._onTouchMove);
            this._$canvas.off(this._endTouchEvent, this._onTouchEnd);
            this._$canvas.off("mouseleave", this._onMouseLeave);
            return;
          }
        }
        e.preventDefault();
        this._clientX = e.originalEvent.touches[0].clientX;
      } else {
        this._clientX = e.clientX;
      }
      moveX = Math.floor((this._clientX - this._startClientX) / (this._width / this._imgLength));
      this._lastIndex = (this._startIndex + moveX) % this._imgLength;
      return this._changeImage(this._lastIndex);
    };

    ExteriorViewer.prototype._onTouchEnd = function() {
      this._$canvas.off(this._moveTouchEvent, this._onTouchMove);
      this._$canvas.off(this._endTouchEvent, this._onTouchEnd);
      return this._$canvas.off("mouseleave", this._onMouseLeave);
    };

    ExteriorViewer.prototype._onMouseLeave = function() {
      this._$canvas.off(this._moveTouchEvent, this._onTouchMove);
      this._$canvas.off(this._endTouchEvent, this._onTouchEnd);
      return this._$canvas.off("mouseleave", this._onMouseLeave);
    };

    ExteriorViewer.prototype._onResize = function() {
      this._width = Math.floor(_$window.width());
      this._height = Math.floor(this._width * this._ratio);
      return this._$canvas.css({
        width: this._width,
        height: this._height
      });
    };

    ExteriorViewer.prototype._changeImage = function(index) {
      var img, j, len, ref, srcInfo;
      if (0 <= index) {
        index = Math.floor(index % this._imgLength) + 0;
      } else {
        index = Math.floor(this._imgLength + (index % this._imgLength)) + 0;
      }
      if (index === this._currentIndex) {
        return;
      }
      this._currentIndex = index;
      img = null;
      ref = this._srcInfo;
      for (j = 0, len = ref.length; j < len; j++) {
        srcInfo = ref[j];
        if (srcInfo.id === this._currentBodyType) {
          img = srcInfo.imgArr[this._currentIndex].get(0);
          break;
        }
      }
      if (img) {
        this._context.clearRect(0, 0, this._canvasWidth, this._canvasHeight);
        return this._context.drawImage(img, 0, 0, this._canvasWidth, this._canvasHeight);
      }
    };

    ExteriorViewer.prototype._changeBodyType = function(bodyTypeId) {
      var img, j, len, ref, srcInfo;
      if (bodyTypeId === this._currentBodyType) {
        return;
      }
      this._currentBodyType = bodyTypeId;
      if (this._$navigationLink) {
        this._$navigationLink.each((function(_this) {
          return function(i, e) {
            var $target;
            $target = $(e);
            if (_this._currentBodyType === $target.attr("data-id")) {
              return $target.addClass("is-current");
            } else {
              return $target.removeClass("is-current");
            }
          };
        })(this));
      }
      img = null;
      ref = this._srcInfo;
      for (j = 0, len = ref.length; j < len; j++) {
        srcInfo = ref[j];
        if (srcInfo.id === this._currentBodyType) {
          img = srcInfo.imgArr[this._currentIndex].get(0);
          break;
        }
      }
      if (img) {
        this._context.clearRect(0, 0, this._canvasWidth, this._canvasHeight);
        return this._context.drawImage(img, 0, 0, this._canvasWidth, this._canvasHeight);
      }
    };

    return ExteriorViewer;

  })();

  /*
  Action
   */
  _loader = null;
  _exteriorViewer = null;

  /*
  Event
   */
  _loader = new Loader({
    $target: _$body.find(".js_loader"),
    $finder: _$body.find(".js_exteriorViewer")
  });
  COMPLETE_LOAD_EVENT = "complete_load_event";
  return _$body.on(COMPLETE_LOAD_EVENT, function() {
    return _$body.find(".js_exteriorViewer").each((function(_this) {
      return function(i, e) {
        return _exteriorViewer = new ExteriorViewer({
          $target: $(e)
        });
      };
    })(this));
  });
});
