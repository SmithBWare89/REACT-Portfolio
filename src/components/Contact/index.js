import React from 'react';
import '../../App.css';
import { Container, Header, Icon, Grid } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact, faCss3Alt, faJava, faJsSquare, faBootstrap, faNode, faAngular,   } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <Container>
            <Header className="contact-header">Contact Me</Header>
            <Header as='h2' className='contact-email' color='white'>
                <span>
                <Icon aria-hidden='false' name='mail' size='large' className='contact-icon'/>
                : <a href='mailto:SmithWrestling89@gmail.com?subject=Job Inquiry&body=Message'>SmithWrestling89@gmail.com</a>
                </span>
            </Header>

            <br />

            <Header className="contact-header">Skills</Header>
            <Header as='h2' className='contact-email' color='white'>
                <span>
                <Icon aria-hidden='false' name='mail' size='large' className='contact-icon'/>
                : <a href='mailto:SmithWrestling89@gmail.com?subject=Job Inquiry&body=Message'>SmithWrestling89@gmail.com</a>
                </span>
            </Header>
        </Container>
    )
}