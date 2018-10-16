# FullScreen

## 适用对象

适用于任何元素(实现 Element 接口)

## 用处

主要用于全屏显示自己的元素。

## API

``` js

    enum FullscreenNavigationUI {
        "auto",
        "show",
        "hide"
    };

    dictionary FullscreenOptions {
        FullscreenNavigationUI navigationUI = "auto";
    };

    partial interface Element {
        Promise<void> requestFullscreen(optional FullscreenOptions options);

        attribute EventHandler onfullscreenchange;
        attribute EventHandler onfullscreenerror;
    };

    partial interface Document {
        [LenientSetter] readonly attribute boolean fullscreenEnabled;
        [LenientSetter, Unscopable] readonly attribute boolean fullscreen; // historical

        Promise<void> exitFullscreen();

        attribute EventHandler onfullscreenchange;
        attribute EventHandler onfullscreenerror;
    };

    partial interface DocumentOrShadowRoot {
        [LenientSetter] readonly attribute Element? fullscreenElement;
    };

```

### Document.Property

|名称      |类型      |属性描述符  |说明|
| :--------|:--------|:-------- |:-------- |
| fullscreenEnabled  | boolean |  只读   | 表明浏览器是否支持全屏模式 |
| fullscreenElement  | Object  |  只读   | 返回当前处于全屏的元素,没有则返回 null|
| fullscreen         | boolean |  只读   | 返回一个布尔值,表明当前文档是否处于全屏模式 |

### Document.Method

    /*
    * 退出全屏
    */

    function exitFullscreen() {}

从定义接口来看,实现了Element接口的元素都支持全屏操作.

### Element.Method

    /*
    *   @return Promise
    *   @options {navigationUI: 'auto|show|hide'}
    */
    function requestFullscreen(options) { // 元素请求进入全屏展示
    }

requestFullscreen() 方法必须在一个事件处理器的方法体里执行，否则将会失败

### Event

    /*
    *  文档进入和退出全屏的触发
    /
    onfullscreenchange

    /*
    *  文档进入和退出全屏发生错误的时触发
    /
    onfullscreenerror

## 使用方式

``` js

    fullScreen() {
        var element = document.documentElement; 
        if (window.ActiveXObject) {
            var WsShell = new ActiveXObject('WScript.Shell');
            WsShell.SendKeys('{F11}');
        } else if (element.requestFullScreen) {
            element.requestFullScreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
    }

    fullExit() {
        var element = document.documentElement;
        //IE ActiveXObject
        if (window.ActiveXObject) {
            var WsShell = new ActiveXObject('WScript.Shell');
            WsShell.SendKeys('{F11}');
        } else if (element.requestFullScreen) {
            document.exitFullscreen();
        } else if (element.msRequestFullscreen) {
            document.msExitFullscreen();
        } else if (element.webkitRequestFullScreen) {
            document.webkitCancelFullScreen();
        } else if (element.mozRequestFullScreen) {
            document.mozCancelFullScreen();
        }
    }

```