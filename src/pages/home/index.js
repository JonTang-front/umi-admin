import style from './index.less';
export default function() {
    console.log(window);
    return (
        <div className={style.home_wrapper}>
            <h1>欢迎来到叮咚管理平台</h1>
        </div>
    )
}