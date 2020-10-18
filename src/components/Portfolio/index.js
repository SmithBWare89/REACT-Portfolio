import React, {useState} from "react";
import {Carousel} from '3d-react-carousal';
import { Header, Image, Modal, Container, List } from 'semantic-ui-react'
import drinkology from '../../images/drinkology.png';
import pwaBudget from '../../images/pwa-budget.png';
import soShul from '../../images/so-shul.png';
import '../../App.css';

export default function Portfolio() {
    const imageStyle = {
        width: 'clamp(23ch, 800, 46ch)',
        height: 'clamp(23ch, 300px, 46ch)'
    }

    const [drinkologyOpen, setDrinkologyOpen] = useState(false);
    const [pwaBudgetOpen, setPWABudgetOpen] = useState(false);
    const [soShulOpen, setSoShulOpen] = useState(false);

    let slides = [
// Drinkology Modal
                <Modal
                onClose={() => {
                    return setDrinkologyOpen(false)
                }}
                onOpen={(evt) => {
                    if(evt.target.getAttribute('data-name') === 'drinkology'){
                        return setDrinkologyOpen(true)
                    }
                }}
                open={drinkologyOpen}
                trigger={<Image src={drinkology} alt="1" style={imageStyle} data-name='drinkology'/>}
                >
                    <Header>Drinkology</Header>
                    <Modal.Content>
                        <Container>
                                <h4>Summary</h4>
                                <p>
                                    Drinkology was created to allow end users to look up cocktail recipes, and master the art of mixology in the comfort of their own home. 
                                    Members are able to sign in,save receipes to their account and leave reviews.
                                </p>
                                <h4>Languages Used</h4>
                                <List.List as='ul'>
                                    <List.Item as='li'>Node</List.Item>
                                    <List.Item as='li'>Express</List.Item>
                                    <List.Item as='li'>Handlebars</List.Item>
                                    <List.Item as='li'>Bootstrap</List.Item>
                                    <List.Item as='li'>HTML</List.Item>
                                    <List.Item as='li'>Javascript</List.Item>
                                    <List.Item as='li'>CSS</List.Item>
                                </List.List>
                                <h4>Collaborators</h4>
                                <List.List as='ul'>
                                    <List.Item as='li'><a href="https://github.com/Mayorgak">Kristen Mayorga</a></List.Item>
                                    <List.Item as='li'><a href="https://github.com/leo-ayala">Leo Ayala</a></List.Item>
                                </List.List>
                                <a href="https://github.com/Mayorgak/drinkology"><h4>Repository</h4></a>
                                <a href="https://damp-peak-42313.herokuapp.com/"><h4>Deployed</h4></a>
                        </Container>
                    </Modal.Content>
                </Modal>,
// Progressive Web App Budget Tracker Modal
                <Modal
                    onClose={() => {
                        return setPWABudgetOpen(false)
                    }}
                    onOpen={(evt) => {
                        if(evt.target.getAttribute('data-name') === 'pwa-budget'){
                            return setPWABudgetOpen(true)
                        }
                    }}
                    open={pwaBudgetOpen}
                    trigger={<Image src={pwaBudget} alt="2" style={imageStyle} data-name='pwa-budget'/>}
                >
                    <Header>Budget Tracker PWA</Header>
                    <Modal.Content>
                        <Container>
                                <h4>Summary</h4>
                                <p>
                                    This project is intended to be a demonstration of a progressive web application. 
                                    It utilizes a service worker to register data caches in the browser to not only store files vital to the function of this app but also a snapshot of 
                                    data so the user will be able to maintain an accurate budget when they're in low or no signal areas. 
                                    Users will be to install this application on their desktop or on their mobile device from the browser.
                                </p>
                                <h4>Languages Used</h4>
                                <List.List as='ul'>
                                    <List.Item as='li'>Node</List.Item>
                                    <List.Item as='li'>Express</List.Item>
                                    <List.Item as='li'>MongoDB</List.Item>
                                    <List.Item as='li'>HTML</List.Item>
                                    <List.Item as='li'>Javascript</List.Item>
                                    <List.Item as='li'>CSS</List.Item>
                                </List.List>
                                <a href="https://github.com/SmithBWare89/progressive-app-budget-tracker#languages"><h4>Repository</h4></a>
                                <a href="https://progressive-budget-tracker-app.herokuapp.com/"><h4>Deployed</h4></a>
                        </Container>
                    </Modal.Content>
                </Modal>,
// So-Shul API Modal
                <Modal
                onClose={() => {
                    return setSoShulOpen(false)
                }}
                onOpen={(evt) => {
                    if(evt.target.getAttribute('data-name') === 'so-shul'){
                        return setSoShulOpen(true)
                    }
                }}
                open={soShulOpen}
                trigger={<Image src={soShul} alt="3" style={imageStyle} data-name='so-shul'/>}
            >
                <Header>So-Shul RESTful API</Header>
                <Modal.Content>
                    <Container>
                            <h4>Summary</h4>
                            <p>
                                This project is intended to be a demonstration of a RESTful API using a combination of MongoDB, Express, Mongoose, and Moment. 
                                It's been expanded to include a minimalist front end to allow for a web app representation of the data being created in our database. 
                                Further developments for this project would be to update the formatting of the project along with streamlining the API routes.
                            </p>
                            <h4>Languages Used</h4>
                            <List.List as='ul'>
                                <List.Item as='li'>Node</List.Item>
                                <List.Item as='li'>Express</List.Item>
                                <List.Item as='li'>MongoDB</List.Item>
                                <List.Item as='li'>Mongoose</List.Item>
                                <List.Item as='li'>Bcrypt</List.Item>
                                <List.Item as='li'>HTML</List.Item>
                                <List.Item as='li'>Javascript</List.Item>
                                <List.Item as='li'>CSS</List.Item>
                            </List.List>
                            <a href="https://github.com/SmithBWare89/so-shul-api"><h4>Repository</h4></a>
                            <a href="https://so-shul.herokuapp.com/"><h4>Deployed</h4></a>
                    </Container>
                </Modal.Content>
            </Modal>
        ];

    return (
        <Carousel slides={slides} autoplay={false} />
    )
}