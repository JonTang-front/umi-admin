import { delay } from 'roadhog-api-doc';
export default delay({
    'POST /login': (req, res) => {
        const { password, username } = req.body;
        if ((password === 'admin' && username === 'admin') || (password === 'guest' && username === 'guest')) {
            res.json({
                token: 'kshfj=shbdf=sdfjb3251',
                currentAuthority: username
            });
            return;
        }
        res.send(500, '用户名或者密码错误');
        // res.append('status', '用户名或者密码错误');
        res.end();
    }
}, 1000);