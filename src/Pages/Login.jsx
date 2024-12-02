import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn, setUser} = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const newUser = {email, lastSignInTime}
            fetch('https://coffee-server-eight-iota.vercel.app/users', {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto mt-6 max-w-sm shrink-0 shadow-2xl">
            <h2 className='text-xl text-center'>Login</h2>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;