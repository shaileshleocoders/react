import { useEffect, useState } from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";
import { Button } from "react-bootstrap";
import './../../assets/scss/users.scss'

import { fetchUsers, deleteUserServer, addUserServer } from "./Server";

const User = () => {

    const [user, setuser] = useState({});
    const [index, setindex] = useState(0);
    const [userList, setuserList] = useState([])
    const [showaddUserForm, setshowaddUserForm] = useState(false);

    const getuserslist=()=>{
        // fetchUsers((success)=>{
        //     console.log(success)
        //     setuserList(success);
        // },(error)=>{
        //     console.log(error)
        // })
        fetchUsers((response)=>{
            setuserList(response);
        },(error)=>{
            console.log(error)
            setuserList([]);
        })
    }
    useEffect(()=>{
        getuserslist();
    },[])
    

    const deleteuser = (id) => {
        // const newuserlist = [...userList];
        // const filteredUsers = newuserlist.filter((user) => user.id !== id);
        // setuserList(filteredUsers)

        deleteUserServer(id,(success)=>{
            console.log(success)
            if(success==true){
                getuserslist();
            }else{
                alert("Error");
            }
        },(error)=>{
            console.log(error);
        })

    }

    const addUser = (data) => {
        // data.id = userList.length + 1;
        // const newuserlist = [...userList, data];
        // setuserList(newuserlist);

        addUserServer(data,(success)=>{
            console.log(success);
            if(success==true){
                getuserslist();
            }else{
                alert("error")
            }
        },(error)=>{
            console.log(error);
        })
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