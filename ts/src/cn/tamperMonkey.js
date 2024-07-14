// ==UserScript==
// @name         custom fonts
// @namespace    https://github.com/161043261/
// @version      1.0.0
// @description  custom fonts
// @author       Tiancheng
// @match        https://github.com/*
// @match        https://zhuanlan.zhihu.com/*
// @grant        none
// ==/UserScript==

(function () {
    const fontFamily = 'Iosevka SS04, Sarasa Mono SC'
    const style = document.createElement("style");
    style.rel = "stylesheet";
    // style.type = "text/css";
    style.innerHTML = "code, pre, .blob-code, .blob-code-content, .blob-code-marker, .blob-num"
        + ", *" // this line can be commented
        + `{ font-family: ${fontFamily}, monospace !important; }`;
    // document.getElementsByTagName('head')[0].appendChild(style);
    document.querySelector('head').appendChild(style);
})();
