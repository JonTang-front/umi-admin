import { delay } from 'roadhog-api-doc';
export default delay({
    'POST /login': (req, res) => {
        const { password, username } = req.body;
        if ((password === 'admin' && username === 'admin') || (password === 'guest' && username === 'guest')) {
            res.json({
                code: 200,
                token: 'kshfj=shbdf=sdfjb3251',
                currentAuthority: username
            });
            return;
        }
        res.json({
            code: 500,
            msg: '用户名或者密码错误'
        })
    }
}, 1000);