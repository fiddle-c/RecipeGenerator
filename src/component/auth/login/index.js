import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth'
import { useAuth } from '../../../contexts/AuthContext';
import { useState } from 'react'
import '../../../stylesheets/Login.css'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const onSubmit = async (e) => {
        e.preventDefault()  
        console.log("Signing in")
        try {
        if (!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
            console.log("Login successful")
            }
        } catch(error)  {
            console.log(error)
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle()
            .catch(error => {
                console.log(error)
            });
        }
    }

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <div className="credential-field">
                <label>email</label>
                <input
                    type="email"
                    autoComplete='email'
                    required
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />                
                <label>password</label>
                <input 
                type="password"
                autoComplete='current-password'
                value={password} 
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                />
                <a href=""><span>Forgot Password or email</span></a>
            </div>
            <div className="login-option">
                <button onClick={onSubmit} onSubmit={onSubmit} type="submit">Log in</button>
                <a target="_blank" href="https://apps.apple.com/us/app/recipe-exchange/id6746321619">Don't have an account? <span>Download the app</span></a>
            </div>
        </div>
    )


}
export default Login;