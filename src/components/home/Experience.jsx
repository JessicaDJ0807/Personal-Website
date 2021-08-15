import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Container, Row, Jumbotron } from "react-bootstrap";

const Experience = ({ heading, experiences }) => {
    return (
        <div id="experience" className="section">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {experiences.heading}
                    </h2>
                    <Row>
                        {experiences.data.map((data) => {
                            return (
                                <ExperienceCard
                                    key={data.company}
                                    data={data}
                                />
                            );
                        })}
                    </Row>
                </Jumbotron>
            </Container>
        </div>
    );
};

export default Experience;
