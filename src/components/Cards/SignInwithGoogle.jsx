// import { auth } from "../../firebase";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const GoogleSignInButton = ({title="SignUp"}) => {
    // const handleSignin=()=>{
        
    //     const provider = new GoogleAuthProvider()
    //     signInWithPopup(auth,provider).then(async(res)=>{
    //         console.log(res);
            
    //     })
    // }
  return (
    <div className="mt-2 flex gap-2 flex-col">

    <p className="text-white text-center"> Or continue with</p>
    <button
      className="flex items-center w-full justify-center px-4 py-2 bg-white border border-gray-300 rounded-full  hover:bg-gray-100 "
      
    >
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google logo"
        className="w-5 h-5 mr-2"
      />
      <span className="text-gray-800">{title} with Google</span>
    </button>
    </div>
  );
};

export default GoogleSignInButton;
