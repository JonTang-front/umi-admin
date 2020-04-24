export default {
    'POST /api/login': (req, res) => {
        setTimeout(() => {
            const { password, username } = req.body;
            if (password === 'admin' && username === 'admin') {
            res.send({
                code: 200,
                data: {
                    token: 'kshfj=shbdf=sdfjb3251',
                    currentAuthority: username
                },
                message: 'success'
            })
            return;
            }
            res.send({
            code: 500,
            message: '用户名或者密码错误'
            });
        }, 2500);
    }
}