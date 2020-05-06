import { delay } from 'roadhog-api-doc';
export default delay({
    'POST /login': (req, res) => {
        const { password, username } = req.body;
        if ((password === 'admin' && username === 'admin') || (password === 'guest' && username === 'guest')) {
            res.send({
                code: 200,
                data: {
                    token: 'kshfj=shbdf=sdfjb3251',
                    currentAuthority: username
                },
                message: 'success'
            });
            return;
        }
        res.send({
            code: 500,
            message: '用户名或者密码错误'
        });
    }
}, 1000);