import '../stylesheets/Login.css'
function Login() {
    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <div className="credential-field">
                <label>email</label>
                <input value="email" />
                <label>password</label>
                <input type="password" value="email" />
                <a href=""><span>Forgot Password or email</span></a>
            </div>
            <div className="login-option">
            <button type="submit">Log in</button>
            <a target="_blank" href="https://apps.apple.com/us/app/recipe-exchange/id6746321619">Don't have an account? <span>Download the app</span></a>
            </div>            
        </div>

    );
}

export default Login;