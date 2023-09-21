const SimpleForm = () => {
    const handelSubmit= e =>{
       e.preventDefault()
    }
    return (
     
        <div className="bg-gray-200 p-10">
            <form onSubmit={handelSubmit}>
                <input className="p-5 my-3 rounded-xl font-medium text-xl border bg-pink-300" type="text" name="name" id="" />
                <br />
                <input className="p-5 my-3 rounded-xl font-medium text-xl border bg-pink-300" type="text" name="email" id="" />
                <br />
                <input className="p-5 my-3 rounded-xl font-medium text-xl border bg-pink-300" type="password" name="password" id="" />
                <input className="p-5 my-3 bg-pink-500 rounded-2xl"  type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;