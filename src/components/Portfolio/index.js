import React, { useState } from 'react';
import { Carousel, Button, Modal } from 'react-bootstrap';
import { Container, List, Image, Header, Card, Item, Grid } from 'semantic-ui-react';

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

    const [show, setShow] = useState(false);
    const [project, setProject] = useState('');
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

    const imageStyle = {
        height: 'auto',
        maxHeight: '175px',
        width: 'auto',
        maxWidth: '100%'
    }

    const populateLanguages = (languages) => {
       return languages.toString().replaceAll(',', ', ');
    }

    return (
        <Container style={{ marginBottom: '100px !important' }}>      
            <Grid columns='two' divided doubling={true} style={{ marginBottom: '100px !important' }}>
                {/* Drinkology and Ollie Williams */}
                <Grid.Row>
                    {/* Drinkology */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={drinkologyImage} style={imageStyle} />
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header'>{drinkology.header}</Card.Header>
                                <Card.Meta className='project-card-meta' content={populateLanguages(drinkology.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='drinkology'>
                                Show More Info
                            </Button>
                        </Card>
                    </Grid.Column>
                    {/* Ollie Williams Budget */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={ollieWilliamsImage} style={imageStyle} />
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

                {/* PWA Budget and So-Shul */}
                <Grid.Row>
                    {/* pwaBudget */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={pwaBudgetImage} style={imageStyle} />
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header'>{pwaBudget.header}</Card.Header>
                                <Card.Meta className='project-card-meta' content={populateLanguages(pwaBudget.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='pwaBudget'>
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
                            <Image src={soShulImage} style={imageStyle} className='so-shul-image'/>
                            <Card.Content className='project-card-content so-shul-content'>
                                <Card.Header as='h1' className='project-card-header so-shul-header'>{soShul.header}</Card.Header>
                                <Card.Meta className='project-card-meta' content={populateLanguages(soShul.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='soShul'>
                                Show More Info
                            </Button>
                        </Card>
                    </Grid.Column>
                </Grid.Row>

                {/* Team Profile and Redux eCommerce */}
                <Grid.Row>
                    {/* Team Profile Generator */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={teamProfileImage} style={imageStyle, {height: '175px'}} />
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header'>{teamProfileGenerator.header}</Card.Header>
                                <Card.Meta className='project-card-meta' content={populateLanguages(teamProfileGenerator.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='teamProfileGenerator'>
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
                            <Image src={reduxECommerceStoreImage} style={imageStyle} />
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
                            <Image src={scriptifyQuizImage} style={imageStyle, {height: '175px'}} />
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
                            <Image src={readmeGeneratorImage} style={imageStyle, {height: '175px'}} />
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

                {/* Regex Gist */}
                <Grid.Row>
                    {/* Regex Gist */}
                    <Grid.Column>
                        <Card
                            fluid
                            onClick={handleModalShow}
                            className='project-card'
                        >
                            <Image src={regexGistImage} style={imageStyle} />
                            <Card.Content className='project-card-content'>
                                <Card.Header as='h1' className='project-card-header'>{regexGist.header}</Card.Header>
                                <Card.Meta className='project-card-meta' content={populateLanguages(regexGist.languages)}></Card.Meta>
                            </Card.Content>
                            <Button className='project-button-style' variant="primary" onClick={handleModalShow} name='regexGist'>
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