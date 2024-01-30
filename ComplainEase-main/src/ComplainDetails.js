import { useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch';

const ComplainDetails = () => {    

    const { id } = useParams();
    const { data: complain, err, isPending } = useFetch('https://barak-db.onrender.com/complains/' + id);
    const navigate = useNavigate();

    // const history = useHistory;

    const handleClick = () => {
        //use double quotes
        fetch('https://barak-db.onrender.com/complains/' + complain.id, {
            method: 'DELETE'
        }).then(() => {
            navigate("/"); 
        })
    }

    return (
        <div className="Complain-Details">
            {isPending && <div>"Loading..."</div>}
            {err && <div>{err}</div>}
            {complain && (
                <article>
                    
                    <div className="parent">
                        <div className="div1"><h2> Name: </h2></div>
                        <div className="div2"><h2>{complain.name}</h2></div>
                    </div>
                    <div className="parent">
                        <div className="div1"> <h2>Title:</h2> </div>
                        <div className="div2"><h2>{complain.title}</h2></div>
                    </div>
                    <div className="parent">
                        <div className="div1"><h2>Issue:</h2> </div>
                        <div className="div2"><h2>{complain.issue}</h2></div>
                    </div>
                    <div className="parent">
                        <div className="div1"><h2> Room Number:</h2> </div>
                        <div className="div2"><h2>{complain.Room}</h2></div>
                    </div>
                    <div className="parent">
                        <div className="div1"> <h2>Programme:</h2> </div>
                        <div className="div2"><h2>{complain.programme}</h2></div>
                    </div>
                    <div className="parent">
                        <div className="div1"><h2> Member of HMC:</h2> </div>
                        <div className="div2"><h2>{complain.HMC}</h2></div>
                    </div>
                    <br />
                    {/* <p>Title:</p>
                    <h2>{complain.title}</h2>
                    <p>written by student of: {complain.name}</p>
                    <p>Room number of student: {complain.Room}</p>

                    <br></br>
                    <div>Complain:<br></br>{complain.issue}</div> */}
                    <button onClick={handleClick}>Delete Complain</button>
                </article>
            )}
        </div>
    );
}

export default ComplainDetails;