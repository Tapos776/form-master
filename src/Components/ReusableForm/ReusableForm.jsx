/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ReusableForm = ({formTitle, handelSubmit ,submitBtnText = 'Submit',children}) => {
    const handelLocalSubmit = e => {
        e.preventDefault()
        const  data ={
            name : e.target.name.value ,
            email : e.target.email.value,
            password : e.target.password.value
        }
        handelSubmit(data)
    }
     return (
      
         <div className="bg-gray-200 p-10">
            {/* <h2 className="font-medium text-2xl">{formTitle}</h2> */}
            {children}
             <form onSubmit={handelLocalSubmit}>
                 <input className="p-5 my-3 rounded-xl font-medium text-xl border bg-pink-300" type="text" name="name" id="" />
                 <br />
                 <input className="p-5 my-3 rounded-xl font-medium text-xl border bg-pink-300" type="text" name="email" id="" />
                 <br />
                 <input className="p-5 my-3 rounded-xl font-medium text-xl border bg-pink-300" type="password" name="password" id="" /> <br />
                 <input className="p-5 my-3 bg-pink-500 rounded-2xl"  type="submit" value={submitBtnText} />
             </form>
         </div>
     );
};

export default ReusableForm;