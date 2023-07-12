import {useLocation, useNavigate} from "react-router-dom";

const employees = [
    {
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    },
]

function Home() {
    let {state} = useLocation();
    let navigate = useNavigate();
    const handleClick = (employee) => {
        navigate('/detail', {state: employee})
    }
    return (
        <div>
            <h1>Hello!</h1>
            <p>Email: {state.email}</p>
            <p>Password: {state.password}</p>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                {employees.map(employee => (
                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>
                            <button onClick={() => handleClick(employee)}>Detail</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Home;