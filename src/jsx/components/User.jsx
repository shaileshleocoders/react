import { useState } from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";
import { Button } from "react-bootstrap";

const User = () => {
    const [count, setcount] = useState(0);

    const [showaddUserForm,setshowaddUserForm] = useState(false);
    // const increaseCount = ()=>{
    //     setcount(count+1);
    // }
    // const decreaseCount = ()=>{
    //     setcount(count-1);
    // }
    return (

        <>
        <Button className="btn btn-primary" onClick={()=>setshowaddUserForm(true)}>AddUser</Button>
            {showaddUserForm ? <AddUser /> :null}
            <UserList />
        </>
    )
}

export default User;