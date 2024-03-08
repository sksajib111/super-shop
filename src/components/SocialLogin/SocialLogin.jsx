import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";


const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  // const {googleSignIn} = useAuth();

  const handleGoogleSignIn = ()=>{
    googleSignIn()
    .then(result =>{
      console.log(result.user);
    })
    .catch(error => {
      console.log(error.massage);
    })
  };

  return (
    <div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
