import React, { useState } from 'react';
import { Carousel, Button, Modal } from 'react-bootstrap';
import { Container, List } from 'semantic-ui-react'
import projects from '../../projects.json';

export default function Portfolio() {
    const {
        drinkology,
        pwaBudget,
        soShul
    } = projects
    
    const imageStyles = {
        height: '400px',
        width: '800px'
    }

    const h3Style = {
        color: '#fc5130',
        textShadow: '2px 2px #001427',
        fontSize: '3em'
    }

    const [show, setShow] = useState(false);
    const [project, setProject] = useState('');
    const [index, setIndex] = useState(0);

    const handleClose = () => setShow(false);

    const handleShow = (evt) => {

        if(evt.target.name === 'drinkology'){
            setProject(drinkology);
        } else if (evt.target.name === 'soShul') {
            setProject(soShul)
        } else if (evt.target.name === 'pwaBudget') {
            setProject(pwaBudget)
        }

        setShow(true)
    };

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    return (
        <Container>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require(`../../assets/images/${drinkology.altName}.png`)}
                            alt="First slide"
                            style={imageStyles}
                        />
                        <Carousel.Caption>
                            <h3 style={h3Style}>{drinkology.header}</h3>
                            <Button variant="primary" onClick={handleShow} name='drinkology'>
                                Show More Info
                            </Button>
                        </Carousel.Caption>
                        
                    </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require(`../../assets/images/${pwaBudget.altName}.png`)}
                        alt="Third slide"
                        style={imageStyles}
                    />

                    <Carousel.Caption>
                        <h3 style={h3Style}>{pwaBudget.header}</h3>
                        <Button variant="primary" onClick={handleShow} name='pwaBudget'>
                                Show More Info
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require(`../../assets/images/${soShul.altName}.png`)}
                        alt="Third slide"
                        style={imageStyles}
                    />

                    <Carousel.Caption>
                        <h3 style={h3Style}>{soShul.header}</h3>
                        <Button variant="primary" onClick={handleShow} name='soShul'>
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
                            onHide={handleClose}
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
                            <Button variant="secondary" onClick={handleClose}>
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