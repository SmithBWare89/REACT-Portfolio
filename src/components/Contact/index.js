import React from 'react';
import '../../App.css';
import SkillImages from '../SkillImages'
import { Container, Header, Icon, Image } from 'semantic-ui-react';

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

            {/* <Header className="contact-header">Skills</Header>
            <SkillImages /> */}
        </Container>
    )
}