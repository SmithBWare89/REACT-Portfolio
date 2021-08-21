import React, { useState } from 'react';
import { Carousel, Button, Modal } from 'react-bootstrap';
import { Container, List, Dimmer, Image, Card, Grid } from 'semantic-ui-react';
import drinkologyImage from '../../assets/images/drinkology.png';
import soShulImage from '../../assets/images/soShul.png';
import pwaBudgetImage from '../../assets/images/pwaBudget.png';
import ollieWilliamsImage from '../../assets/images/ollieWilliams.png'
import projects from '../../projects.json';

export default function Portfolio() {
    const {
        drinkology,
        pwaBudget,
        soShul,
        ollieWilliamsWeather
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
        if(evt.target.name === 'drinkology'){
            setProject(drinkology);
        } else if (evt.target.name === 'soShul') {
            setProject(soShul)
        } else if (evt.target.name === 'pwaBudget') {
            setProject(pwaBudget)
        }

        setShow(true)
    };

    const handleIndexSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container>
            <Carousel activeIndex={index} onSelect={handleIndexSelect}>
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