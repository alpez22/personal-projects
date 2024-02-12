import { useEffect, useState } from "react"
import BakedGood from "./ProfExpSummary";
import { Col, Container, Row } from "react-bootstrap";
import AboutMe from "../local-json/About-Me.json"
import ProfessionalExperience from "../local-json/Professional-Experience.json"
import Projects from "../local-json/Projects.json"
import BioPic from "../../_figures/Bio_Pic.jpg"
import ProfExpSummary from "./ProfExpSummary";
import ProjectSummary from "./ProjectSummary"

export default function HomePage() {

    const [aboutMe, setAboutMe] = useState(AboutMe);
    console.log(aboutMe)
    const [profExp, setProfExp] = useState(ProfessionalExperience);
    console.log(profExp.internships)
    const [proj, setProj] = useState(Projects);
    console.log(proj)

    return (
        <div>
            <div style={{ border: 'solid', backgroundColor:'#bcccbf', marginTop: "10px" }}>
                <img src={BioPic} width={250} height={250} alt="Bio Pic" />
                <h2>{aboutMe.name}</h2>
                <h5>{aboutMe.year}</h5>
                <h5>GPA: {aboutMe.gpa}</h5>
                <p>{aboutMe.interests}</p>
            </div>
            
            <div style={{ borderRadius: "10px", border: 'solid', backgroundColor:'#bcc7cc' , marginTop: "10px"}}>
                <h1>Professional Experience</h1>
            </div>
            {profExp.internships && profExp.internships.map( internship => (
                <ProfExpSummary 
                    key={internship.id}
                    id={internship.id} 
                    companyName={internship.companyName}
                    location={internship.location}
                    date={internship.date}
                    positionName={internship.positionName}
                    accomplishments={internship.accomplishments}
                />
            ))}
            
            <div style={{ borderRadius: "10px", border: 'solid', backgroundColor:'#bcc0cc' , marginTop: "10px"}}>
                <h1>Projects</h1>
            </div>
            {proj.Projects && proj.Projects.map( p => (
                <ProjectSummary 
                    key={p.id}
                    id={p.id} 
                    name={p.name}
                    topic={p.topic}
                    location={p.location}
                    date={p.date}
                    positionName={p.positionName}
                    aboutJob={p.aboutJob}
                    project={p.project}
                    abstract={p.abstract}
                    forVideo={p.forVideo}
                    description={p.description}
                />
            ))}
        </div>
    );
}