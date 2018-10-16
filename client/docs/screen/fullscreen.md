# FullScreen

## 全屏代码

### 全屏

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
```

### 退出全屏

``` js
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