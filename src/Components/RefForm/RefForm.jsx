import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef =useRef(null); 
    const emailRef =useRef(null); 
    const passwordRef =useRef(null); 
    useEffect(()=>{
        nameRef.current.focus();
    },[])
    const handelSubmit= e =>{
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
     }
     return (
      
         <div className="bg-gray-200 p-10">
             <form onSubmit={handelSubmit}>
                 <input ref={nameRef} className="p-3 my-2 rounded-xl font-medium text-xl border bg-gray-700 text-white" type="text" name="name" id="" />
                 <br />
                 <input ref={emailRef} className="p-3 my-2 rounded-xl font-medium text-xl border bg-gray-700 text-white" type="text" name="email" id="" />
                 <br />
                 <input ref={passwordRef} className="p-3 my-2 bg-gray-700 font-medium text-xl text-white rounded-xl"  type="password" name="password" required />
                 <br />
                 <input className="  text-xl text-white p-4 my-2 bg-pink-500 rounded-2xl"  type="submit" value="Submit" />
             </form>
         </div>
     );
};

export default RefForm;
