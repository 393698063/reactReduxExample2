/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import TestText from './component/TestText';
import { connect } from 'react-redux';
import { changeText } from './actions/action';


class Main extends Component {
    render() {
        const { onChangeText } = this.props;
        return (
            <View style={styles.container}>
                <TestText {...this.props} />
                <TouchableOpacity
                    onPress={onChangeText}
                >
                    <Text>改变文字按钮</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

// 获取 state 变化
/**
 * 当 reducer 接收到我们触发的 行为 并进行一系列处理后，
 * 最终会返回一个新的 state，那么 就会自动调用 mapStateToProps 来告诉系统，
 * state 被操作了，那么我们就可以通过 mapStateToProps 来获取 state 状态
 */
const mapStateToProps = (state) => {
    return {
        // 获取 state 变化
        value: state.text,
    }
};

// 发送行为
const mapDispatchToProps = (dispatch) => {
    return {
        // 发送行为
        onChangeText: () => dispatch(changeText('外部传值')),
    }
};

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(mapStateToProps, mapDispatchToProps)(Main);
