import * as React from 'react';
import { WxLoginProps } from '../index'


class WxLogin extends React.Component<WxLoginProps> {
    public src:string = `https://open.weixin.qq.com/connect/qrconnect?appid=${this.props.appid}&scope=${this.props.scope}&redirect_uri=${encodeURIComponent(this.props.redirect_uri)}&state=${this.props.state || ""}&login_type=jssdk&self_redirect=default&style=${this.props.theme || "black"}&href=${this.props.href || ""}`

    public render() {
        return (
            <div>
                <iframe scrolling="no" width="300" height="400" frameBorder="0" src={this.src}></iframe>
            </div>
        );
    }
}

export default WxLogin;


