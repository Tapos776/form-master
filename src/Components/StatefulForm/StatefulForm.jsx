import { useState } from "react";

const StatefulForm = () => {
    const [email ,setEmail]=useState(null);
    const [password ,setPassword]=useState(null)
    const [name ,setName]=useState('Tapos Chandro')
    const [error,setError]=useState(' ')

    const handelName =e =>{
        e.preventDefault()
        setName(e.target.value)
    }
    const handelSubmit =e =>{
        e.preventDefault()
        if(password.length < 6){
            setError("Password is Lase Then 6");
        }else{
            setError('')
        }
        console.log(name, email, password);
    }
    const handelEmail = e =>{
        e.preventDefault()
        setEmail(e.target.value)
    }
    const handelPassword = e =>{
        e.preventDefault()
        setPassword(e.target.value)
    }
   
    return (
        <div className="bg-gray-200 p-10">
            <form onSubmit={handelSubmit}>
                <input value={name} onChange={handelName} className="p-5 my-3 rounded-xl font-medium text-xl  bg-pink-300" type="text" name="name" id="" />
                <br />
                <input onChange={handelEmail} className="p-5 my-3 rounded-xl font-medium text-xl  bg-pink-300" type="text" name="email" id="" required />
                <br />
                <input onChange={handelPassword} className="p-5 my-3 rounded-xl font-medium text-xl  bg-pink-300" type="password" name="email" id="password"  />
                <br />
                <input className="p-5 my-3 bg-pink-500 rounded-2xl"  type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;