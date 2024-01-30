import { Link } from 'react-router-dom';
import logo from './media/logo.png';

const Navbar = () => {

    // const handlesignout = ()=> {
    //     app.auth().signOut()
    // }
    return (
  
        <nav className="navbar">
            <div className="hostelname">
                <div id="logo"><img src={logo} alt='' /></div>
                <h1>ComplainEase</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                {/* <div id="logo"><img src={Home} alt='' /></div> */}
                <Link to="/HMC">HMC</Link>
                <Link to="/add">Add Complains</Link>
                <Link to="/login">Login</Link>
                <Link to="/logout">Logout</Link>
                {/* <button onClick={handlesignout}>Sign Out</button> */}
            </div>
        </nav>
    );
}

export default Navbar;