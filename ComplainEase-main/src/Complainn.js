import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';


const Complainn = () => {
    
    const [title, setTitle] = useState('');
    const [issue, setIssue] = useState('');
    const [HMC, setHMC] = useState('No');
    const [Room, setRoom] = useState('');
    const [name, setName] = useState('');
    const [programme, setProgramme] = useState('B.Tech');
    const navigate = useNavigate();
    // const navigatetosignup = useNavigate();
    
    const [pending,setPending] = useState(false);
    // const history = useHistory();

    const auth = getAuth();
    const navigation = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation('/add');
                console.log("signed in");
            } else {
                alert("Login is necessary to add complains.")
                navigation('/login')
            }
        });
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newcomplain = {title,issue,name,programme,HMC,Room};
        setPending(true);

        fetch('https://barak-db.onrender.com/complains' , {
            method: 'POST',
            headers: { "Content-Type":"application/json" } ,
            body: JSON.stringify(newcomplain)
        }).then(()=>{
            setPending(false);
            navigate("/");
            // history.push('/'); //rout vali add karvani
            // history.go(-1);
        })
    }


    return ( 
        <div className="add_complain">
            <form className="formm" onSubmit={handleSubmit}>
                <label>Complain Title:</label>
                <input type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <br/>
                <label>Complain:</label>
                <textarea
                required
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                />
                <br/>
                <label>Name:</label>
                <input type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <label>Programme:</label>
                <select
                value={programme}
                onChange={(e) => setProgramme(e.target.value)}
                >
                    <option value='B.Tech'>B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="Phd">Phd</option>
                </select>
                <br/>
                <label>HMC Member:</label>
                <select
                value={HMC}
                onChange={(e) => setHMC(e.target.value)}
                >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <br/>
                <label>Room Number:</label>
                <input type="text"
                required
                value={Room}
                onChange={(e) => setRoom(e.target.value)}
                />
                <br/>
                {!pending && <button>Add Complain</button>}
                {pending && <button>Please Wait</button>}
            </form>
        </div>
     );
}
 
export default Complainn;