import router from 'umi/router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Util from './../../util';
import style from './index.less';

const { handleLocalStorage } = Util;
function Login(props) {
    const { getFieldDecorator } = props.form;
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if(!err){
                handleLocalStorage.set('user', JSON.stringify({
                    username: values.username,
                    password: values.password
                }));
                router.push('/home');
            }
        });
    };
    return (
        <div className={style.login}>
            <div className={style.login_logo}>
                <img src={require('./../../assets/logo.svg')} alt="logo"/>
                <span>REACT ADMIN</span>
            </div>
            <Form onSubmit={handleSubmit}>
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
                    <Button type="primary" htmlType="submit" className={style.login_form_button}>登录</Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Form.create({ name: 'login-form' })(Login);