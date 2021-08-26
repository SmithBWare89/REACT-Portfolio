import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Container, List, Image, Card, Grid } from 'semantic-ui-react';

// Add project image below
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
import reactPortfolioImage from '../../assets/images/reactPortfolio.JPG';

export default function Portfolio() {
    // Bring in new project
     const {
        reactPortfolio,
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
            'teamProfileGenerator',
            'reduxECommerceStore',
            'scriptifyQuiz',
            'readmeGenerator',
            'regexGist',
            'reactPortfolio'
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
            case 'reactPortfolio':
                setProject(reactPortfolio);
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
                {/* REACT Portfolio and REACT Portfolio */}
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
                </Grid.Row>

                {/* Ollie Williams and So-Shul */}
                <Grid.Row>
                    {/* Ollie Williams Budget */}
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
            
                {/* Scriptify and Readme Generator */}
                <Grid.Row>
                    {/* Scriptify */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={scriptifyQuizImage} className='project-card-image' style={{height: '175px'}} alt='A photo of my Javascript quiz website that uses a timer and stores your high score!'/>
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header'>{scriptifyQuiz.header}</Card.Header>
                                <Card.Meta className='project-card-meta' content={populateLanguages(scriptifyQuiz.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='scriptifyQuiz'>
                                Show More Info
                            </Button>
                        </Card>
                    </Grid.Column>
                    {/* Readme Generator */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={readmeGeneratorImage} className='project-card-image' style={{height: '175px'}} alt='A photo of my Readme Generator project.'/>
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header'>{readmeGenerator.header}</Card.Header>
                                <Card.Meta className='project-card-meta' content={populateLanguages(readmeGenerator.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='readmeGenerator'>
                                Show More Info
                            </Button>
                        </Card>
                    </Grid.Column>
                </Grid.Row>

                {/* Regex Gist and Team Profile */}
                <Grid.Row>
                    {/* Regex Gist */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={regexGistImage} className='project-card-image' alt='A photo of the Regex gist to show URL matching.'/>
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header'>{regexGist.header}</Card.Header>
                                <Card.Meta className='project-card-meta' content={populateLanguages(regexGist.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='regexGist'>
                                Show More Info
                            </Button>
                        </Card>
                    </Grid.Column>
                    {/* Team Profile Generator */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={teamProfileImage} className='project-card-image' style={{ height: '175px' }} alt='A snapshot of my team profile generator project that uses the command line.' />
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header'>{teamProfileGenerator.header}</Card.Header>
                                <Card.Meta className='project-card-meta' content={populateLanguages(teamProfileGenerator.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='teamProfileGenerator'>
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