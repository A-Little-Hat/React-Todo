import React from 'react';
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div className="container my-4" style={{minHeight:"70vh"}}>
            <p> This Application is build using <b>REACT</b> by <Link to="https://github.com/A-Little-Hat">A-Little-Hat</Link>.</p>

            <p>Visit <Link to="https://soumyaneel.web.app/">Portfolio</Link> </p>

            <p>If you have any issues using this Application, please create a <Link to="https://github.com/A-Little-Hat/React-Todo/issues">Issue</Link></p>

            <p>Contact me on <Link to="https://www.linkedin.com/in/soumyaneel-sarkar-04158a1b0/"><img src="https://image.flaticon.com/icons/png/512/174/174857.png" height="30px" width="30px" alt="" srcset=""/></Link></p>
        </div>
    );
}

export default About;


