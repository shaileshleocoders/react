import React, { useState, useEffect } from 'react'

const AddUser = (props) => {
    console.log(props)

    const { user } = props;

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [age, setage] = useState("");
    const [address, setaddress] = useState("");
    const [nameErr, setnameErr] = useState("");
    const [emailErr, setemailErr] = useState("");
    const [ageErr, setageErr] = useState("");
    const [addressErr, setaddressErr] = useState("");

    const getName = (event) => {
        // setname()
        // console.log(event.target.value)
        setname(event.target.value)
        if(event.target.value==""){
            setnameErr("name is required");
        }else{
            setnameErr("");
        }
    }

    const getEmail = (event) => {
        setemail(event.target.value)
        if(event.target.value==""){
            setemailErr("email is required");
        }else{
            setemailErr("");
        }
    }
    
    const getaddress = (event) => {
        setaddress(event.target.value)
        if(event.target.value==""){
            setaddressErr("address is required");
        }else{
            setaddressErr("");
        }
    }
    const getage = (event) => {
        setage(event.target.value)
        if(event.target.value==""){
            setageErr("age is required");
        }else{
            setageErr("");
        }
    }

    useEffect(() => {
        if (props?.user?.id) {
            const { name, age, email } = user;
            setname(name)
            setage(age)
            setemail(email)
            setaddress(address)
        }
    }, []);

    const save = (e) => {
        e.preventDefault();
        // if (user.id) {
        //     const userdata = {};
        //     userdata.name = name;
        //     userdata.email = email;
        //     userdata.age = age;
        //     userdata.id = user.id;
        //     console.log(userdata);
        //     props.saveEdit(userdata);
        //     setname("")
        //     setemail("")
        //     setage("")
        // } else {
        //     const userdata = {};
        //     userdata.name = name;
        //     userdata.email = email;
        //     userdata.age = age;
        //     console.log(userdata);
        //     props.addUser(userdata);
        //     setname("")
        //     setemail("")
        //     setage("")
        // }
        if(name===""){
            setnameErr("name is required")
        }else if(email===""){
            setemailErr("email is required")
        }else if(address===""){
            setaddressErr("address is required")
        }else if(age===""){
            setageErr("age is required")
        }else{
            let user = {};
            user.name = name
            user.email = email
            user.age = age
            user.address = address
            console.log(user);
            props.addUser(user);
        }      
    }
    return (
        <div>
            <form action="" onSubmit={save}>
                <label htmlFor="">Name <span className='text-danger'>*</span></label>
                <input type="text" onChange={getName} value={name} /> <br />
                <p className='text-danger'>{nameErr && nameErr}</p>
                 <br />
                
                <label htmlFor="">email <span className='text-danger'>*</span></label>
                <input type="email" onChange={getEmail} value={email} /> <br />
                <p className='text-danger'>{emailErr && emailErr}</p> <br />
                <label htmlFor="">address <span className='text-danger'>*</span></label>

                <input type="text" onChange={getaddress} value={address} /> <br /> 
                <p className='text-danger'>{addressErr && addressErr}</p><br />
                {/* <label htmlFor="">mobile</label>
                <input type="mobile" onChange={(e) => setmobile(e.target.value)} value={mobile} /> <br /> <br /> */}
                <label htmlFor="">age <span className='text-danger'>*</span></label>
                <input type="number" onChange={getage} value={age} /> <br /> 
                <p className='text-danger'>{ageErr && ageErr}</p><br />
                <button className='btn btn-primary btn-sm'>Submit</button>
            </form>
        </div>
    )
}

export default AddUser
