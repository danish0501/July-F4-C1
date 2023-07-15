import React, { useState } from 'react';

const SignupForm = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!email || !name || !password || !confirmPassword) {
            setError('Error: All the fields are mandatory.');
        }

        else if (password !== confirmPassword) {
            setError('Error: Please make sure your passwords and confirm passwords match!');
        }

        else {
            setSuccess('Successfully Created!');
            setEmail('');
            setName('');
            setPassword('');
            setConfirmPassword('');
            setError('');
        }
    };

    return (
            <div className='signupForm'>
                <h1>Create Account</h1>
                <div className='SignUp'>
                    <p>Sign up with Google</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p>Sign up with Facebook</p>
                </div>
                <div className='or'>
                    <h6>-OR-</h6>
                </div>
                <form onSubmit={onSubmit}>
                    <div>
                        <input placeholder='Full Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />

                        <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <input placeholder='Confirm Password' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    <button type="submit">Create Account</button>

                    {error && <p style={{ color: 'red' }}> {error} </p>}
                    {success && <p style={{ color: 'rgb(125, 199, 233)' }}> {success} </p>}

                </form>
            </div>
    );
};

export default SignupForm;