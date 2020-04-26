import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import style from './index.less';

@connect(({loading}) => ({
    loading :loading.effects['system/login']
}))
class Login extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                const { dispatch } = this.props;
                dispatch({
                    type: 'system/login',
                    payload: {
                        username: values.username,
                        password: values.password
                    }
                });
                
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.login_wrapper}>
                <div className={style.bg}></div>
                <div className={style.login}>
                    <div className={style.login_logo}>
                        <img src={require('./../../assets/logo.svg')} alt="logo"/>
                        <span>叮咚管理</span>
                    </div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                        {
                            getFieldDecorator('username', {
                                rules: [
                                    { required: true, message: '请输入用户名' },
                                    { whitespace: true, message: '请输入用户名'}
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                />
                            )
                        }
                        </Form.Item>
                        <Form.Item>
                        {
                            getFieldDecorator('password', {
                                rules: [
                                    { required: true, message: '请输入密码' },
                                    { whitespace: true, message: '请输入密码'}
                                ]
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />
                            )
                        }
                        </Form.Item>
                        <Form.Item>
                        {
                            getFieldDecorator('remember', { 
                                valuePropName: 'checked', 
                                initialValue: true
                            })(<Checkbox className={style.login_form_check}>记住密码</Checkbox>)
                        }
                            <a className={style.login_form_forgot} href="##">忘记密码</a>
                            <Button type="primary" loading={this.props.loading} htmlType="submit" className={style.login_form_button}>
                                {this.props.loading?'登录中...': '登录'}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Form.create({ name: 'login-form' })(Login);