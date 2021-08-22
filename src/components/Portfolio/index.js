import React, { useState } from 'react';
import { Carousel, Button, Modal } from 'react-bootstrap';
import { Container, List, Dimmer, Image, Card, Grid } from 'semantic-ui-react';

import projects from '../../projects.json';
import drinkologyImage from '../../assets/images/drinkology.png';
import soShulImage from '../../assets/images/soShul.png';
import pwaBudgetImage from '../../assets/images/pwaBudget.png';
import ollieWilliamsImage from '../../assets/images/ollieWilliams.png';
import teamProfileImage from '../../assets/images/teamProfile.jpg';
import reduxECommerceStoreImage from '../../assets/images/eCommerceRefactor.png';
import scriptifyQuizImage from '../../assets/images/scriptifyQuiz.png';
import readmeGeneratorImage from '../../assets/images/readmeGenerator.png';
import regexGistImage from '../../assets/images/regexGist.png';

export default function Portfolio() {
    // Add projects from projects.json here
    const {
        drinkology,
        pwaBudget,
        soShul,
        ollieWilliamsWeather,
        teamProfileGenerator,
        reduxECommerceStore,
        scriptifyQuiz,
        readmeGenerator,
        regexGist
    } = projects

    const h3Style = {
        color: '#fc5130',
        textShadow: '2px 2px #001427',
        fontSize: '3em'
    }

    const [show, setShow] = useState(false);
    const [project, setProject] = useState('');
    const [index, setIndex] = useState(0);

    const handleModalClose = () => setShow(false);

    const handleModalShow = (evt) => {
        // Update projects array to be able to find
        const projects = [
            'drinkology',
            'pwaBudget',
            'soShul',
            'ollieWilliamsWeather',
            'teamProfileGenerator',
            'reduxECommerceStore',
            'scriptifyQuiz',
            'readmeGenerator',
            'regexGist'
        ];

        const found = projects.find(element => element === evt.target.name);

        switch (found) {
            case 'drinkology':
                setProject(drinkology);
                setShow(true)
                break;
            case 'pwaBudget':
                setProject(pwaBudget);
                setShow(true)
                break;
            case 'soShul':
                setProject(soShul);
                setShow(true)
                break;
            case 'ollieWilliamsWeather':
                setProject(ollieWilliamsWeather);
                setShow(true)
                break;
            case 'teamProfileGenerator':
                setProject(teamProfileGenerator);
                setShow(true)
                break;
            case 'reduxECommerceStore':
                setProject(reduxECommerceStore);
                setShow(true)
                break;
            case 'scriptifyQuiz':
                setProject(scriptifyQuiz);
                setShow(true)
                break;
            case 'readmeGenerator':
                setProject(readmeGenerator);
                setShow(true)
                break;
            case 'regexGist':
                setProject(regexGist);
                setShow(true)
                break;
            default:
                console.log('Cannot find project!');
        }

        // Alternative Way to Show In Carousal
        // if(evt.target.name === 'drinkology'){
        //     setProject(drinkology);
        // } else if (evt.target.name === 'soShul') {
        //     setProject(soShul)
        // } else if (evt.target.name === 'pwaBudget') {
        //     setProject(pwaBudget)
        // }

        // setShow(true)
    };

    const handleIndexSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container>
            <Carousel activeIndex={index} onSelect={handleIndexSelect}>
                {/* First Slide - Drinkology */}
                <Carousel.Item>
                        <img
                            className="d-block"
                            src={drinkologyImage}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 style={h3Style}>{drinkology.header}</h3>
                            <Button variant="primary" onClick={handleModalShow} name='drinkology'>
                                Show More Info
                            </Button>
                        </Carousel.Caption>
                        
                    </Carousel.Item>
                {/* Second Slide - pwaBudget */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={pwaBudgetImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 style={h3Style}>{pwaBudget.header}</h3>
                        <Button variant="primary" onClick={handleModalShow} name='pwaBudget'>
                                Show More Info
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Third Slide - So-Shul Network */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={soShulImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 style={h3Style}>{soShul.header}</h3>
                        <Button variant="primary" onClick={handleModalShow} name='soShul'>
                                Show More Info
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Fourth Slide - Ollie Williams Weather */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={ollieWilliamsImage}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3 style={h3Style}>{ollieWilliamsWeather.header}</h3>
                        <Button variant="primary" onClick={handleModalShow} name='ollieWilliamsWeather'>
                                Show More Info
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Fifth Slide - Team Profile Generator */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={teamProfileImage}
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        <h3 style={h3Style}>{teamProfileGenerator.header}</h3>
                        <Button variant="primary" onClick={handleModalShow} name='teamProfileGenerator'>
                                Show More Info
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Sixth Slide - Redux eCommmerce Refactor */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={reduxECommerceStoreImage}
                        alt="Sixth slide"
                    />

                    <Carousel.Caption>
                        <h3 style={h3Style}>{reduxECommerceStore.header}</h3>
                        <Button variant="primary" onClick={handleModalShow} name='reduxECommerceStore'>
                                Show More Info
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Seventh Slide - Scriptify Quiz */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={scriptifyQuizImage}
                        alt="Seventh slide"
                    />

                    <Carousel.Caption>
                        <h3 style={h3Style}>{scriptifyQuiz.header}</h3>
                        <Button variant="primary" onClick={handleModalShow} name='scriptifyQuiz'>
                                Show More Info
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Eighth Slide - Readme Generator */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={readmeGeneratorImage}
                        alt="Eighth slide"
                    />

                    <Carousel.Caption>
                        <h3 style={h3Style}>{readmeGenerator.header}</h3>
                        <Button variant="primary" onClick={handleModalShow} name='readmeGenerator'>
                                Show More Info
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Ninth Slide - Regex Gist */}
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={regexGistImage}
                        alt="Ninth slide"
                    />

                    <Carousel.Caption>
                        <h3 style={h3Style}>{regexGist.header}</h3>
                        <Button variant="primary" onClick={handleModalShow} name='regexGist'>
                                Show More Info
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Template */}
                {/* <Carousel.Item>
                    <img
                        className="d-block"
                        src={Fill With Imported Image Variable}
                        alt="Ninth slide"
                    />

                    <Carousel.Caption>
                        <h3 style={h3Style}>{Project Name.header}</h3>
                        <Button variant="primary" onClick={handleModalShow} name=Project Name>
                                Show More Info
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
            <>
                {
                    project
                        ? (
                            <Modal
                            show={show}
                            onHide={handleModalClose}
                            backdrop="static"
                            keyboard={false}
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>{project.header}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                    <h3>Description</h3>
                                    {project.description}
                                    <h3>Competencies</h3>
                                    <List as='ul'>
                                        {project.languages.map((language) => {
                                            return <List.Item as='li'>{language}</List.Item>
                                        })}
                                    </List>
                                    <p><a href={project.repository}>Repository</a></p>
                                    <p><a href={project.deployed}>Deployed</a></p>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                            </Modal>
                        )
                        : false
                }
            </>
        </Container>
    )
}