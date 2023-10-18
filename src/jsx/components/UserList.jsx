import React, { useState } from 'react'

const UserList = (props) => {
    // console.log(props, "usersusers")
    const [users, setusers] = useState(props.users);
    // console.table(users)



    return (
        <div className='xyz'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.length > 0 ?
                        props.users.map((user, index) => (
                            <tr key={user.id}>
                                <td >{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td><button className='btn btn-sm btn-danger' onClick={() => props.deleteuser(user.id)}>delete</button></td>
                                <td><button className='btn btn-sm btn-primary' onClick={() => {
                                    props.setshowaddUserForm(true)
                                    props.editUser(user.id)
                                }}>edit</button></td>
                            </tr>
                        ))
                        : <tr>
                            <center>No data found</center>
                        </tr>}
                </tbody>
            </table>
        </div>
    )
}

export default UserList
