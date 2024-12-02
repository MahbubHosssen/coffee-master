import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {signUp, setUser} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;

        

        signUp(email, password)
        .then(result => {
            setUser(result.user)
            const creationTime = result.user.metadata.creationTime
            const user = {name, email, creationTime}
            fetch(`http://localhost:5000/users`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            console.log(result.user)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto mt-6 max-w-sm shrink-0 shadow-2xl">
            <h2 className='text-xl text-center'>Register</h2>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
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
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;