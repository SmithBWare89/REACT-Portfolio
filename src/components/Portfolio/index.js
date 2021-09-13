import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Container, List, Image, Card, Grid } from 'semantic-ui-react';

// Add project image below
import projects from '../../projects.json';
import drinkologyImage from '../../assets/images/drinkology.png';
import soShulImage from '../../assets/images/soShul.png';
import pwaBudgetImage from '../../assets/images/pwaBudget.png';
import ollieWilliamsImage from '../../assets/images/ollieWilliams.png';
import reduxECommerceStoreImage from '../../assets/images/eCommerceRefactor.png';
import reactPortfolioImage from '../../assets/images/reactPortfolio.JPG';
import chatroomappImage from '../../assets/images/chatroomapp.png';

export default function Portfolio() {
    // Bring in new project
     const {
        reactPortfolio,
        drinkology,
        pwaBudget,
        soShul,
        ollieWilliamsWeather,
        reduxECommerceStore,
        chatroomapp
    } = projects

    const [show, setShow] = useState(false);
    const [project, setProject] = useState('');
    const handleModalClose = () => setShow(false);

    // Add new projects to array and update Switch cases
    const handleModalShow = (evt) => {
        // Update projects array to be able to find
        const projects = [
            'drinkology',
            'pwaBudget',
            'soShul',
            'ollieWilliamsWeather',
            'reduxECommerceStore',
            'reactPortfolio',
            'chatroomapp'
        ];

        const found = projects.find(element => element === evt.target.name);

        // Add new Switch case
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
            case 'reduxECommerceStore':
                setProject(reduxECommerceStore);
                setShow(true)
                break;
            case 'reactPortfolio':
                setProject(reactPortfolio);
                setShow(true);
                break;
            case 'chatroomapp':
                setProject(chatroomapp);
                setShow(true);
                break;
            default:
                console.log('Cannot find project!');
        }
    };

    const populateLanguages = (languages) => {
       return languages.toString().replaceAll(',', ', ');
    }

    return (
        <Container style={{ marginBottom: '100px !important' }}>      
            <Grid columns='two' divided doubling={true} style={{ marginBottom: '100px !important' }}>
                {/* Drinkology and Chatroom App*/}
                <Grid.Row>
                    {/* Drinkology */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={drinkologyImage} className='project-card-image' alt='A snapshot of my project that searches for cocktail recipes.'/>
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header card-adjustment-header'>{drinkology.header}</Card.Header>
                                <Card.Meta className='project-card-meta card-adjustment-meta' content={populateLanguages(drinkology.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='drinkology'>
                                Show More Info
                            </Button>
                        </Card>
                    </Grid.Column>
                        {/* Chatroom App */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={chatroomappImage} className='project-card-image' alt='A snapshot of my project that allows you to chat with friends in real time.'/>
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header card-adjustment-header'>{chatroomapp.header}</Card.Header>
                                <Card.Meta className='project-card-meta card-adjustment-meta' content={populateLanguages(chatroomapp.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='chatroomapp'>
                                Show More Info
                            </Button>
                        </Card>
                    </Grid.Column>
                </Grid.Row>

                {/* Portfolio and So-Shul */}
                <Grid.Row>
                    {/* REACT Portfolio */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={reactPortfolioImage} className='project-card-image' alt='A snapshot of my REACT portfolio project.' />
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header card-adjustment-header'>{reactPortfolio.header}</Card.Header>
                                <Card.Meta className='project-card-meta card-adjustment-meta' content={populateLanguages(reactPortfolio.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='reactPortfolio'>
                                Show More Info
                            </Button>
                        </Card>
                    </Grid.Column>
                    {/* so-Shul Network Budget */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={soShulImage} className='project-card-image so-shul-image' alt='A photo of my demonstration of a REST API with a minimalist front end.'/>
                            <Card.Content className='project-card-content so-shul-content'>
                                <Card.Header as='h1' className='project-card-header card-adjustment-header'>{soShul.header}</Card.Header>
                                <Card.Meta className='project-card-meta card-adjustment-meta' content={populateLanguages(soShul.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='soShul'>
                                Show More Info
                            </Button>
                        </Card>
                    </Grid.Column>
                </Grid.Row>

                {/* pwaBudget and Redux eCommerce */}
                <Grid.Row>
                    {/* pwaBudget */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={pwaBudgetImage} className='project-card-image' alt='A photo of my progressive web application budget tracker project.'/>
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header'>{pwaBudget.header}</Card.Header>
                                <Card.Meta className='project-card-meta' content={populateLanguages(pwaBudget.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='pwaBudget'>
                                Show More Info
                            </Button>
                        </Card>
                    </Grid.Column>
                    {/* eCommerce Redux */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={reduxECommerceStoreImage} className='project-card-image' alt='A photo of my shopping website that I refactored.'/>
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header'>{reduxECommerceStore.header}</Card.Header>
                                <Card.Meta className='project-card-meta' content={populateLanguages(reduxECommerceStore.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='reduxECommerceStore'>
                                Show More Info
                            </Button>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                {/* Ollie Williams */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={ollieWilliamsImage} className='project-card-image' alt='A photo of my weather dashboard project.' />
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header'>{ollieWilliamsWeather.header}</Card.Header>
                                <Card.Meta className='project-card-meta' content={populateLanguages(ollieWilliamsWeather.languages)} ></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='ollieWilliamsWeather'>
                                Show More Info
                            </Button>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
            {/* Modal Code */}
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
                            className='project-modal'
                        >
                            <Modal.Header closeButton className='project-modal-header'>
                                <Modal.Title className='project-modal-title'>{project.header}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='project-modal-body'>
                                    <h3>Description</h3>
                                    {project.description}
                                    <h3>Competencies</h3>
                                    <List as='ul'>
                                        {project.languages.map((language) => {
                                            return <List.Item as='li'>{language}</List.Item>
                                        })}
                                    </List>
                                    <p><a href={project.repository} name='repository'>Repository</a></p>
                                    <p><a href={project.deployed} name='deployed'>Deployed</a></p>
                            </Modal.Body>
                            <Modal.Footer className='project-modal-footer'>
                                <Button className='project-modal-button' variant="secondary" onClick={handleModalClose}>
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