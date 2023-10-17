import React, { useState } from 'react'
const AddUser = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [mobile, setmobile] = useState(0);
    const [address, setaddress] = useState("");

    const getName = (event)=>{
        // setname()
        // console.log(event.target.value)
        setname(event.target.value)
    }

    const save = (e)=>{
        e.preventDefault();
        const userdata = {};
        userdata.name = name;
        userdata.email = email;
        userdata.password = password;
        userdata.mobile = mobile;
        userdata.address = address;
        console.log(userdata);
    }
    return (
        <div>
            <form action="" onSubmit={save}>
                <label htmlFor="">Name</label>
                <input type="text" onChange={getName}/> <br /> <br />
                <label htmlFor="">email</label>
                <input type="email" onChange={(e)=>setemail(e.target.value)}/> <br /> <br />
                <label htmlFor="">password</label>
                <input type="password" onChange={(e)=>setpassword(e.target.value)}/> <br /> <br />
                <label htmlFor="">mobile</label>
                <input type="mobile"  onChange={(e)=>setmobile(e.target.value)}/> <br /> <br />
                <label htmlFor="">address</label>
                <input type="address"  onChange={(e)=>setaddress(e.target.value)}/> <br /> <br />
                <button className='btn btn-primary btn-sm'>Submit</button>
            </form>
        </div>
    )
}

export default AddUser
