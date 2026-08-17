import './css/Header.css';
import { useNavigate } from 'react-router-dom';

function Header () {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
    
    return (
        <>
            <header>
                <h1>Expense Tracker</h1>
                <button onClick={handleLogout}>Logout</button>
            </header>
        </>
    )
}

export default Header;