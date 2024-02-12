import { useState } from "react";

export default function ProfExpSummary({id, companyName, location, date, positionName, accomplishments}) {

    const [showMore, setShowMore] = useState(false);
    const showMoreFalse = {
        backgroundColor: "light gray",
        borderRadius: "10px",
        marginBottom: "10px",
        overflow: "hidden",
        transition: "all 0.5s",
    };
    const showMoreTrue = {
        backgroundColor: "gray", 
        color: "white", 
        marginBottom: "10px",  
        borderRadius: "10px",
        marginTop: "5px",
        overflow: "hidden",
        transition: "all 0.5s",
    }

    return  <div key={id} style={{ border: 'solid', backgroundColor:'#bcc7cc', marginTop: "10px", marginBottom:"10px" }}>
        {showMore ? (
            id == '003' ? (
            <div style={{marginTop: "10px" }}>
                <div style={{ display: 'flex' }}>
                    <h5 style={{ textAlign: "center", marginLeft: "520px" }}>{positionName}</h5>
                    <p style={{textAlign: 'right', marginLeft: "350px" }}>{date}</p>
                </div>
                <div style={{ textAlign: 'left', marginLeft: "30px" }}>
                    {accomplishments.map(accomplishment => <p>+ {accomplishment}</p>)}
                </div>
                <button onClick={() => setShowMore(false)} style={showMoreTrue}>Show Less</button>
            </div>
            ) 
            : 
            (
            <div style={{marginTop: "10px"}}>
                <div style={{ display: 'flex' }}>
                    <h5 style={{ textAlign: "center", marginLeft: "490px" }}>{positionName}</h5>
                    <p style={{textAlign: 'right', marginLeft: "280px" }}>{date}</p>
                </div>
                <div style={{ textAlign: 'left', marginLeft: "30px" }}>
                    {accomplishments.map(accomplishment => <p>+ {accomplishment}</p>)}
                </div>
                <button onClick={() => setShowMore(false)} style={showMoreTrue}>Show Less</button>
            </div>)

        )
        : (
            id == '003' ? (
                <div style={{marginTop: "10px"}}>
                <div style={{ display: 'flex' }}>
                    <h5 style={{ textAlign: "center", marginLeft: "520px" }}>{positionName}</h5>
                    <p style={{textAlign: 'right', marginLeft: "360px" }}>{date}</p>
                </div>
                <button onClick={() => setShowMore(true)} style={showMoreFalse}>Show More</button>
            </div>
            ) 
            : 
            (<div style={{marginTop: "10px"}}>
                <div style={{ display: 'flex' }}>
                    <h5 style={{ textAlign: "center", marginLeft: "490px" }}>{positionName}</h5>
                    <p style={{textAlign: 'right', marginLeft: "280px" }}>{date}</p>
                </div>
                <button onClick={() => setShowMore(true)} style={showMoreFalse}>Show More</button>
            </div>)
            
        )}
     </div>
}


