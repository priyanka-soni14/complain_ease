import Navbar from './Navbar.js';
import Home from './Home.js';
import HMC from './HMC.js';
import Add_Complain from './Complainn.js'
import ComplainDetails from './ComplainDetails.js';

import Login from './login.js';
import Logout from './logout.js';
import Signup from './signup.js';
import { auth } from './firebase.js';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout.js';
import { useEffect ,useState} from 'react';
// import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";

//8001 is the port for json file.
function App() {

  const[userName,setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName);
      }else{
        setUserName("");
      }
      console.log(user);
    });
  },[]);

// const auth = getAuth();
// setPersistence(auth, browserSessionPersistence)
//   .then(() => {
//     return signInWithEmailAndPassword(auth, email, password);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/HMC" element={<HMC />} />
        <Route path="/add" element={<Add_Complain />} />
        <Route path="/complains/:id" element={<ComplainDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        
      </Route>
    </Routes>

  );
}

export default App;
