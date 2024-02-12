import { useState } from "react";
import React from 'react';

export default function ProfExpSummary({id, name, topic, location, date, description, positionName, aboutJob, project, abstract, forVideo}) {

    const [showMore, setShowMore] = useState(false);
    const showMoreFalse = {
        backgroundColor: "light gray",
        borderRadius: "10px",
        marginBottom: "10px"
    };
    const showMoreTrue = {
        backgroundColor: "gray", 
        color: "white", 
        marginBottom: "10px",  
        borderRadius: "10px",
        marginTop: "5px"
    }

    return  <div key={id} style={{ border: 'solid', backgroundColor:'#bcc0cc', marginTop: "10px", marginBottom:"10px" }}>
        {showMore ? (
            id == 101 ? 
            ( <div style={{marginTop: "10px"}}>
                <h5>{name}</h5>
                <p style={{marginTop: "20px"}}>{location}&emsp;||&emsp;{date}</p>
                <p style={{textDecoration: 'underline'}}>{description}</p>
                <div style={{ textAlign: 'left', marginLeft: "30px" }}>
                    <p>+ {project}</p>
                </div>
                <p style={{textDecoration: 'underline'}}>{topic} Abstract:</p>
                <div style={{ textAlign: 'left', marginLeft: "30px" }}>
                    <p>{abstract}</p>
                </div>
                <div style={{ textAlign: 'center', marginLeft: "30px", marginTop: "35px" }}>
                    <p>{forVideo}</p>
                </div>
                <div>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/oRxCe2DoLJg"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <button onClick={() => setShowMore(false)} style={showMoreTrue}>Show Less</button>
            </div>) 
            : (
            id == 100 || id == 102 ? 
            (
            <div style={{marginTop: "10px"}}>
                <h5>{name}</h5>
                <p style={{marginTop: "20px"}}>{location}&emsp;||&emsp;{date}</p>
                <p style={{textDecoration: 'underline'}}>{positionName}</p>
                <div style={{ textAlign: 'left', marginLeft: "30px" }}>
                    {aboutJob.map(j => <p>+ {j}</p>)}
                </div>
                <p style={{textDecoration: 'underline'}}>{topic}</p>
                <div style={{ textAlign: 'left', marginLeft: "30px" }}>
                    <p>+ {project}</p>
                </div>
                <button onClick={() => setShowMore(false)} style={showMoreTrue}>Show Less</button>
            </div>) 
            : (
            id == 103 ? 
             (
                <div style={{marginTop: "10px"}}>
                    <h5>{name}</h5>
                    <p style={{marginTop: "20px"}}>{date}</p>
                    <div style={{ textAlign: 'left', marginLeft: "30px" }}>
                        <p>+ {project}</p>
                    </div>
                    <div style={{ textAlign: 'center', marginLeft: "30px", marginTop: "35px" }}>
                        <p>{forVideo}</p>
                    </div>
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/dAMdpuFFffY"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div style={{marginBottom: "20px", marginTop: "20px"}}>
                        <a href="https://github.com/alpez22/in-class-projects/tree/main/CS571/hw6-alpez22">See This Projects Code Here!</a>
                    </div>
                    <button onClick={() => setShowMore(false)} style={showMoreTrue}>Show Less</button>
                </div>
             ) 
             : (
            id == 104 ?
            (
                <div style={{marginTop: "10px"}}>
                    <h5>{name}</h5>
                    <p style={{marginTop: "20px"}}>{date}</p>
                    <div style={{ textAlign: 'left', marginLeft: "30px" }}>
                        <p>+ {project}</p>
                    </div>
                    <div style={{ textAlign: 'center', marginLeft: "30px", marginTop: "35px" }}>
                        <p>{forVideo}</p>
                    </div>
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/wLxZvSIRsOU"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div style={{marginBottom: "20px", marginTop: "20px"}}>
                        <a href="https://github.com/alpez22/in-class-projects/tree/main/CS571/hw9-alpez22">See This Projects Code Here!</a>
                    </div>
                    <button onClick={() => setShowMore(false)} style={showMoreTrue}>Show Less</button>
                </div>
            ) 
            : (
            id == 105 ? 
            (
                <div style={{marginTop: "10px"}}>
                    <h5>{name}</h5>
                    <p>{project}</p>
                    <div style={{marginBottom: "20px"}}>
                        <a href="https://github.com/alpez22/in-class-projects">https://github.com/alpez22/in-class-projects</a>
                    </div>
                    <button onClick={() => setShowMore(false)} style={showMoreTrue}>Show Less</button>
                </div>
            )
            : (
            <div style={{marginTop: "10px"}}>
                    <h5>{name}</h5>
                    <button onClick={() => setShowMore(false)} style={showMoreFalse}>Show Less</button>
                </div>
            ))))))
        : (
            <div style={{marginTop: "10px"}}>
                <h5>{name}</h5>
                <button onClick={() => setShowMore(true)} style={showMoreFalse}>Show More</button>
            </div>
        )}
     </div>
}

// 101 : https://youtu.be/oRxCe2DoLJg
// 103 : https://github.com/alpez22/in-class-projects/tree/main/CS571/hw6-alpez22
// 103 : https://youtu.be/dAMdpuFFffY
// 104 : https://github.com/alpez22/in-class-projects/tree/main/CS571/hw9-alpez22
// 104 : https://youtu.be/wLxZvSIRsOU
// 105 : https://github.com/alpez22/in-class-projects

