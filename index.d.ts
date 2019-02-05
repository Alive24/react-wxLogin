import * as React from 'react';

export interface WxLoginProps extends React.Props<WxLogin> {
    //应用唯一标识，在微信开放平台提交应用审核通过后获得
    appid : string,
    //应用授权作用域，拥有多个作用域用逗号（,）分隔，网页应用目前仅填写snsapi_login即可
    scope : string,
    //重定向地址，需要进行UrlEncode
    redirect_uri : string,
    //用于保持请求和回调的状态，授权请求后原样带回给第三方。该参数可用于防止csrf攻击（跨站请求伪造攻击），建议第三方带上该参数，可设置为简单的随机数加session进行校验
    state?: string
    //提供"black"、"white"可选，默认为黑色文字描述。详见文档底部FAQ
    theme?: string
    // 自定义样式链接，第三方可根据实际需求覆盖默认样式。详见文档底部FAQ
    href?: string
}

declare class WxLogin extends React.Component<WxLoginProps, any> {
}

declare module 'react-wxlogin' {
}

export default WxLogin