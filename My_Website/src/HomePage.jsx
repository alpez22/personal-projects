import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Summaries from './Summaries';

export default function HomePage() {

    const [aboutMe, setAboutMe] = useState([]);
    const [professionals, setProfessionals] = useState([]);
    const [projects, setProjects] = useState([]);

    return (<div>
        <h1>About Me</h1>
        <Container fluid>
            {aboutMe.map((aboutMe) => {
                <Col key={aboutMe.id} xs={12} md={6} lg={4} xl={3}>
                    <Summaries
                    />
                </Col>
            })}
        </Container>

        <h1>Professional Experience</h1>
        <Container fluid>
            {professionals.map((professional) => {
                <Col key={professional.id} xs={12} md={6} lg={4} xl={3}>
                    <Summaries        
                    />
                </Col>
            })}
        </Container>

        <h1>Projects</h1>
        <Container fluid>
            {projects.map((project) => {
                <Col key={project.id} xs={12} md={6} lg={4} xl={3}>
                    <Summaries        
                    />
                </Col>
            })}
        </Container>
        </div>
    )
}