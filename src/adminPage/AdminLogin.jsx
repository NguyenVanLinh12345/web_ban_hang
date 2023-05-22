import style from './AdminLogin.module.scss';

function AdminLogin() {

    const login = ()=>{
        localStorage.setItem('admin', 'value');
        window.location.reload();
    }
    return (
        <div className={style.admin_login}>
            
            <div className={style.container}>
                <h1>Login</h1>
                <div>
                    <label htmlFor="email">email:</label>
                    <input id='email' type="text" />
                </div>

                <div>
                    <label htmlFor="password">password:</label>
                    <input id='password' type="password" />
                </div>

                <button onClick={login}>Login</button>
            </div>
        </div>
    )
};

export default AdminLogin;