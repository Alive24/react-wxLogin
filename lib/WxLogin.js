"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var WxLogin = (function (_super) {
    __extends(WxLogin, _super);
    function WxLogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.src = "https://open.weixin.qq.com/connect/qrconnect?appid=" + _this.props.appid + "&scope=" + _this.props.scope + "&redirect_uri=" + encodeURIComponent(_this.props.redirect_uri) + "&state=" + (_this.props.state || "") + "&login_type=jssdk&self_redirect=default&style=" + (_this.props.theme || "black") + "&href=" + (_this.props.href || "");
        return _this;
    }
    WxLogin.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("iframe", { scrolling: "no", width: "300", height: "400", frameBorder: "0", src: this.src })));
    };
    return WxLogin;
}(React.Component));
exports.default = WxLogin;
//# sourceMappingURL=WxLogin.js.map