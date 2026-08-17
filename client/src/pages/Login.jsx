import axios from 'axios';
import { useState } from 'react';

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        const data = {
            email,
            password
        };

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', data);

            const token = response?.data?.token;
            localStorage.setItem('token', token);

            // Protected Route
            const protectedResponse = await axios.get('http://localhost:5000/api/auth/me', {
                headers : {
                    Authorization : `Bearer ${token}`                    
                }
            });

            console.log(protectedResponse.data);

            setEmail('');
            setPassword('');
            

        } catch (error) {
            console.log('Failed to login: ', error);
            setError(error.response?.data?.message || 'Unable to connect to the server.');
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            {error && <span>{error}</span>}

            <label htmlFor = 'email'>EMAIL</label>
            <input type = 'email' id = 'email' required onChange={(event) => setEmail(event.target.value)} value={email} />

            <label htmlFor='password'>PASSWORD</label>
            <input type='password' id='password' required onChange={(event) => setPassword(event.target.value)} value={password} />

            <input type='submit' id='submit-btn' value={"Login"} />
        </form>
    )
}

export default Login;