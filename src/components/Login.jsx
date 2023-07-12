import {useNavigate} from "react-router-dom";
import {useState} from "react";

const admin = {
    email: 'admin@gmail.com',
    password: 'letmein'
}

function Login() {
    let navigate = useNavigate();
    const [account, setAccount] = useState({});
    const handleChange = (event) => {
        setAccount({
            ...account,
            [event.target.name]: event.target.value
        })
    }
    const handleClick = () => {
        if (account.email === admin.email && account.password === admin.password) {
            navigate('/home', {state: account});
        } else {
            alert('Email or password is wrong!');
        }
    }
    return (
        <div>
            <h1>Log in</h1>
            <form>
                Email: <input type="text" name='email' onChange={handleChange}/>
                Password: <input type="text" name='password' onChange={handleChange}/>
                <button onClick={handleClick}>Log in</button>
            </form>
        </div>
    )
}

export default Login;