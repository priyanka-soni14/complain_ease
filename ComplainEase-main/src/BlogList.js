import { Link } from "react-router-dom";

const BlogList = ({complains,heading}) => {
    //const complain = complains;
    return ( 
        <div className="blog-list">
            <h1>{heading}</h1>
            {complains.map((x) => (
                <div className="complain-preview" key={x.id}>
                    
                    <Link to={`/complains/${x.id}`}>
                        {/* doubt is here in backtick */}
                        <h2>{ x.title }</h2>
                    </Link>
                    
                    {/*  <button onClick={ () => handledelete(x.id) } id="butt" >Delete Complain</button> */}
                </div>
            ))}
        </div>
    );
}

export default BlogList;