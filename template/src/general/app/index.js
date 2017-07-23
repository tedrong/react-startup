/**
 * Created by pomy on 20/07/2017.
 */

import './index.less';

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCurTime } from '@redux/time/actions';

import Hello from '@components/hello/index';

@connect(
    state => {
        return {
            time: state.time
        }
    },
    {
        getCurTime
    }
)
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'webpack 3 + react 15 + react-router 4'
        }
    }

    render() {
        let t = new Date(this.props.time.curTime || Date.now());
        return (
            <div>
                <h3>{this.state.title}</h3>
                <Hello />
                <p className="doc">
                    Documentation can be found at:
                    <a href="https://github.com/dwqs/react-startup" target="_blank">react-startup</a>
                </p>
                <Link to="/info">查看项目信息</Link>
                <div className="time">
                    <span> 当前时间: {t.toLocaleString()}</span>
                    <span onClick={this.props.getCurTime}> 点击更新当前时间</span>
                </div>
            </div>
        )
    }
}
