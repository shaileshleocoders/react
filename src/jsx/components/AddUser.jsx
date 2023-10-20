import React, { useState, useEffect } from 'react'

const AddUser = (props) => {
    console.log(props)

    const { user } = props;

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [age, setage] = useState("");
    const [address, setaddress] = useState("");

    const getName = (event) => {
        // setname()
        // console.log(event.target.value)
        setname(event.target.value)
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

        let user = {};
        user.name = name
        user.email = email
        user.age = age
        user.address = address
        console.log(user);
        props.addUser(user);
    }
    return (
        <div>
            <form action="" onSubmit={save}>
                <label htmlFor="">Name</label>
                <input type="text" onChange={getName} value={name} /> <br /> <br />
                <label htmlFor="">email</label>
                <input type="email" onChange={(e) => setemail(e.target.value)} value={email} /> <br /> <br />
                <label htmlFor="">address</label>
                <input type="text" onChange={(e) => setaddress(e.target.value)} value={address} /> <br /> <br />
                {/* <label htmlFor="">mobile</label>
                <input type="mobile" onChange={(e) => setmobile(e.target.value)} value={mobile} /> <br /> <br /> */}
                <label htmlFor="">age</label>
                <input type="number" onChange={(e) => setage(e.target.value)} value={age} /> <br /> <br />
                <button className='btn btn-primary btn-sm'>Submit</button>
            </form>
        </div>
    )
}

export default AddUser
