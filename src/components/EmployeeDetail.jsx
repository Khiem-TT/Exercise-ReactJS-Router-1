import {useLocation} from "react-router-dom";

function EmployeeDetail() {
    let {state} = useLocation();
    return (
        <div>
            <h1>Employee information</h1>
            <p>ID: {state.id}</p>
            <p>Name: {state.name}</p>
            <p>Age: {state.age}</p>
        </div>
    )
}

export default EmployeeDetail;