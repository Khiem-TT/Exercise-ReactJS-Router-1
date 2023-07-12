import {useLocation} from "react-router-dom";

function Home() {
    let {state} = useLocation();
    return (
        <div>
            <h1>Hello!</h1>
            <p>Email: {state.email}</p>
            <p>Password: {state.password}</p>
        </div>
    )
}

export default Home;