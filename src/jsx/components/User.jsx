import { useState } from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";
import { Button } from "react-bootstrap";
import './../../assets/scss/users.scss'

const User = () => {
    const [count, setcount] = useState(0);
    const [user, setuser] = useState({});
    const [index, setindex] = useState(0);
    const [userList, setuserList] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            age: 30,
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            age: 25,
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            age: 28,
        },
        {
            id: 4,
            name: "Bob Brown",
            email: "bob.brown@example.com",
            age: 35,
        },
        {
            id: 5,
            name: "Eva Wilson",
            email: "eva.wilson@example.com",
            age: 22,
        },
        {
            id: 6,
            name: "David Lee",
            email: "david.lee@example.com",
            age: 32,
        },
        {
            id: 7,
            name: "Emily White",
            email: "emily.white@example.com",
            age: 27,
        },
        {
            id: 8,
            name: "Michael Johnson",
            email: "michael.johnson@example.com",
            age: 29,
        },
        {
            id: 9,
            name: "Olivia Smith",
            email: "olivia.smith@example.com",
            age: 31,
        },
        {
            id: 10,
            name: "William Davis",
            email: "william.davis@example.com",
            age: 26,
        },
        {
            id: 11,
            name: "Sophia Wilson",
            email: "sophia.wilson@example.com",
            age: 24,
        },
        {
            id: 12,
            name: "James Taylor",
            email: "james.taylor@example.com",
            age: 33,
        },
        {
            id: 13,
            name: "Linda Hall",
            email: "linda.hall@example.com",
            age: 40,
        },
        {
            id: 14,
            name: "Charles Adams",
            email: "charles.adams@example.com",
            age: 37,
        },
        {
            id: 15,
            name: "Ava Clark",
            email: "ava.clark@example.com",
            age: 23,
        },
        {
            id: 16,
            name: "Robert Moore",
            email: "robert.moore@example.com",
            age: 34,
        },
        {
            id: 17,
            name: "Mia Green",
            email: "mia.green@example.com",
            age: 29,
        },
        {
            id: 18,
            name: "Daniel Baker",
            email: "daniel.baker@example.com",
            age: 31,
        },
        {
            id: 19,
            name: "Grace Harris",
            email: "grace.harris@example.com",
            age: 27,
        },
        {
            id: 20,
            name: "Kevin Anderson",
            email: "kevin.anderson@example.com",
            age: 36,
        },
    ])
    const [showaddUserForm, setshowaddUserForm] = useState(false);
    // const increaseCount = ()=>{
    //     setcount(count+1);
    // }
    // const decreaseCount = ()=>{
    //     setcount(count-1);
    // }

    const deleteuser = (id) => {
        const newuserlist = [...userList];
        const filteredUsers = newuserlist.filter((user) => user.id !== id);
        setuserList(filteredUsers)
    }

    const addUser = (data) => {
        data.id = userList.length + 1;
        const newuserlist = [...userList, data];
        setuserList(newuserlist);
    }

    const editUser = (id) => {
        setuser({});
        const user = userList.find((user)=>user.id===id);
        const users = [...userList];
        const index = users.indexOf(user)
        setindex(index);
        setuser(user);
    }

    const saveEdit = (data)=>{
        const users = [...userList];
        users.splice(index,1,data); 
        setuserList(users);
    }
    return (

        <div className="user">
            {!showaddUserForm ? <Button className="btn" onClick={() => setshowaddUserForm(true)}>AddUser</Button>
                : <Button className="btn btn-primary" onClick={() => setshowaddUserForm(false)}>hideForm</Button>}
            {showaddUserForm ? <AddUser addUser={addUser} user={user} saveEdit={saveEdit}/> : null}
            <UserList
                users={userList}
                deleteuser={deleteuser}
                setshowaddUserForm={setshowaddUserForm}
                editUser={editUser}
            />
        </div>
    )
}

export default User;