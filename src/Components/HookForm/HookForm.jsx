import useInputState from "../../assets/hooks/useInputState";

const HookForm = () => {
    // const [name , handleNameChange] =useInputState('Tapos Chandro');
    const emailState =useInputState('taposrj85@gmail.com');
        const handelSubmit= e =>{
            // console.log("Change Data ",name);
            console.log("Change Data ",emailState.value);
            e.preventDefault()
         }
         return (
          
             <div className="bg-gray-200 p-10">
                 <form onSubmit={handelSubmit}>
                     {/* <input value={name}onChange={handleNameChange} className="p-5 my-3 rounded-xl font-medium text-xl border bg-pink-300" type="text" name="name" id="" /> */}
                     <br />
                     <input {...emailState} className="p-5 my-3 rounded-xl font-medium text-xl border bg-pink-300" type="text" name="email" id="" />
                     <br />
                     <input className="p-5 my-3 rounded-xl font-medium text-xl border bg-pink-300" type="password" name="password" id="" />
                     <br />
                     <input className="p-5 my-3 bg-pink-500 rounded-2xl"  type="submit" value="Submit" />
                 </form>
             </div>
         );
};

export default HookForm;