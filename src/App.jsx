import './App.css'
import GrandPa from './Components/GrandPa/GrandPa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {
  // const handelSignSubmit = data => {
  //  console.log('Sign Up Data',data);
  // }
  // const handelProfile = data => {
  //   console.log('Update Profile Data',data)
  // }
  return (
    <>

      <h1>Form Master</h1>
      <GrandPa></GrandPa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formTitle={"Sign Up"}
        handelSubmit={handelSignSubmit}>
          <div className="font-medium text-2xl">
            <h2>Sign Up</h2>
            <p>Please Sign up now</p>
          </div>
      </ReusableForm>

      <ReusableForm
        formTitle={"Profile Update"}
        handelSubmit={handelProfile}
        submitBtnText='Update'>
          <div className="font-medium text-2xl">
            <h2>Update Profile</h2>
            <p>Always Keep update Your Profile</p>
          </div>
      </ReusableForm> */}

    </>
  )
}

export default App
