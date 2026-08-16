import './css/Register.css'

import {useState} from 'react';
import axios from 'axios';

function Register () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setSuccess(false);
        const data = {
            name,
            email,
            password
        };

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', data);
            setSuccess(true);
            setName('');
            setEmail('');
            setPassword('');
            console.log(response.data);

        } catch (error) {
            console.log('Faled to regster: ', error);
            setError(error.response?.data?.message || 'Unable to connect to the server.');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>

            {error && <span className='fail-banner'>{error}</span>}
            <label htmlFor='name'>NAME</label>
            <input type='text' id='name' required value={name} onChange={(event) => setName(event.target.value)} />

            <label htmlFor="email">EMAIL</label>
            <input type='email' id='email' required value={email} onChange={(event) => setEmail(event.target.value)} />

            <label htmlFor="password">PASSWORD</label>
            <input type='password' id='password' required value={password} onChange={(event) => setPassword(event.target.value)} />
            
            {success && <span className='success-banner'>Registration successful!</span>}

            <input type='submit' id='submit-btn' value={'Register'}/>
        </form>
    )
}

export default Register;